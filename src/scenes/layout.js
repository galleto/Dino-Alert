/**
 * Distribución intencional de la escena: cada zona ocupa un sector
 * de la plataforma circular y sus componentes se alinean dentro de ella.
 */
export const ZONE_LAYOUT = {
  servers: { center: [0, 0, -5.6], axis: 'x', spacing: 2.3 },
  apps: { center: [-7.2, 0, -0.6], axis: 'z', spacing: 2.4 },
  data: { center: [7.2, 0, -0.6], axis: 'z', spacing: 2.4 },
  network: { center: [-3.2, 0, 5.4], axis: 'x', spacing: 2.4 },
  stations: { center: [4.2, 0, 5.4], axis: 'x', spacing: 2.2 },
};

export function computeLayout(components) {
  const byZone = {};
  components.forEach((c) => { (byZone[c.zone] ||= []).push(c); });
  const positions = {};
  const zones = [];
  Object.entries(byZone).forEach(([zone, list]) => {
    const cfg = ZONE_LAYOUT[zone] || ZONE_LAYOUT.servers;
    const n = list.length;
    list.forEach((c, i) => {
      const off = (i - (n - 1) / 2) * cfg.spacing;
      const [x, y, z] = cfg.center;
      positions[c.id] = cfg.axis === 'x' ? [x + off, y, z] : [x, y, z + off];
    });
    const length = (n - 1) * cfg.spacing + 2.2;
    zones.push({
      zone,
      center: cfg.center,
      size: cfg.axis === 'x' ? [length, 2.4] : [2.4, length],
    });
  });
  return { positions, zones };
}
