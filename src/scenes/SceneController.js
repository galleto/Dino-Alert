import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { SCENE_COLORS, STATUS_COLORS } from './palette.js';
import { computeLayout } from './layout.js';
import { createAssets, createNode, applyStatus, applyLabelMode, animateNode } from './infrastructureNodes.js';
import { createMascot } from './mascot.js';
import { createMeteorSystem } from './meteors.js';
import { ZONES } from '../data/demoData.js';

const HOME_POSITION = new THREE.Vector3(9, 12.5, 18.5);
const HOME_TARGET = new THREE.Vector3(0, 0.8, 0);
const MASCOT_POSITION = new THREE.Vector3(-8.8, 0, 5.4);
const STATUS_RANK = { normal: 0, nodata: 1, suspicious: 2, risk: 3 };

/**
 * Encapsula toda la escena Three.js. React solo llama a sus métodos;
 * así la escena no se reconstruye en cada render.
 */
export class SceneController {
  constructor(container, { onSelect, onError, quality = 'high', reducedMotion = false, labels = 'all', compact = false } = {}) {
    this.container = container;
    this.onSelect = onSelect;
    this.onError = onError;
    this.quality = quality;
    this.reducedMotion = reducedMotion;
    this.labels = labels;
    this.compact = compact;
    this.nodes = new Map();
    this.links = [];
    this.states = {};
    this.dimmed = null;
    this.selectedId = null;
    this.hoveredId = null;
    this.visible = true;
    this.needsRender = true;
    this.tween = null;
    this.meteorTimer = 1.2;
    this.meteorCursor = 0;
    this.raf = 0;
    this.disposed = false;

    const { clientWidth: w, clientHeight: h } = container;
    const high = quality === 'high';

    this.renderer = new THREE.WebGLRenderer({ antialias: high, powerPreference: 'default' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, high ? 1.75 : 1));
    this.renderer.setSize(w || 300, h || 300);
    this.renderer.shadowMap.enabled = high;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.domElement.className = 'scene-canvas';
    this.renderer.domElement.setAttribute('aria-hidden', 'true');
    container.appendChild(this.renderer.domElement);

    this.labelRenderer = new CSS2DRenderer();
    this.labelRenderer.setSize(w || 300, h || 300);
    this.labelRenderer.domElement.className = 'scene-labels';
    container.appendChild(this.labelRenderer.domElement);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(SCENE_COLORS.background);
    this.scene.fog = new THREE.Fog(SCENE_COLORS.background, 30, 62);

    this.camera = new THREE.PerspectiveCamera(compact ? 46 : 40, (w || 1) / (h || 1), 0.1, 200);
    this.camera.position.copy(HOME_POSITION);
    if (compact) this.camera.position.multiplyScalar(1.12);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.copy(HOME_TARGET);
    this.controls.enableDamping = !reducedMotion;
    this.controls.dampingFactor = 0.08;
    this.controls.minDistance = 8;
    this.controls.maxDistance = 36;
    this.controls.minPolarAngle = 0.3;
    this.controls.maxPolarAngle = 1.32;
    this.controls.screenSpacePanning = false;
    this.controls.addEventListener('change', this.onControlsChange);
    this.clock = new THREE.Clock();
    this.controls.update();

    this.assets = createAssets();
    this.buildEnvironment();

    this.mascot = createMascot();
    this.mascot.root.position.copy(MASCOT_POSITION);
    this.mascot.root.rotation.y = 0.5;
    this.mascot.root.scale.setScalar(0.92);
    this.scene.add(this.mascot.root);

    this.meteors = createMeteorSystem(2);
    this.scene.add(this.meteors.group);

    this.infra = new THREE.Group();
    this.scene.add(this.infra);

    const selGeo = new THREE.RingGeometry(1.32, 1.46, 48);
    selGeo.rotateX(-Math.PI / 2);
    this.selectRing = new THREE.Mesh(selGeo, new THREE.MeshBasicMaterial({ color: SCENE_COLORS.white, transparent: true, opacity: 0.9, depthWrite: false }));
    this.selectRing.visible = false;
    this.scene.add(this.selectRing);

    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();

    const el = this.renderer.domElement;
    el.addEventListener('pointerdown', this.onPointerDown);
    el.addEventListener('pointerup', this.onPointerUp);
    el.addEventListener('pointermove', this.onPointerMove);
    el.addEventListener('pointerleave', this.onPointerLeave);
    el.addEventListener('webglcontextlost', this.onContextLost);

    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(container);
    this.intersection = new IntersectionObserver(([entry]) => {
      this.visible = entry.isIntersecting;
      this.updateRunning();
    });
    this.intersection.observe(container);
    document.addEventListener('visibilitychange', this.updateRunning);

    this.updateRunning();
  }

