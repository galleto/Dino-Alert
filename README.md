# DinoAlert · Frontend 3D

> Detecta hoy, evita la llamada.

Frontend de DinoAlert: un centro de monitoreo 3D para PyMEs con alertas, diagnóstico, historial y lectura de telemetría. La interfaz consume los tenants, métricas y alertas desde la API; no embebe datos privados en el build.

## Requisitos

- Node.js 18 o superior (recomendado 20 LTS)
- npm 9 o superior
- Un navegador actual con WebGL (Chrome, Edge, Firefox o Safari recientes). Si no hay WebGL, la app muestra una vista 2D equivalente.

## Instalación y ejecución

```bash
npm install
npm run dev
```

Con `VITE_API_URL` vacío, Vite reenvía `/api` al backend local en `http://localhost:8000`. Inicia la API en otra terminal con:

```bash
pip install -r backend/requirements.txt
uvicorn backend.app.main:app --reload --port 8000
```

Para usar una API en la nube, copia `.env.example` a `.env` y elige uno de estos modos:

- **Frontend con Vite (`npm run dev`)**: define `VITE_API_URL` con el origen público de la API.
- **Frontend servido por Docker + nginx (`docker compose`)**: deja `VITE_API_URL=` vacío para que el frontend use rutas relativas y nginx reenvíe `/api` hacia la API.

Así el mismo build puede usarse localmente o contra la nube; el dataset privado permanece en la base de datos.

El aislamiento y sus migraciones aditivas se activan con
`ENABLE_TENANT_ISOLATION=true`; `ENABLE_TIGER_DATA_FEATURES` permanece separado
para otras funciones Tiger. Configura el flag de aislamiento en el servicio
desplegado para ocultar las cargas privadas de las listas públicas.

`POST /api/ingest` acepta un ZIP con una o varias empresas. Crea un tenant
`usuario` por empresa, con IDs aleatorios que comparten un token de esa carga.
La respuesta contiene los IDs, conteos y URLs para volver a abrir cada carga.
El navegador conserva esos IDs en `localStorage` para mostrarlos bajo “Mis
cargas”; el ID es una credencial portadora y debe guardarse de forma segura.
`MAX_UPLOAD_BYTES` y `MAX_UPLOAD_ROWS` configuran los límites (25 MiB y 100,000
filas por defecto).

Los tenants creados directamente en SQL o por la CLI usan el tipo por defecto
`demo_publico` y siguen apareciendo en `GET /api/tenants`. Las escrituras
administrativas sobre esos tenants requieren un `ACCESS_CODE` configurado y
válido; si no está configurado, se rechazan. En `POST /api/ingest`, `tenant`
solo sirve como nombre para una nueva carga; `public_tenant` es la selección
explícita para una carga administrativa autorizada.

Vite abre `http://localhost:5173`. Para generar la versión de producción:

```bash
npm run build
npm run preview
```

Para generar las frases habladas de la mascota, configura `ELEVENLABS_API_KEY`
y las voces `ELEVENLABS_TIA_PAOLA`, `ELEVENLABS_FLOR`, `ELEVENLABS_DAVID` y
`ELEVENLABS_DIEGO` en `.env`, y ejecuta desde la raíz del proyecto:

```bash
node scripts/Elevenlabs/GrabarVoz.cjs
```

Se genera un MP3 por estado y voz en `Audios/voices/`. Las frases se comparten
con la burbuja de texto de la mascota.

El dinosaurio reproduce el efecto correspondiente y anuncia alertas nuevas,
cambios de severidad y cambios de estado con la voz elegida en Configuración
(David por defecto). Si el navegador bloquea la reproducción automática, el
audio de inicio se reproduce después de la primera interacción. Los botones
usan `Open File.mp3`; los demás efectos sorpresa se pueden activar manualmente
en Configuración y cada uno suena una sola vez por sesión.

Al abrir la app, se muestra una bienvenida breve animada con la marca DinoAlert
antes de presentar el estado de conexión con la API.

## Despliegue con Docker

El despliegue local incluye TimescaleDB, la API, el worker y el frontend:

```bash
docker compose --profile local up -d --build
curl http://localhost:3000/api/health
```

Para usar Tiger Cloud, define `DATABASE_URL` con la cadena de conexión de Tiger
Cloud y levanta el perfil que no incluye una base local:

```bash
export DATABASE_URL='postgresql://usuario:contraseña@host:5432/base'
docker compose --profile cloud up -d --build
```

El frontend queda disponible en `http://localhost:3000`; nginx reenvía las rutas
`/api` a la API. La API ejecuta las migraciones automáticamente antes de aceptar
tráfico. Ningún servicio usa los puertos 80, 81 o 443.

Las fuentes (Unbounded y Manrope) se cargan desde Google Fonts. Sin internet, la interfaz usa las fuentes del sistema y sigue funcionando.

## Estructura

