'use client';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture, Line } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import Link from 'next/link';

// Generate points on a sphere surface
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

// Generate connections between nearby points
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
  const groupRef = useRef();
  const nodePoints = useMemo(() => fibonacciSphere(80, 2.5), []);
  const connections = useMemo(() => generateConnections(nodePoints, 1.1), [nodePoints]);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Core wireframe sphere for earth-like structure */}
      <mesh>
        <icosahedronGeometry args={[2.4, 2]} />
        <meshBasicMaterial color="#0c4a6e" wireframe transparent opacity={0.15} />
      </mesh>

      {/* Node points */}
      {nodePoints.map((point, i) => (
        <mesh key={i} position={point}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshBasicMaterial color="#22d3ee" />
        </mesh>
      ))}

      {/* Connection lines */}
      {connections.map((line, i) => (
        <Line key={i} points={line} color="#0ea5e9" lineWidth={0.5} transparent opacity={0.4} />
      ))}
    </group>
  );
}

export default function Hero3D() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-black">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
          <pointLight position={[-10, -10, -10]} intensity={0.3} color="#22d3ee" />
          <NetworkGlobe />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.2} />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center pointer-events-none">
        <div className="text-center lg:text-left pointer-events-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-cyan-400 font-semibold uppercase tracking-widest mb-4 text-sm">Fort Wayne&apos;s Premier Tech Partner</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              Rebuilding <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Old Infrastructures
              </span>
            </h1>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <p className="text-xl text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0">
              With state-of-the-art technology. AI automation, web design, digital marketing, and IT audits for businesses ready to evolve.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/services" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/30">
                Explore Services
              </Link>
              <Link href="/about" className="px-8 py-4 border border-slate-700 text-white rounded-full font-semibold hover:bg-slate-800/50 transition-colors">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="hidden lg:block"></div>
      </div>

      {/* Gradient Overlay for bottom blending */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
    </section>
  );
}
