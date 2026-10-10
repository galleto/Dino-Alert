# DinoAlert · Frontend 3D

> Detecta hoy, evita la llamada.

Prototipo **solo frontend** de DinoAlert: un centro de monitoreo 3D para PyMEs con alertas, diagnóstico, historial y un laboratorio de simulación. No incluye backend, API, base de datos ni detección real. Todo lo que se ve proviene de datos simulados generados en el navegador.

## Requisitos

- Node.js 18 o superior (recomendado 20 LTS)
- npm 9 o superior
- Un navegador actual con WebGL (Chrome, Edge, Firefox o Safari recientes). Si no hay WebGL, la app muestra una vista 2D equivalente.

## Instalación y ejecución

```bash
cd dinoalert-frontend
npm install
npm run dev
```

Vite abre `http://localhost:5173`. Para generar la versión de producción:

```bash
npm run build
npm run preview
```

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
6. **Laboratorio**: 4 escenarios, iniciar, pausar, avanzar, reiniciar, velocidad y línea de tiempo con marcas.
7. **Configuración**: cliente, tema, animaciones, etiquetas, calidad 3D y restablecer.

## Interacción con la escena 3D

- Arrastrar: rotar. Rueda o pellizco: acercar y alejar. Clic derecho o dos dedos: desplazar (limitado a la plataforma).
- Clic en un componente: abre su panel de detalle. Clic en vacío: deselecciona.
- Botones superpuestos: acercar, alejar, restablecer vista y centrar la selección.
- Selector “Ir a un componente”: alternativa accesible por teclado que además centra la cámara.

Los estados no dependen solo del color: cada uno tiene icono y texto (Normal, Revisar, Riesgo, Sin datos), forma distinta en la leyenda y, en el caso sin datos, un anillo punteado y material translúcido.

## Qué es simulado

Todo. En concreto:

- **Clientes**: Ferretería Alameda, Transportes Sierra Norte y Clínica Dental Nogal son ficticios, igual que sus componentes y conexiones. La escena es una representación ilustrativa, no un plano real.
- **Métricas** (procesador, memoria, disco, tiempo de respuesta, errores): se calculan con ruido determinista más las desviaciones del escenario. La misma entrada siempre da el mismo resultado.
- **Alertas y estados**: salen de las señales definidas en cada escenario, no de un modelo de detección.
- **Hora**: la ventana simulada va de 09:00 a 09:59 de un día de demostración (9 de octubre de 2026).
- **Historial**: 22 registros ficticios de los 14 días anteriores por cliente.
- **Interpretaciones y recomendaciones**: textos de ejemplo por tipo de señal; la interfaz los presenta como hipótesis.

Cambiar de cliente, de escenario o de minuto actualiza a la vez la escena, los indicadores, las alertas, las gráficas y el historial, porque todo sale de `buildSnapshot()` en `engine.js`.

## Decisiones técnicas

- **Three.js directo, sin React Three Fiber.** La escena vive en una clase (`SceneController`) que React controla mediante métodos. Así un cambio de estado actualiza colores y etiquetas sin reconstruir la escena, y hay una dependencia menos. Por eso los archivos difieren de los nombres sugeridos (`ServerNode.jsx`, etc.): cada tipo de nodo está en `infrastructureNodes.js`.
- **Gráficas SVG propias en vez de Recharts.** Solo se necesitaban líneas con umbral, marcas de inicio, huecos “sin datos” y cabezal de reproducción; un componente de unos 150 líneas cubre todo sin añadir ~400 KB.
- **Enrutador por hash** en lugar de React Router: 7 vistas no lo justifican y funciona en cualquier hosting estático.
- **Rendimiento**: geometrías y materiales compartidos; una luz con sombra (desactivable en “Calidad ligera”); píxeles limitados a 1.75×; el bucle se detiene cuando la escena no es visible o la pestaña está oculta; con movimiento reducido solo se dibuja cuando algo cambia; al desmontar se liberan geometrías, materiales, controles y el contexto WebGL.
- **Accesibilidad**: navegación completa con teclado, foco visible, panel lateral que se cierra con Esc y devuelve el foco, `aria-live` para el estado general y avisos, tablas con `aria-sort`, y respeto a `prefers-reduced-motion` (además del ajuste manual).
- **Dependencias fijadas** a versiones exactas: React 18.3.1, Three.js 0.160.0, lucide-react 0.383.0, Vite 5.4.10.

## Verificación realizada

En el entorno donde se escribió este proyecto no había acceso a internet, así que **no fue posible ejecutar `npm install` ni abrir la app en un navegador**. Lo que sí se verificó:

- El proyecto completo compila con esbuild (el mismo motor que usa Vite) sin errores ni advertencias, con todos los imports resueltos salvo `three` y `lucide-react`, que no estaban disponibles sin conexión.
- Las 7 vistas (más rutas con parámetro y una ruta inexistente) se renderizan con React sin errores, usando sustitutos vacíos de `three` y `lucide-react`.
- El motor de datos produce estados, alertas y textos coherentes para los 3 clientes × 4 escenarios, y 153 gráficas de evidencia se generan sin valores inválidos.

**No verificado**: la escena WebGL en un navegador real (render, clics, cámara, mascota, meteoritos) ni la apariencia final. Si algo falla al ejecutar `npm run dev`, la consola del navegador mostrará el error; la escena tiene un respaldo 2D si WebGL falla.

## Navegadores

Los estilos usan `color-mix()` y `:has()`, disponibles en Chrome/Edge 111+, Safari 16.4+ y Firefox 121+.
