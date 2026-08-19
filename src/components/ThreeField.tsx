"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeField() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.z = 8;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);
    const points: THREE.Vector3[] = [];
    let seed = 17;
    const random = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    for (let index = 0; index < 46; index += 1) {
      const angle = random() * Math.PI * 2;
      const radius = 1.5 + random() * 2.5;
      points.push(new THREE.Vector3(Math.cos(angle) * radius, (random() - 0.5) * 3.2, Math.sin(angle) * radius * 0.55));
    }

    const pointGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const pointMaterial = new THREE.PointsMaterial({ color: 0xc8e86b, size: 0.045, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false });
    group.add(new THREE.Points(pointGeometry, pointMaterial));

    const linePositions: number[] = [];
    points.forEach((point, index) => {
      points.slice(index + 1).forEach((other) => {
        if (point.distanceTo(other) < 1.25) linePositions.push(point.x, point.y, point.z, other.x, other.y, other.z);
      });
    });
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xc8e86b, transparent: true, opacity: 0.13, blending: THREE.AdditiveBlending, depthWrite: false });
    group.add(new THREE.LineSegments(lineGeometry, lineMaterial));

    const ring = new THREE.Mesh(new THREE.TorusGeometry(2.2, 0.006, 8, 96), new THREE.MeshBasicMaterial({ color: 0xe6a16f, transparent: true, opacity: 0.3 }));
    ring.rotation.x = Math.PI / 2.3;
    group.add(ring);

    const pointer = { x: 0, y: 0 };
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onPointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 0.35;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 0.2;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    const resize = () => {
      const width = mount.clientWidth || window.innerWidth;
      const height = mount.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    let frame = 0;
    const render = (time: number) => {
      const elapsed = time * 0.00025;
      if (!reducedMotion) {
        group.rotation.y = elapsed + pointer.x;
        group.rotation.x += (pointer.y - group.rotation.x) * 0.015;
        ring.rotation.z = elapsed * 1.8;
      }
      renderer.render(scene, camera);
      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      pointGeometry.dispose();
      pointMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      ring.geometry.dispose();
      ring.material.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="three-field" ref={mountRef} aria-hidden="true" />;
}