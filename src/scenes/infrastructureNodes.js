import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { SCENE_COLORS, STATUS_COLORS } from './palette.js';

const STATUS_TEXT = {
  normal: { glyph: '✓', text: 'Normal' },
  suspicious: { glyph: '!', text: 'Revisar' },
  risk: { glyph: '▲', text: 'Riesgo' },
  nodata: { glyph: '?', text: 'Sin datos' },
};

function makeDashedRing(radius, dashes) {
  const pts = [];
  const step = (Math.PI * 2) / dashes;
  for (let i = 0; i < dashes; i++) {
    const a0 = i * step;
    const a1 = a0 + step * 0.55;
    for (let k = 0; k < 4; k++) {
      const t0 = a0 + ((a1 - a0) * k) / 4;
      const t1 = a0 + ((a1 - a0) * (k + 1)) / 4;
      pts.push(new THREE.Vector3(Math.cos(t0) * radius, 0, Math.sin(t0) * radius));
      pts.push(new THREE.Vector3(Math.cos(t1) * radius, 0, Math.sin(t1) * radius));
    }
  }
  return new THREE.BufferGeometry().setFromPoints(pts);
}

/** Geometrías y materiales compartidos: se crean una vez por escena. */
export function createAssets() {
  const geometries = {
    rack: new THREE.BoxGeometry(1.15, 2.5, 0.95),
    rackFace: new THREE.BoxGeometry(0.95, 0.44, 0.03),
    rackLed: new THREE.BoxGeometry(0.72, 0.05, 0.02),
    monitor: new THREE.BoxGeometry(1.1, 0.7, 0.08),
    screen: new THREE.PlaneGeometry(0.98, 0.58),
    stand: new THREE.CylinderGeometry(0.05, 0.05, 0.55, 8),
    desk: new THREE.BoxGeometry(1.55, 0.08, 0.85),
    deskLeg: new THREE.BoxGeometry(0.08, 0.7, 0.08),
    core: new THREE.IcosahedronGeometry(0.5, 0),
    shell: new THREE.IcosahedronGeometry(0.78, 1),
    pedestal: new THREE.CylinderGeometry(0.32, 0.45, 0.22, 6),
    disk: new THREE.CylinderGeometry(0.62, 0.62, 0.3, 28),
    diskRing: new THREE.TorusGeometry(0.63, 0.025, 6, 40),
    ring: new THREE.TorusGeometry(0.55, 0.09, 10, 40),
    ringBase: new THREE.BoxGeometry(0.9, 0.32, 0.6),
    halo: new THREE.RingGeometry(1.0, 1.12, 48),
    haloFill: new THREE.CircleGeometry(1.0, 48),
    dashed: makeDashedRing(1.22, 16),
    hit: new THREE.CylinderGeometry(1, 1, 1, 10),
  };
  geometries.halo.rotateX(-Math.PI / 2);
  geometries.haloFill.rotateX(-Math.PI / 2);

  const materials = {
    body: new THREE.MeshStandardMaterial({ color: SCENE_COLORS.body, roughness: 0.55, metalness: 0.35 }),
    bodyLight: new THREE.MeshStandardMaterial({ color: SCENE_COLORS.bodyLight, roughness: 0.5, metalness: 0.25 }),
    ghost: new THREE.MeshStandardMaterial({ color: '#4a4458', roughness: 1, transparent: true, opacity: 0.4 }),
    shell: new THREE.MeshBasicMaterial({ color: SCENE_COLORS.pinkLight, wireframe: true, transparent: true, opacity: 0.18 }),
    hit: new THREE.MeshBasicMaterial({ visible: false }),
  };
  return { geometries, materials };
}

function mesh(geometry, material, { cast = true, receive = false } = {}) {
  const m = new THREE.Mesh(geometry, material);
  m.castShadow = cast;
  m.receiveShadow = receive;
  return m;
}

