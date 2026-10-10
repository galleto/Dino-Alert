/**
 * DATOS DE DEMOSTRACIÓN — DinoAlert
 * ---------------------------------------------------------------
 * Todo lo que hay en este archivo es ficticio. No proviene de un
 * detector real ni de la infraestructura de ninguna empresa.
 * Es la ÚNICA fuente de datos de la aplicación: escena 3D, alertas,
 * gráficas, historial y laboratorio leen de aquí (vía engine.js).
 */

/** Duración de la ventana simulada: 60 lecturas = 60 minutos simulados. */
export const TICKS = 60;

/** Hora simulada en la que inicia la ventana (09:00 del día de demostración). */
export const DEMO_START_HOUR = 9;

export const STATUS = {
  normal: 'normal',
  suspicious: 'suspicious',
  risk: 'risk',
  nodata: 'nodata',
};

export const STATUS_META = {
  normal: { label: 'Normal', short: 'Normal', rank: 0, description: 'Lecturas dentro de lo habitual.' },
  suspicious: { label: 'Señal sospechosa', short: 'Revisar', rank: 2, description: 'Algo se desvía de lo habitual y conviene revisarlo.' },
  risk: { label: 'Riesgo elevado', short: 'Riesgo', rank: 3, description: 'La desviación es fuerte o sostenida; atiéndelo pronto.' },
  nodata: { label: 'Monitoreo interrumpido', short: 'Sin datos', rank: 1, description: 'No llegan lecturas; no podemos confirmar su estado.' },
};

export const COMPONENT_TYPES = {
  server: { label: 'Servidor' },
  machine: { label: 'Equipo de trabajo' },
  service: { label: 'Aplicación o servicio' },
  storage: { label: 'Almacenamiento' },
  network: { label: 'Red' },
};

export const ZONES = {
  servers: { label: 'Sala de servidores' },
  apps: { label: 'Aplicaciones y servicios' },
  data: { label: 'Datos y respaldos' },
  network: { label: 'Red y acceso' },
  stations: { label: 'Equipos de trabajo' },
};

export const METRICS = {
  cpu: { label: 'Procesador', unit: '%', percent: true, threshold: 85 },
  ram: { label: 'Memoria', unit: '%', percent: true, threshold: 85 },
  disk: { label: 'Disco', unit: '%', percent: true, threshold: 90 },
  latency: { label: 'Tiempo de respuesta', unit: 'ms', percent: false, thresholdFactor: 2.5 },
  errors: { label: 'Errores', unit: '/min', percent: false, threshold: 5 },
};

/** Línea base típica por tipo de componente. */
export const TYPE_BASELINES = {
  server: { cpu: 34, ram: 54, disk: 47, latency: 42, errors: 0.4 },
  service: { cpu: 22, ram: 40, disk: 30, latency: 120, errors: 0.6 },
  storage: { cpu: 10, ram: 24, disk: 61, latency: 14, errors: 0.1 },
  network: { cpu: 17, ram: 30, disk: 12, latency: 8, errors: 0.2 },
  machine: { cpu: 25, ram: 46, disk: 55, latency: 28, errors: 0.1 },
};

/**
 * Clientes de demostración. Los "roles" permiten que un mismo escenario
 * se aplique a cualquier empresa: db, web, app, storage, gateway, station.
 */
