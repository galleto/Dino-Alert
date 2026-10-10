import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { SCENE_COLORS, STATUS_COLORS } from './palette.js';

const MOOD_TEXT = {
  normal: 'Todo en orden',
  suspicious: 'Hay señales por revisar',
  risk: 'Riesgo elevado: revisa las alertas',
  nodata: 'Faltan lecturas de algunos equipos',
};

/**
 * Mascota DinoAlert: T-Rex rosa hecho con geometrías primitivas.
 * Cambia ligeramente de pose según el estado general del entorno.
 */
export function createMascot() {
  const root = new THREE.Group();
  root.name = 'dino';
  const disposables = [];
  const pink = new THREE.MeshStandardMaterial({ color: SCENE_COLORS.pink, roughness: 0.45, metalness: 0.05 });
  const light = new THREE.MeshStandardMaterial({ color: SCENE_COLORS.pinkLight, roughness: 0.5 });
  const white = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.3 });
  const dark = new THREE.MeshStandardMaterial({ color: '#171124', roughness: 0.4 });
  const badgeMat = new THREE.MeshStandardMaterial({ color: '#2a2238', emissive: STATUS_COLORS.normal, emissiveIntensity: 1.2 });
  disposables.push(pink, light, white, dark, badgeMat);

  const add = (geo, mat, parent, pos, rot, scale) => {
    disposables.push(geo);
    const m = new THREE.Mesh(geo, mat);
    m.castShadow = true;
    if (pos) m.position.set(...pos);
    if (rot) m.rotation.set(...rot);
    if (scale) m.scale.set(...scale);
    parent.add(m);
    return m;
  };

  const torso = new THREE.Group();
  root.add(torso);
  add(new THREE.SphereGeometry(0.7, 24, 16), pink, torso, [0, 1.25, 0], [-0.3, 0, 0], [0.85, 1, 1.15]);
  add(new THREE.SphereGeometry(0.5, 20, 14), light, torso, [0, 1.15, 0.42], [-0.3, 0, 0], [0.75, 0.95, 0.55]);
  const badge = add(new THREE.CircleGeometry(0.11, 20), badgeMat, torso, [0, 1.42, 0.62], [-0.35, 0, 0]);
  badge.castShadow = false;
  add(new THREE.ConeGeometry(0.36, 1.7, 16), pink, torso, [0, 1.0, -1.05], [-Math.PI / 2 - 0.28, 0, 0]);
  [[1.98, -0.1], [1.85, -0.48], [1.58, -0.82], [1.28, -1.12]].forEach(([y, z]) => {
    add(new THREE.ConeGeometry(0.1, 0.24, 6), light, torso, [0, y, z], [-0.5, 0, 0]);
  });

  // Cabeza con mandíbula articulada
  const head = new THREE.Group();
  head.position.set(0, 2.05, 0.5);
  torso.add(head);
  add(new THREE.BoxGeometry(0.76, 0.6, 0.98), pink, head, [0, 0.1, 0.22]);
  const jaw = new THREE.Group();
  jaw.position.set(0, -0.2, -0.15);
  head.add(jaw);
  add(new THREE.BoxGeometry(0.62, 0.16, 0.82), light, jaw, [0, -0.02, 0.4]);
  [-1, 1].forEach((s) => {
    add(new THREE.SphereGeometry(0.11, 12, 10), white, head, [0.36 * s, 0.24, 0.32]);
    add(new THREE.SphereGeometry(0.055, 10, 8), dark, head, [0.43 * s, 0.25, 0.36]);
    add(new THREE.SphereGeometry(0.035, 8, 6), dark, head, [0.18 * s, 0.22, 0.72]);
  });

  // Brazos pequeños
  const arms = [-1, 1].map((s) => {
    const pivot = new THREE.Group();
    pivot.position.set(0.38 * s, 1.55, 0.5);
    torso.add(pivot);
    add(new THREE.CylinderGeometry(0.06, 0.05, 0.36, 8), pink, pivot, [0, -0.15, 0.08], [0.9, 0, 0]);
    return pivot;
  });

  // Piernas
  [-1, 1].forEach((s) => {
    add(new THREE.SphereGeometry(0.32, 16, 12), pink, root, [0.36 * s, 0.85, -0.05], null, [0.9, 1.15, 1.1]);
    add(new THREE.CylinderGeometry(0.13, 0.11, 0.6, 10), pink, root, [0.36 * s, 0.38, 0]);
    add(new THREE.BoxGeometry(0.3, 0.12, 0.5), light, root, [0.36 * s, 0.06, 0.12]);
  });

  // CSS2DRenderer controla el transform del contenedor; el desplazamiento va en el hijo.
  const bubbleWrap = document.createElement('div');
  bubbleWrap.className = 'dino-bubble-anchor';
  const bubbleEl = document.createElement('div');
  bubbleEl.className = 'dino-bubble';
  bubbleEl.textContent = MOOD_TEXT.normal;
  bubbleWrap.appendChild(bubbleEl);
  const bubble = new CSS2DObject(bubbleWrap);
  bubble.position.set(0, 3.2, 0.4);
  root.add(bubble);

  const state = { mood: 'normal', lookYaw: 0 };

  return {
    root,
    bubbleEl,
    setMood(mood) {
      state.mood = mood;
      bubbleEl.textContent = MOOD_TEXT[mood] || MOOD_TEXT.normal;
      bubbleEl.dataset.mood = mood;
      badgeMat.emissive.set(STATUS_COLORS[mood] || STATUS_COLORS.normal);
      badgeMat.emissiveIntensity = mood === 'nodata' ? 0.2 : 1.4;
    },
    /** Ángulo (rad) hacia el componente que la mascota debe mirar. */
    setLook(yaw) { state.lookYaw = yaw; },
    /** Pose estática (se usa con movimiento reducido). */
    applyStaticPose() {
      const m = state.mood;
      head.rotation.set(m === 'risk' ? -0.1 : 0, m === 'nodata' ? 0.5 : state.lookYaw * 0.6, m === 'suspicious' ? 0.22 : 0);
      jaw.rotation.x = m === 'risk' ? 0.35 : 0;
      arms.forEach((a) => { a.rotation.x = m === 'risk' ? -1.1 : 0; });
      torso.rotation.x = m === 'risk' ? -0.12 : 0;
      torso.position.y = 0;
    },
    animate(time) {
      const m = state.mood;
      const breathe = Math.sin(time * 1.6) * 0.03;
      torso.position.y = m === 'risk' ? Math.abs(Math.sin(time * 4)) * 0.12 : breathe;
      torso.rotation.x = THREE.MathUtils.lerp(torso.rotation.x, m === 'risk' ? -0.12 : 0, 0.08);
      const targetYaw = m === 'nodata' ? Math.sin(time * 0.8) * 0.7 : state.lookYaw * 0.6 + Math.sin(time * 0.5) * 0.06;
      head.rotation.y = THREE.MathUtils.lerp(head.rotation.y, targetYaw, 0.06);
      head.rotation.z = THREE.MathUtils.lerp(head.rotation.z, m === 'suspicious' ? 0.22 : 0, 0.06);
      jaw.rotation.x = THREE.MathUtils.lerp(jaw.rotation.x, m === 'risk' ? 0.3 + Math.sin(time * 6) * 0.05 : 0.02, 0.15);
      arms.forEach((a, i) => {
        const target = m === 'risk' ? -1.1 + Math.sin(time * 6 + i) * 0.15 : Math.sin(time * 1.6 + i) * 0.08;
        a.rotation.x = THREE.MathUtils.lerp(a.rotation.x, target, 0.12);
      });
    },
    dispose() { disposables.forEach((d) => d.dispose()); },
  };
}