/** Crea el nodo visual de un componente. Devuelve referencias para actualizar su estado. */
export function createNode(comp, position, assets) {
  const { geometries: g, materials: mat } = assets;
  const group = new THREE.Group();
  group.position.set(...position);
  group.name = comp.id;

  const ledMat = new THREE.MeshStandardMaterial({ color: '#2a2238', emissive: STATUS_COLORS.normal, emissiveIntensity: 0.7 });
  const bodyMeshes = [];
  let spinner = null;
  let floater = null;
  let height = 1.2;
  let hitRadius = 0.8;

  if (comp.type === 'server') {
    const rack = mesh(g.rack, mat.body); rack.position.y = 1.25; bodyMeshes.push(rack); group.add(rack);
    for (let i = 0; i < 4; i++) {
      const face = mesh(g.rackFace, mat.bodyLight, { cast: false }); face.position.set(0, 0.45 + i * 0.55, 0.48); group.add(face);
      const led = mesh(g.rackLed, ledMat, { cast: false }); led.position.set(0, 0.32 + i * 0.55, 0.5); group.add(led);
    }
    height = 2.5; hitRadius = 0.75;
  } else if (comp.type === 'machine') {
    const desk = mesh(g.desk, mat.bodyLight); desk.position.y = 0.74; bodyMeshes.push(desk); group.add(desk);
    [[-0.68, -0.34], [0.68, -0.34], [-0.68, 0.34], [0.68, 0.34]].forEach(([x, z]) => {
      const leg = mesh(g.deskLeg, mat.body); leg.position.set(x, 0.35, z); group.add(leg);
    });
    const stand = mesh(g.stand, mat.body); stand.position.y = 1.05; group.add(stand);
    const monitor = mesh(g.monitor, mat.body); monitor.position.y = 1.55; bodyMeshes.push(monitor); group.add(monitor);
    const screen = mesh(g.screen, ledMat, { cast: false }); screen.position.set(0, 1.55, 0.045); group.add(screen);
    height = 1.95; hitRadius = 0.85;
  } else if (comp.type === 'service') {
    const pedestal = mesh(g.pedestal, mat.body); pedestal.position.y = 0.11; group.add(pedestal);
    floater = new THREE.Group(); floater.position.y = 1.5;
    const core = mesh(g.core, ledMat);
    const shell = new THREE.Mesh(g.shell, mat.shell);
    floater.add(core, shell); group.add(floater);
    spinner = floater; height = 2.3; hitRadius = 0.85;
    bodyMeshes.push(pedestal);
  } else if (comp.type === 'storage') {
    for (let i = 0; i < 3; i++) {
      const d = mesh(g.disk, mat.body); d.position.y = 0.2 + i * 0.4; bodyMeshes.push(d); group.add(d);
      const r = mesh(g.diskRing, ledMat, { cast: false }); r.rotation.x = Math.PI / 2; r.position.y = 0.2 + i * 0.4 + 0.08; group.add(r);
    }
    height = 1.3; hitRadius = 0.8;
  } else {
    const base = mesh(g.ringBase, mat.body); base.position.y = 0.16; bodyMeshes.push(base); group.add(base);
    const ring = mesh(g.ring, ledMat); ring.position.y = 1.05; group.add(ring);
    spinner = ring; height = 1.75; hitRadius = 0.75;
  }

  bodyMeshes.forEach((m) => { m.userData.baseMaterial = m.material; });

  const haloMat = new THREE.MeshBasicMaterial({ color: STATUS_COLORS.normal, transparent: true, opacity: 0.35, depthWrite: false });
  const fillMat = new THREE.MeshBasicMaterial({ color: STATUS_COLORS.normal, transparent: true, opacity: 0.0, depthWrite: false });
  const halo = new THREE.Mesh(g.halo, haloMat); halo.position.y = 0.03; group.add(halo);
  const fill = new THREE.Mesh(g.haloFill, fillMat); fill.position.y = 0.025; group.add(fill);
  const dashedMat = new THREE.LineBasicMaterial({ color: STATUS_COLORS.nodata, transparent: true, opacity: 0.9 });
  const dashed = new THREE.LineSegments(g.dashed, dashedMat); dashed.position.y = 0.04; dashed.visible = false; group.add(dashed);

  const hit = new THREE.Mesh(g.hit, mat.hit);
  hit.scale.set(hitRadius, height + 0.4, hitRadius);
  hit.position.y = (height + 0.4) / 2;
  hit.userData.componentId = comp.id;
  group.add(hit);

  const labelEl = document.createElement('div');
  labelEl.className = 'scene-label';
  labelEl.innerHTML = `<span class="scene-label__name"></span><span class="scene-label__status"><b aria-hidden="true"></b><span></span></span>`;
  labelEl.querySelector('.scene-label__name').textContent = comp.name;
  const label = new CSS2DObject(labelEl);
  label.position.set(0, height + 0.45, 0);
  group.add(label);

  return {
    id: comp.id, comp, group, hit, label, labelEl, ledMat, haloMat, fillMat, halo, fill, dashed,
    bodyMeshes, spinner, floater, height, status: 'normal', phase: Math.random() * Math.PI * 2,
  };
}