export const CLIENTS = [
  {
    id: 'alameda',
    name: 'Ferretería Alameda',
    sector: 'Comercio minorista con 3 sucursales',
    components: [
      { id: 'srv-pos', name: 'Servidor de cajas', type: 'server', zone: 'servers', description: 'Procesa las ventas de las tres sucursales.' },
      { id: 'srv-db', name: 'Base de datos de inventario', type: 'server', zone: 'servers', role: 'db', description: 'Existencias, precios y pedidos a proveedores.' },
      { id: 'srv-erp', name: 'Servidor administrativo', type: 'server', zone: 'servers', description: 'Contabilidad, compras y nómina.' },
      { id: 'svc-shop', name: 'Tienda en línea', type: 'service', zone: 'apps', role: 'web', description: 'Catálogo y pedidos de clientes por internet.' },
      { id: 'svc-bill', name: 'Facturación electrónica', type: 'service', zone: 'apps', role: 'app', description: 'Emite y timbra las facturas.' },
      { id: 'svc-mail', name: 'Correo corporativo', type: 'service', zone: 'apps', description: 'Correo del equipo y de proveedores.' },
      { id: 'st-nas', name: 'Respaldo local', type: 'storage', zone: 'data', role: 'storage', description: 'Copias nocturnas de inventario y ventas.' },
      { id: 'st-docs', name: 'Archivo de documentos', type: 'storage', zone: 'data', description: 'Facturas, contratos y comprobantes.' },
      { id: 'net-gw', name: 'Router principal', type: 'network', zone: 'network', role: 'gateway', description: 'Conexión a internet de la matriz.' },
      { id: 'net-fw', name: 'Firewall', type: 'network', zone: 'network', description: 'Filtra el tráfico que entra y sale.' },
      { id: 'pc-centro', name: 'Caja sucursal Centro', type: 'machine', zone: 'stations', role: 'station', description: 'Punto de venta principal.' },
      { id: 'pc-norte', name: 'Caja sucursal Norte', type: 'machine', zone: 'stations', description: 'Punto de venta de la sucursal Norte.' },
    ],
    links: [
      ['net-gw', 'net-fw'], ['net-fw', 'svc-shop'], ['net-fw', 'svc-mail'],
      ['svc-shop', 'srv-db'], ['svc-bill', 'srv-db'], ['srv-pos', 'srv-db'],
      ['pc-centro', 'srv-pos'], ['pc-norte', 'srv-pos'], ['srv-db', 'st-nas'],
      ['svc-bill', 'st-docs'], ['srv-erp', 'srv-db'],
    ],
  },
  {
    id: 'sierra',
    name: 'Transportes Sierra Norte',
    sector: 'Logística regional, 40 unidades',
    components: [
      { id: 'srv-app', name: 'Servidor de aplicaciones', type: 'server', zone: 'servers', description: 'Planeación de rutas y asignación de viajes.' },
      { id: 'srv-db', name: 'Base de datos de flota', type: 'server', zone: 'servers', role: 'db', description: 'Unidades, operadores, viajes y mantenimiento.' },
      { id: 'svc-portal', name: 'Portal de clientes', type: 'service', zone: 'apps', role: 'web', description: 'Seguimiento de envíos para clientes.' },
      { id: 'svc-gps', name: 'Rastreo GPS', type: 'service', zone: 'apps', role: 'app', description: 'Recibe la ubicación de las unidades.' },
      { id: 'svc-pay', name: 'Nómina y viáticos', type: 'service', zone: 'apps', description: 'Pagos a operadores.' },
      { id: 'st-cloud', name: 'Respaldo en la nube', type: 'storage', zone: 'data', role: 'storage', description: 'Copia diaria de la base de datos.' },
      { id: 'st-local', name: 'Almacenamiento local', type: 'storage', zone: 'data', description: 'Documentos de embarque escaneados.' },
      { id: 'net-gw', name: 'Enlace de internet', type: 'network', zone: 'network', role: 'gateway', description: 'Conexión principal de la oficina.' },
      { id: 'net-vpn', name: 'VPN de patios', type: 'network', zone: 'network', description: 'Conecta los patios de maniobra.' },
      { id: 'pc-desp', name: 'Estación de despacho', type: 'machine', zone: 'stations', role: 'station', description: 'Donde se asignan y vigilan los viajes.' },
      { id: 'pc-taller', name: 'Equipo de taller', type: 'machine', zone: 'stations', description: 'Bitácora de mantenimiento.' },
    ],
    links: [
      ['net-gw', 'svc-portal'], ['net-gw', 'svc-gps'], ['net-gw', 'net-vpn'],
      ['svc-portal', 'srv-db'], ['svc-gps', 'srv-app'], ['srv-app', 'srv-db'],
      ['svc-pay', 'srv-db'], ['srv-db', 'st-cloud'], ['pc-desp', 'srv-app'],
      ['pc-taller', 'net-vpn'], ['srv-app', 'st-local'],
    ],
  },
  {
    id: 'nogal',
    name: 'Clínica Dental Nogal',
    sector: 'Salud, 4 consultorios',
    components: [
      { id: 'srv-main', name: 'Servidor principal', type: 'server', zone: 'servers', description: 'Sistema de gestión de la clínica.' },
      { id: 'srv-db', name: 'Expedientes clínicos', type: 'server', zone: 'servers', role: 'db', description: 'Historias clínicas y tratamientos.' },
      { id: 'svc-agenda', name: 'Agenda de citas en línea', type: 'service', zone: 'apps', role: 'web', description: 'Pacientes reservan y confirman citas.' },
      { id: 'svc-xray', name: 'Visor de radiografías', type: 'service', zone: 'apps', role: 'app', description: 'Consulta de imágenes en los consultorios.' },
      { id: 'svc-pay', name: 'Cobro con terminal', type: 'service', zone: 'apps', description: 'Pagos con tarjeta en recepción.' },
      { id: 'st-img', name: 'Almacén de imágenes', type: 'storage', zone: 'data', role: 'storage', description: 'Radiografías y fotografías clínicas.' },
      { id: 'st-bkp', name: 'Respaldo cifrado', type: 'storage', zone: 'data', description: 'Copia semanal fuera de sitio.' },
      { id: 'net-gw', name: 'Router de la clínica', type: 'network', zone: 'network', role: 'gateway', description: 'Conexión a internet.' },
      { id: 'net-wifi', name: 'Wi-Fi interno', type: 'network', zone: 'network', description: 'Red de consultorios y recepción.' },
      { id: 'pc-recep', name: 'Recepción', type: 'machine', zone: 'stations', role: 'station', description: 'Registro de pacientes y cobro.' },
      { id: 'pc-c1', name: 'Consultorio 1', type: 'machine', zone: 'stations', description: 'Equipo del consultorio 1.' },
      { id: 'pc-c2', name: 'Consultorio 2', type: 'machine', zone: 'stations', description: 'Equipo del consultorio 2.' },
    ],
    links: [
      ['net-gw', 'svc-agenda'], ['net-gw', 'net-wifi'], ['svc-agenda', 'srv-db'],
      ['srv-main', 'srv-db'], ['svc-xray', 'st-img'], ['svc-pay', 'srv-main'],
      ['pc-recep', 'net-wifi'], ['pc-c1', 'net-wifi'], ['pc-c2', 'net-wifi'],
      ['net-wifi', 'srv-main'], ['srv-db', 'st-bkp'], ['svc-xray', 'srv-main'],
    ],
  },
];

