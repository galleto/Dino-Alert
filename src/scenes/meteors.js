import * as THREE from 'three';
import { STATUS_COLORS } from './palette.js';

/**
 * Meteoritos: representan una señal de riesgo que "se aproxima" a un componente.
 * Hay un grupo pequeño reutilizable (no se crean objetos nuevos por fotograma).
 */
export function createMeteorSystem(poolSize = 2) {
  const group = new THREE.Group();
  const rockGeo = new THREE.DodecahedronGeometry(0.3, 0);
  const trailGeo = new THREE.ConeGeometry(0.26, 1.8, 12, 1, true);
  trailGeo.translate(0, 0.9, 0);
  trailGeo.rotateX(-Math.PI / 2); // la estela apunta hacia atrás (-z)
  const tmp = new THREE.Vector3();

  const pool = Array.from({ length: poolSize }, () => {
    const rockMat = new THREE.MeshStandardMaterial({ color: '#3a2a3a', emissive: STATUS_COLORS.risk, emissiveIntensity: 1.6, roughness: 0.8, transparent: true });
    const trailMat = new THREE.MeshBasicMaterial({ color: STATUS_COLORS.risk, transparent: true, opacity: 0.45, blending: THREE.AdditiveBlending, depthWrite: false });
    const g = new THREE.Group();
    const rock = new THREE.Mesh(rockGeo, rockMat);
    const trail = new THREE.Mesh(trailGeo, trailMat);
    g.add(rock, trail);
    g.visible = false;
    group.add(g);
    return { g, rock, rockMat, trailMat, active: false, t: 0, from: new THREE.Vector3(), to: new THREE.Vector3(), targetId: null };
  });

  return {
    group,
    get activeCount() { return pool.filter((p) => p.active).length; },
    spawn(targetId, targetPos, height, status) {
      const m = pool.find((p) => !p.active);
      if (!m) return false;
      const color = STATUS_COLORS[status === 'risk' ? 'risk' : 'suspicious'];
      m.rockMat.emissive.set(color);
      m.trailMat.color.set(color);
      m.active = true; m.t = 0; m.targetId = targetId;
      m.from.set(targetPos.x - 5, 13, targetPos.z - 6);
      m.to.set(targetPos.x, height + 1.3, targetPos.z);
      m.g.position.copy(m.from);
      m.g.lookAt(m.to);
      m.g.visible = true;
      m.g.scale.setScalar(status === 'risk' ? 1 : 0.7);
      return true;
    },
    /** Avanza la animación. Llama a onArrive(targetId) cuando un meteorito llega. */
    update(dt, onArrive) {
      for (const m of pool) {
        if (!m.active) continue;
        m.t += dt;
        const travel = 2.2;
        if (m.t <= travel) {
          const k = m.t / travel;
          const e = k * k * (3 - 2 * k);
          tmp.lerpVectors(m.from, m.to, e);
          m.g.position.copy(tmp);
          m.rock.rotation.x += dt * 2;
          m.rockMat.opacity = 1; m.trailMat.opacity = 0.45;
        } else {
          if (!m.arrived) { m.arrived = true; onArrive?.(m.targetId); }
          const f = Math.max(0, 1 - (m.t - travel) / 0.6);
          m.rockMat.opacity = f; m.trailMat.opacity = 0.45 * f;
          if (f <= 0) { m.active = false; m.arrived = false; m.g.visible = false; }
        }
      }
    },
    clear() { pool.forEach((m) => { m.active = false; m.arrived = false; m.g.visible = false; }); },
    dispose() {
      rockGeo.dispose(); trailGeo.dispose();
      pool.forEach((m) => { m.rockMat.dispose(); m.trailMat.dispose(); });
    },
  };
}