```text
src/
├── data/
│   ├── demoData.js        Única fuente de datos de demostración (clientes, escenarios, señales)
│   └── engine.js          Deriva estados, métricas, alertas, eventos e historial
├── context/DemoContext.jsx  Estado global: cliente, escenario, minuto simulado, preferencias
├── hooks/                 Enrutador por hash y preferencia de movimiento reducido
├── scenes/
│   ├── MonitoringScene.jsx    Envoltorio React + controles de cámara + leyenda
│   ├── SceneController.js     Escena Three.js (cámara, selección, render, limpieza)
│   ├── infrastructureNodes.js Racks, equipos, servicios, almacenamiento y red
│   ├── mascot.js              T-Rex rosa hecho con geometrías primitivas
│   ├── meteors.js             Meteoritos (señal que se acerca a un componente)
│   ├── layout.js              Distribución por zonas en la plataforma
│   └── SceneFallback.jsx      Vista 2D cuando no hay WebGL
├── components/            layout, common, charts, alerts, infra
├── pages/                 Las 7 vistas
└── styles/                Tokens, base, layout, componentes, escena y páginas
```

## Vistas

1. **Monitoreo**: escena 3D protagonista, estado general, alertas prioritarias y últimos eventos.
2. **Alertas**: agrupadas por prioridad, con búsqueda y filtros por prioridad, estado y componente; detalle en panel lateral.
3. **Infraestructura**: alterna entre vista 3D y lista con los mismos datos; búsqueda, filtros (en 3D atenúan lo que no coincide) y “Ubicar en la escena 3D”.
4. **Diagnóstico**: qué se observó, métricas que cambiaron, cuándo empezó, evolución, componentes relacionados, hipótesis (marcadas como no verificadas) y qué revisar.
5. **Historial**: tabla con filtros y ordenamiento por fecha, componente y prioridad.
6. **Datos**: ventana de lecturas reales recibidas, con navegación temporal.
7. **Configuración**: cliente, tema, animaciones, etiquetas, calidad 3D y restablecer.

## Interacción con la escena 3D

- Arrastrar: rotar. Rueda o pellizco: acercar y alejar. Clic derecho o dos dedos: desplazar (limitado a la plataforma).
- Clic en un componente: abre su panel de detalle. Clic en vacío: deselecciona.
- Botones superpuestos: acercar, alejar, restablecer vista y centrar la selección.
- Selector “Ir a un componente”: alternativa accesible por teclado que además centra la cámara.

Los estados no dependen solo del color: cada uno tiene icono y texto (Normal, Revisar, Riesgo, Sin datos), forma distinta en la leyenda y, en el caso sin datos, un anillo punteado y material translúcido.

## Fuente de datos

La interfaz consulta `GET /api/tenants`, `GET /api/metricas/{tenant}` y `GET /api/alertas`. Los datos del directorio `zikit-dataset-main` se cargan al backend con el flujo de ingesta documentado en [API_CONTRACT.md](./API_CONTRACT.md); no se copian al bundle del navegador. Los nombres de componentes se presentan como una representación visual de las métricas registradas, mientras que las alertas, evidencia y recomendaciones provienen de la API.

## Decisiones técnicas

- **Three.js directo, sin React Three Fiber.** La escena vive en una clase (`SceneController`) que React controla mediante métodos. Así un cambio de estado actualiza colores y etiquetas sin reconstruir la escena, y hay una dependencia menos. Por eso los archivos difieren de los nombres sugeridos (`ServerNode.jsx`, etc.): cada tipo de nodo está en `infrastructureNodes.js`.
- **Gráficas SVG propias en vez de Recharts.** Solo se necesitaban líneas con umbral, marcas de inicio, huecos “sin datos” y cabezal de reproducción; un componente de unos 150 líneas cubre todo sin añadir ~400 KB.
- **Enrutador por hash** en lugar de React Router: 7 vistas no lo justifican y funciona en cualquier hosting estático.
- **Rendimiento**: geometrías y materiales compartidos; una luz con sombra (desactivable en “Calidad ligera”); píxeles limitados a 1.75×; el bucle se detiene cuando la escena no es visible o la pestaña está oculta; con movimiento reducido solo se dibuja cuando algo cambia; al desmontar se liberan geometrías, materiales, controles y el contexto WebGL.
- **Accesibilidad**: navegación completa con teclado, foco visible, panel lateral que se cierra con Esc y devuelve el foco, `aria-live` para el estado general y avisos, tablas con `aria-sort`, y respeto a `prefers-reduced-motion` (además del ajuste manual).
- **Dependencias fijadas** a versiones exactas: React 18.3.1, Three.js 0.160.0, lucide-react 0.383.0, Vite 5.4.10.

## Verificación realizada

Verificado en este repositorio:

- `npm run build` completa correctamente y genera el bundle de producción.
- `docker compose build frontend` completa correctamente, incluyendo assets de audio (`Audios/`).
- `docker compose --profile local up -d --build` levanta frontend/API/worker/base local con healthcheck de API.

**Pendiente recomendado**: validación visual manual en navegador del flujo completo (escena WebGL, panel lateral, audio y bienvenida animada) en el entorno de despliegue final.

## Navegadores

Los estilos usan `color-mix()` y `:has()`, disponibles en Chrome/Edge 111+, Safari 16.4+ y Firefox 121+.