  /* ---------- entorno fijo ---------- */
  buildEnvironment() {
    const s = this.scene;
    s.add(new THREE.HemisphereLight('#d9c8ff', '#171124', 0.75));
    const dir = new THREE.DirectionalLight('#ffffff', 1.25);
    dir.position.set(8, 16, 7);
    dir.castShadow = this.quality === 'high';
    dir.shadow.mapSize.set(1024, 1024);
    Object.assign(dir.shadow.camera, { left: -15, right: 15, top: 15, bottom: -15, near: 1, far: 45 });
    dir.shadow.bias = -0.0008;
    s.add(dir);
    const glow = new THREE.PointLight(SCENE_COLORS.pink, 0.6, 26, 2);
    glow.position.set(0, 5, 0);
    s.add(glow);

    const floorGeo = new THREE.CylinderGeometry(13, 13.4, 0.5, 72);
    const floor = new THREE.Mesh(floorGeo, new THREE.MeshStandardMaterial({ color: SCENE_COLORS.floor, roughness: 0.92, metalness: 0.05 }));
    floor.position.y = -0.25;
    floor.receiveShadow = true;
    s.add(floor);

    const edgeGeo = new THREE.TorusGeometry(13.05, 0.05, 6, 120);
    edgeGeo.rotateX(Math.PI / 2);
    const edge = new THREE.Mesh(edgeGeo, new THREE.MeshBasicMaterial({ color: SCENE_COLORS.pink, transparent: true, opacity: 0.55 }));
    edge.position.y = 0.01;
    s.add(edge);

    const pts = [];
    [4.2, 8.4, 12.4].forEach((r) => {
      for (let i = 0; i < 96; i++) {
        const a0 = (i / 96) * Math.PI * 2; const a1 = ((i + 1) / 96) * Math.PI * 2;
        pts.push(new THREE.Vector3(Math.cos(a0) * r, 0.012, Math.sin(a0) * r), new THREE.Vector3(Math.cos(a1) * r, 0.012, Math.sin(a1) * r));
      }
    });
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * 1.5, 0.012, Math.sin(a) * 1.5), new THREE.Vector3(Math.cos(a) * 12.4, 0.012, Math.sin(a) * 12.4));
    }
    const grid = new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: SCENE_COLORS.grid, transparent: true, opacity: 0.55 }));
    s.add(grid);

    // Núcleo central: punto de llegada de las conexiones de red
    const hubGeo = new THREE.CylinderGeometry(0.9, 1.1, 0.18, 32);
    const hub = new THREE.Mesh(hubGeo, new THREE.MeshStandardMaterial({ color: SCENE_COLORS.floorEdge, emissive: SCENE_COLORS.pink, emissiveIntensity: 0.15 }));
    hub.position.y = 0.09;
    hub.receiveShadow = true;
    s.add(hub);
  }

  /* ---------- infraestructura del cliente ---------- */
  setInfrastructure(components, links) {
    this.clearInfrastructure();
    const { positions, zones } = computeLayout(components);
    this.positions = positions;

    const padMat = new THREE.MeshStandardMaterial({ color: '#251a39', roughness: 0.9 });
    this.zoneMaterials = [padMat];
    zones.forEach((z) => {
      const geo = new THREE.BoxGeometry(z.size[0], 0.06, z.size[1]);
      const pad = new THREE.Mesh(geo, padMat);
      pad.position.set(z.center[0], 0.03, z.center[2]);
      pad.receiveShadow = true;
      this.infra.add(pad);
      const el = document.createElement('div');
      el.className = 'scene-zone';
      el.textContent = ZONES[z.zone]?.label || z.zone;
      const label = new CSS2DObject(el);
      const front = z.size[1] / 2 + 0.35;
      label.position.set(z.center[0], 0.1, z.center[2] + front);
      this.infra.add(label);
    });

    components.forEach((comp) => {
      const node = createNode(comp, positions[comp.id], this.assets);
      this.nodes.set(comp.id, node);
      this.infra.add(node.group);
    });

    const pulseGeo = new THREE.SphereGeometry(0.09, 10, 8);
    this.pulseGeo = pulseGeo;
    links.forEach(([a, b], i) => {
      const pa = this.nodes.get(a); const pb = this.nodes.get(b);
      if (!pa || !pb) return;
      const start = new THREE.Vector3(pa.group.position.x, 0.12, pa.group.position.z);
      const end = new THREE.Vector3(pb.group.position.x, 0.12, pb.group.position.z);
      const mid = start.clone().lerp(end, 0.5);
      mid.y = 1.2 + start.distanceTo(end) * 0.12;
      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(32));
      const lineMat = new THREE.LineBasicMaterial({ color: SCENE_COLORS.link, transparent: true, opacity: 0.7 });
      const line = new THREE.Line(geo, lineMat);
      const pulseMat = new THREE.MeshBasicMaterial({ color: STATUS_COLORS.normal });
      const pulse = new THREE.Mesh(pulseGeo, pulseMat);
      this.infra.add(line, pulse);
      this.links.push({ a, b, curve, geo, lineMat, pulse, pulseMat, offset: (i * 0.37) % 1, speed: 0.12 + (i % 3) * 0.03 });
    });

    this.applyAllStates();
    this.updateSelectionRing();
    this.requestRender();
  }

  clearInfrastructure() {
    this.meteors?.clear();
    const toRemove = [...this.infra.children];
    toRemove.forEach((child) => {
      child.traverse((o) => {
        if (o.isCSS2DObject && o.element?.parentNode) o.element.parentNode.removeChild(o.element);
      });
      this.infra.remove(child);
    });
    // Libera geometrías y materiales propios de este cliente (los compartidos se conservan).
    this.nodes.forEach((n) => { n.ledMat.dispose(); n.haloMat.dispose(); n.fillMat.dispose(); n.dashed.material.dispose(); });
    this.links.forEach((l) => { l.geo.dispose(); l.lineMat.dispose(); l.pulseMat.dispose(); });
    this.zoneMaterials?.forEach((m) => m.dispose());
    toRemove.forEach((c) => { if (c.isMesh && c.geometry?.type === 'BoxGeometry' && !Object.values(this.assets.geometries).includes(c.geometry)) c.geometry.dispose(); });
    this.pulseGeo?.dispose();
    this.nodes.clear();
    this.links = [];
  }

  /* ---------- estado ---------- */
  setStates(states, mood) {
    this.states = states || {};
    this.mood = mood || 'normal';
    this.mascot.setMood(this.mood);
    this.applyAllStates();
    this.updateMascotLook();
    this.meteorTimer = Math.min(this.meteorTimer, 1);
    this.requestRender();
  }

  applyAllStates() {
    this.nodes.forEach((node, id) => {
      applyStatus(node, this.states[id] || 'normal', this.assets, {
        labels: this.labels,
        dimmed: this.dimmed ? !this.dimmed.has(id) : false,
        selected: id === this.selectedId,
      });
    });
    this.links.forEach((l) => {
      const sa = this.states[l.a] || 'normal'; const sb = this.states[l.b] || 'normal';
      const worst = STATUS_RANK[sa] >= STATUS_RANK[sb] ? sa : sb;
      const broken = sa === 'nodata' || sb === 'nodata';
      const color = broken ? STATUS_COLORS.nodata : worst === 'normal' ? SCENE_COLORS.link : STATUS_COLORS[worst];
      l.lineMat.color.set(color);
      l.lineMat.opacity = broken ? 0.3 : worst === 'normal' ? 0.6 : 0.9;
      l.pulseMat.color.set(worst === 'normal' ? STATUS_COLORS.normal : STATUS_COLORS[worst]);
      l.broken = broken;
      l.pulse.visible = !broken && !this.reducedMotion;
      if (!l.pulse.visible || this.reducedMotion) l.pulse.position.copy(l.curve.getPoint(0.5));
    });
  }

  updateMascotLook() {
    let target = null;
    let best = 0;
    this.nodes.forEach((n, id) => {
      const r = STATUS_RANK[this.states[id] || 'normal'];
      if (r > best) { best = r; target = n; }
    });
    if (!target) { this.mascot.setLook(0); return; }
    const dx = target.group.position.x - MASCOT_POSITION.x;
    const dz = target.group.position.z - MASCOT_POSITION.z;
    const yaw = Math.atan2(dx, dz) - this.mascot.root.rotation.y;
    this.mascot.setLook(Math.max(-1, Math.min(1, yaw)));
    if (this.reducedMotion) this.mascot.applyStaticPose();
  }

  setLabels(mode) {
    this.labels = mode;
    this.nodes.forEach((n, id) => applyLabelMode(n, mode, id === this.selectedId));
    this.requestRender();
  }

  setDimmed(ids) {
    this.dimmed = ids ? new Set(ids) : null;
    this.applyAllStates();
    this.requestRender();
  }

  setReducedMotion(reduced) {
    this.reducedMotion = reduced;
    this.controls.enableDamping = !reduced;
    if (reduced) { this.meteors.clear(); this.mascot.applyStaticPose(); }
    this.applyAllStates();
    this.requestRender();
  }

  /* ---------- selección y cámara ---------- */
  setSelected(id) {
    this.selectedId = id || null;
    this.nodes.forEach((n, nid) => applyLabelMode(n, this.labels, nid === this.selectedId));
    this.updateSelectionRing();
    this.requestRender();
  }

  updateSelectionRing() {
    const node = this.selectedId && this.nodes.get(this.selectedId);
    this.selectRing.visible = Boolean(node);
    if (node) this.selectRing.position.set(node.group.position.x, 0.05, node.group.position.z);
  }

  focusOn(id) {
    const node = this.nodes.get(id);
    if (!node) return;
    const target = new THREE.Vector3(node.group.position.x, node.height * 0.5, node.group.position.z);
    const dir = this.camera.position.clone().sub(this.controls.target).normalize();
    if (dir.y < 0.45) { dir.y = 0.45; dir.normalize(); }
    const pos = target.clone().add(dir.multiplyScalar(this.compact ? 13 : 11));
    this.animateCamera(pos, target);
  }

  resetView() {
    const pos = HOME_POSITION.clone();
    if (this.compact) pos.multiplyScalar(1.12);
    this.animateCamera(pos, HOME_TARGET.clone());
  }

  zoom(factor) {
    const offset = this.camera.position.clone().sub(this.controls.target);
    const len = THREE.MathUtils.clamp(offset.length() * factor, this.controls.minDistance, this.controls.maxDistance);
    const pos = this.controls.target.clone().add(offset.setLength(len));
    this.animateCamera(pos, this.controls.target.clone(), 0.35);
  }

  animateCamera(pos, target, duration = 0.9) {
    if (this.reducedMotion) {
      this.camera.position.copy(pos);
      this.controls.target.copy(target);
      this.controls.update();
      this.requestRender();
      return;
    }
    this.tween = { fromPos: this.camera.position.clone(), toPos: pos, fromTarget: this.controls.target.clone(), toTarget: target, t: 0, duration };
    this.start();
  }

  /* ---------- eventos de puntero ---------- */
  pick(event) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const hits = this.raycaster.intersectObjects([...this.nodes.values()].map((n) => n.hit), false);
    return hits.length ? hits[0].object.userData.componentId : null;
  }

  onPointerDown = (e) => { this.downAt = { x: e.clientX, y: e.clientY }; };

  onPointerUp = (e) => {
    if (!this.downAt) return;
    const moved = Math.hypot(e.clientX - this.downAt.x, e.clientY - this.downAt.y);
    this.downAt = null;
    if (moved > 6) return;
    this.onSelect?.(this.pick(e));
  };

  onPointerMove = (e) => {
    if (e.buttons) return;
    const id = this.pick(e);
    if (id === this.hoveredId) return;
    if (this.hoveredId) this.nodes.get(this.hoveredId)?.labelEl.removeAttribute('data-hover');
    this.hoveredId = id;
    if (id) this.nodes.get(id)?.labelEl.setAttribute('data-hover', 'true');
    this.renderer.domElement.style.cursor = id ? 'pointer' : 'grab';
    this.requestRender();
  };

  onPointerLeave = () => {
    if (this.hoveredId) this.nodes.get(this.hoveredId)?.labelEl.removeAttribute('data-hover');
    this.hoveredId = null;
  };

  onControlsChange = () => {
    // Mantiene el punto de interés dentro de la plataforma para no "perder" la escena.
    const t = this.controls.target;
    const r = Math.hypot(t.x, t.z);
    if (r > 8) { t.x *= 8 / r; t.z *= 8 / r; }
    t.y = THREE.MathUtils.clamp(t.y, 0, 3);
    this.requestRender();
  };

  onContextLost = (e) => {
    e.preventDefault();
    this.stop();
    this.onError?.(new Error('Se perdió el contexto WebGL'));
  };

  /* ---------- ciclo de render ---------- */
  requestRender() {
    this.needsRender = true;
    this.start();
  }

  updateRunning = () => {
    if (this.visible && !document.hidden) this.start(); else this.stop();
  };

  start() {
    if (this.raf || this.disposed || !this.visible || document.hidden) return;
    this.clock.getDelta();
    this.raf = requestAnimationFrame(this.loop);
  }

  stop() {
    if (this.raf) cancelAnimationFrame(this.raf);
    this.raf = 0;
  }

  loop = () => {
    this.raf = 0;
    if (this.disposed) return;
    const dt = Math.min(this.clock.getDelta(), 0.05);
    const time = this.clock.elapsedTime;
    let keepRunning = false;

    if (this.tween) {
      const tw = this.tween;
      tw.t += dt / tw.duration;
      const k = Math.min(1, tw.t);
      const e = 1 - Math.pow(1 - k, 3);
      this.camera.position.lerpVectors(tw.fromPos, tw.toPos, e);
      this.controls.target.lerpVectors(tw.fromTarget, tw.toTarget, e);
      if (k >= 1) this.tween = null;
      this.needsRender = true;
      keepRunning = true;
    }

    if (this.controls.update()) { this.needsRender = true; keepRunning = true; }

    if (!this.reducedMotion) {
      this.nodes.forEach((n) => animateNode(n, time));
      this.links.forEach((l) => {
        if (!l.pulse.visible) return;
        const p = (time * l.speed + l.offset) % 1;
        l.curve.getPoint(p, l.pulse.position);
      });
      this.mascot.animate(time);
      if (this.selectRing.visible) this.selectRing.rotation.y += dt * 0.6;
      this.updateMeteors(dt);
      this.needsRender = true;
      keepRunning = true;
    }

    if (this.needsRender) {
      this.renderer.render(this.scene, this.camera);
      this.labelRenderer.render(this.scene, this.camera);
      this.needsRender = false;
    }
    if (keepRunning) this.start();
  };

  updateMeteors(dt) {
    this.meteors.update(dt, (targetId) => {
      const n = this.nodes.get(targetId);
      if (n) n.impact = 1;
    });
    this.meteorTimer -= dt;
    if (this.meteorTimer > 0) return;
    const flagged = [...this.nodes.values()].filter((n) => (n.status === 'risk' || n.status === 'suspicious') && !n.dimmed);
    if (!flagged.length) { this.meteorTimer = 2; return; }
    const risky = flagged.filter((n) => n.status === 'risk');
    const pool = risky.length ? risky : flagged;
    const node = pool[this.meteorCursor % pool.length];
    this.meteorCursor += 1;
    this.meteors.spawn(node.id, node.group.position, node.height, node.status);
    this.meteorTimer = risky.length ? 4.5 : 8;
  }

  resize() {
    const { clientWidth: w, clientHeight: h } = this.container;
    if (!w || !h) return;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.labelRenderer.setSize(w, h);
    this.requestRender();
  }

  dispose() {
    this.disposed = true;
    this.stop();
    this.resizeObserver.disconnect();
    this.intersection.disconnect();
    document.removeEventListener('visibilitychange', this.updateRunning);
    const el = this.renderer.domElement;
    el.removeEventListener('pointerdown', this.onPointerDown);
    el.removeEventListener('pointerup', this.onPointerUp);
    el.removeEventListener('pointermove', this.onPointerMove);
    el.removeEventListener('pointerleave', this.onPointerLeave);
    el.removeEventListener('webglcontextlost', this.onContextLost);
    this.controls.removeEventListener('change', this.onControlsChange);
    this.controls.dispose();
    this.clearInfrastructure();
    this.mascot.dispose();
    this.meteors.dispose();
    const seen = new Set();
    this.scene.traverse((o) => {
      if (o.geometry && !seen.has(o.geometry)) { seen.add(o.geometry); o.geometry.dispose(); }
      const mats = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
      mats.forEach((m) => { if (!seen.has(m)) { seen.add(m); m.dispose(); } });
    });
    Object.values(this.assets.geometries).forEach((g) => g.dispose());
    Object.values(this.assets.materials).forEach((m) => m.dispose());
    this.renderer.dispose();
    this.renderer.forceContextLoss();
    el.remove();
    this.labelRenderer.domElement.remove();
  }
}