/**
 * Tipos de señal simulada. `delta` calcula cuánto se desvía cada métrica
 * respecto de su línea base, `p` = minutos transcurridos desde el inicio.
 */
export const SIGNAL_KINDS = {
  'latency-drift': {
    label: 'Respuesta lenta',
    title: (n) => `Respuesta lenta en ${n}`,
    metrics: ['latency', 'errors'],
    delta: (metric, p, base) => {
      if (metric === 'latency') return base * Math.min(p * 0.09, 2.6);
      if (metric === 'errors') return p > 8 ? Math.min((p - 8) * 0.08, 1.2) : 0;
      return 0;
    },
    summary: 'El tiempo de respuesta sube de forma sostenida, sin un pico aislado.',
    interpretations: [
      'Consultas más pesadas de lo habitual o una tabla que creció mucho.',
      'Otro proceso compitiendo por el mismo servidor.',
      'Problemas de red entre la aplicación y este componente.',
    ],
    recommendations: [
      'Revisa qué procesos o consultas se ejecutaron desde que comenzó la señal.',
      'Compara con la misma hora de días anteriores para descartar un patrón normal.',
      'Si la tendencia continúa, avisa a quien da soporte a este sistema.',
    ],
  },
  'error-burst': {
    label: 'Aumento de errores',
    title: (n) => `Aumento de errores en ${n}`,
    metrics: ['errors', 'latency'],
    delta: (metric, p, base) => {
      if (metric === 'errors') return Math.min(p * 0.45, 9) + (p % 5 === 0 ? 2.2 : 0);
      if (metric === 'latency') return base * Math.min(p * 0.02, 0.5);
      return 0;
    },
    summary: 'Las respuestas fallidas aumentan cada minuto por encima de lo habitual.',
    interpretations: [
      'Un cambio reciente (actualización o configuración) podría estar fallando.',
      'Un servicio del que depende podría estar respondiendo con errores.',
      'Tráfico inusual, por ejemplo, intentos repetidos de acceso.',
    ],
    recommendations: [
      'Prueba la aplicación como lo haría un cliente y anota qué falla.',
      'Revisa si hubo cambios o actualizaciones antes de que empezara la señal.',
      'Verifica el estado de los componentes de los que depende.',
    ],
  },
  'cpu-saturation': {
    label: 'Procesador saturado',
    title: (n) => `Procesador cerca del límite en ${n}`,
    metrics: ['cpu', 'latency', 'ram'],
    delta: (metric, p, base) => {
      if (metric === 'cpu') return Math.min(p * 3.4, 93 - base);
      if (metric === 'latency') return base * Math.min(p * 0.05, 1.8);
      if (metric === 'ram') return Math.min(p * 0.8, 15);
      return 0;
    },
    summary: 'El uso de procesador sube rápido y se mantiene cerca del máximo.',
    interpretations: [
      'Un proceso que se quedó en ciclo o una tarea programada pesada.',
      'Más usuarios o pedidos de los que el servidor suele atender.',
      'Software no autorizado consumiendo recursos (poco probable, pero conviene descartarlo).',
    ],
    recommendations: [
      'Identifica qué proceso consume más procesador en este momento.',
      'Si es una tarea programada, muévela a un horario de menor uso.',
      'Si nadie reconoce el proceso, trátalo como un incidente de seguridad.',
    ],
  },
  'disk-fill': {
    label: 'Disco llenándose',
    title: (n) => `Disco casi lleno en ${n}`,
    metrics: ['disk', 'latency'],
    delta: (metric, p, base) => {
      if (metric === 'disk') return Math.min(p * 1.5, 97 - base);
      if (metric === 'latency') return p > 15 ? base * 0.4 : 0;
      return 0;
    },
    summary: 'El espacio usado crece a un ritmo constante; a esta velocidad se llenaría pronto.',
    interpretations: [
      'Un respaldo o archivo de registro que crece sin control.',
      'Copias duplicadas que no se están limpiando.',
    ],
    recommendations: [
      'Ubica las carpetas que más crecieron en la última hora.',
      'Confirma que los respaldos antiguos se eliminan según lo previsto.',
      'Libera espacio antes de que el disco llegue al 95 %.',
    ],
  },
  'memory-leak': {
    label: 'Memoria en aumento',
    title: (n) => `Memoria en aumento constante en ${n}`,
    metrics: ['ram', 'cpu'],
    delta: (metric, p, base) => {
      if (metric === 'ram') return Math.min(p * 1.3, 93 - base);
      if (metric === 'cpu') return Math.min(p * 0.4, 10);
      return 0;
    },
    summary: 'La memoria usada aumenta sin bajar, aunque la actividad no cambia.',
    interpretations: [
      'La aplicación podría no estar liberando memoria (fuga de memoria).',
      'Una caché configurada sin límite.',
    ],
    recommendations: [
      'Programa un reinicio controlado del servicio en un horario de baja actividad.',
      'Reporta el patrón al proveedor de la aplicación.',
    ],
  },
  'no-data': {
    label: 'Sin lecturas',
    title: (n) => `Sin lecturas de ${n}`,
    metrics: ['cpu', 'latency'],
    delta: () => 0,
    summary: 'Dejaron de llegar lecturas. Sin datos no es posible confirmar si funciona o no.',
    interpretations: [
      'El agente de monitoreo se detuvo o el equipo se apagó.',
      'Un corte de red entre este componente y DinoAlert.',
      'El componente funciona, pero no está enviando información.',
    ],
    recommendations: [
      'Verifica físicamente que el equipo esté encendido y conectado.',
      'Revisa si otros componentes de la misma red también dejaron de reportar.',
      'Reinicia el agente de monitoreo si el equipo funciona con normalidad.',
    ],
  },
};