/**
 * Aplica el estado visual de un componente.
 * opts.labels: 'all' | 'flagged'; opts.dimmed: atenuado por un filtro; opts.selected.
 */
export function applyStatus(node, status, assets, opts = {}) {
  node.status = status;
  node.dimmed = Boolean(opts.dimmed);
  const color = STATUS_COLORS[status];
  const intensity = { normal: 0.7, suspicious: 1.8, risk: 2.4, nodata: 0.05 }[status];
  node.ledMat.emissive.set(color);
  node.ledMat.emissiveIntensity = node.dimmed ? 0.08 : intensity;
  node.haloMat.color.set(color);
  node.fillMat.color.set(color);
  node.halo.visible = status !== 'nodata' && !node.dimmed;
  node.halo.scale.set(1, 1, 1);
  node.haloMat.opacity = status === 'normal' ? 0.28 : 0.75;
  node.fill.visible = !node.dimmed;
  node.fillMat.opacity = status === 'risk' ? 0.16 : status === 'suspicious' ? 0.1 : 0;
  node.dashed.visible = status === 'nodata' && !node.dimmed;
  node.bodyMeshes.forEach((m) => {
    m.material = status === 'nodata' || node.dimmed ? assets.materials.ghost : m.userData.baseMaterial;
  });
  const st = STATUS_TEXT[status];
  node.labelEl.dataset.status = status;
  node.labelEl.dataset.dimmed = node.dimmed ? 'true' : 'false';
  node.labelEl.querySelector('.scene-label__status b').textContent = st.glyph;
  node.labelEl.querySelector('.scene-label__status span').textContent = st.text;
  applyLabelMode(node, opts.labels, opts.selected);
}

export function applyLabelMode(node, labels, selected) {
  const hide = labels === 'flagged' && node.status === 'normal' && !selected;
  node.labelEl.dataset.hidden = hide ? 'true' : 'false';
  node.labelEl.dataset.selected = selected ? 'true' : 'false';
}

export function animateNode(node, time) {
  const t = time + node.phase;
  if (node.spinner) node.spinner.rotation.y += node.status === 'risk' ? 0.02 : 0.008;
  if (node.floater) node.floater.position.y = 1.5 + Math.sin(t * 1.2) * 0.08;
  if (node.dimmed) return;
  if (node.impact > 0) {
    node.impact = Math.max(0, node.impact - 0.025);
    const base = node.status === 'risk' ? 0.16 : node.status === 'suspicious' ? 0.1 : 0;
    const s = node.impact > 0 ? 1 + (1 - node.impact) * 1.4 : 1;
    node.fill.scale.set(s, 1, s);
    node.fillMat.opacity = base + node.impact * 0.45;
  }
  if (node.status === 'suspicious' || node.status === 'risk') {
    const speed = node.status === 'risk' ? 3.4 : 2.2;
    const k = (Math.sin(t * speed) + 1) / 2;
    const s = 1 + k * (node.status === 'risk' ? 0.35 : 0.22);
    node.halo.scale.set(s, 1, s);
    node.haloMat.opacity = 0.85 - k * 0.55;
    node.ledMat.emissiveIntensity = (node.status === 'risk' ? 1.8 : 1.2) + k * 1.2;
  } else if (node.halo.scale.x !== 1) {
    node.halo.scale.set(1, 1, 1);
  }
  if (node.status === 'nodata') node.dashed.rotation.y += 0.004;
}
