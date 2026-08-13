'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

function fibonacciSphere(samples = 100, radius = 2.5) {
  const points = [];
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < samples; i++) {
    const y = 1 - (i / (samples - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;
    points.push(new THREE.Vector3(Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius));
  }
  return points;
}

function generateConnections(points, maxDistance = 1.2) {
  const lines = [];
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      if (points[i].distanceTo(points[j]) < maxDistance) {
        lines.push([points[i], points[j]]);
      }
    }
  }
  return lines;
}

function NetworkGlobe() {
  const groupRef = useRef(null);
  const nodePoints = useMemo(() => fibonacciSphere(80, 2.5), []);
  const connections = useMemo(() => generateConnections(nodePoints, 1.1), [nodePoints]);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[2.4, 2]} />
        <meshBasicMaterial color="#14532d" wireframe transparent opacity={0.25} />
      </mesh>
      {nodePoints.map((point, i) => (
        <mesh key={i} position={point}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color="#84cc16" />
        </mesh>
      ))}
      {connections.map((line, i) => (
        <Line key={i} points={line} color="#4ade80" lineWidth={0.6} transparent opacity={0.5} />
      ))}
    </group>
  );
}

export default function GlobeCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <NetworkGlobe />
    </Canvas>
  );
}