/** Escenarios del laboratorio. Las señales se asignan por rol. */
export const SCENARIOS = [
  {
    id: 'normal',
    name: 'Operación normal',
    description: 'Todas las lecturas se mantienen en su rango habitual.',
    signals: [],
  },
  {
    id: 'suspicious',
    name: 'Señales sospechosas',
    description: 'La base de datos responde cada vez más lento y la aplicación web empieza a fallar.',
    signals: [
      { role: 'db', kind: 'latency-drift', start: 28, severity: 'suspicious' },
      { role: 'web', kind: 'error-burst', start: 36, severity: 'suspicious' },
    ],
  },
  {
    id: 'elevated',
    name: 'Riesgo elevado',
    description: 'Varias señales se acumulan y dos de ellas escalan a riesgo.',
    signals: [
      { role: 'db', kind: 'cpu-saturation', start: 18, severity: 'suspicious', escalate: { at: 32, to: 'risk' } },
      { role: 'storage', kind: 'disk-fill', start: 22, severity: 'suspicious', escalate: { at: 40, to: 'risk' } },
      { role: 'app', kind: 'memory-leak', start: 26, severity: 'suspicious' },
      { role: 'web', kind: 'error-burst', start: 34, severity: 'suspicious' },
    ],
  },
  {
    id: 'dataloss',
    name: 'Pérdida de información',
    description: 'Algunos componentes dejan de reportar y no se puede confirmar su estado.',
    signals: [
      { role: 'station', kind: 'no-data', start: 24, severity: 'nodata' },
      { role: 'gateway', kind: 'no-data', start: 30, severity: 'nodata' },
      { role: 'web', kind: 'latency-drift', start: 38, severity: 'suspicious' },
    ],
  },
];

/** Eventos rutinarios simulados (no son alertas). */
export const ROUTINE_EVENTS = [
  { at: 2, type: 'respaldo', role: 'storage', text: 'Respaldo incremental completado' },
  { at: 9, type: 'acceso', role: 'gateway', text: 'Inicio de sesión de administración' },
  { at: 15, type: 'actualización', role: 'app', text: 'Actualización de seguridad aplicada' },
  { at: 21, type: 'mantenimiento', role: 'station', text: 'Reinicio programado del equipo' },
  { at: 33, type: 'respaldo', role: 'storage', text: 'Verificación de respaldo correcta' },
  { at: 44, type: 'acceso', role: 'db', text: 'Consulta de reportes de fin de mes' },
  { at: 52, type: 'mantenimiento', role: 'gateway', text: 'Renovación de certificado completada' },
];

/** Plantillas para generar el historial ficticio de días anteriores. */
export const HISTORY_TEMPLATES = [
  { kind: 'latency-drift', priority: 'media' },
  { kind: 'error-burst', priority: 'media' },
  { kind: 'cpu-saturation', priority: 'alta' },
  { kind: 'disk-fill', priority: 'alta' },
  { kind: 'memory-leak', priority: 'baja' },
  { kind: 'no-data', priority: 'baja' },
];

export const PRIORITY_META = {
  alta: { label: 'Alta', rank: 3 },
  media: { label: 'Media', rank: 2 },
  baja: { label: 'Baja', rank: 1 },
  info: { label: 'Informativa', rank: 0 },
};

export const ALERT_STATUS_META = {
  activa: { label: 'Activa' },
  revision: { label: 'En revisión' },
  cerrada: { label: 'Cerrada' },
};
