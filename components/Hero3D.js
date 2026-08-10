'use client';
import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Line } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import Link from 'next/link';

// Generate points on a sphere surface using Fibonacci distribution
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
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Core wireframe sphere */}
      <mesh>
        <icosahedronGeometry args={[2.4, 2]} />
        <meshBasicMaterial color="#14532d" wireframe transparent opacity={0.2} />
      </mesh>

      {/* Node points */}
      {nodePoints.map((point, i) => (
        <mesh key={i} position={point}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color="#84cc16" />
        </mesh>
      ))}

      {/* Connection lines */}
      {connections.map((line, i) => (
        <Line key={i} points={line} color="#4ade80" lineWidth={0.6} transparent opacity={0.5} />
      ))}
    </group>
  );
}

export default function Hero3D() {
  const [is3DLoaded, setIs3DLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIs3DLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-zinc-950">
      {/* Radial Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lime-100/50 dark:from-lime-950/30 via-slate-50 dark:via-zinc-950 to-slate-100 dark:to-black" />

      {/* 3D Globe Scene */}
      {is3DLoaded ? (
        <div className="absolute inset-0 z-0 opacity-60">
          <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
            <pointLight position={[-10, -10, -10]} intensity={0.6} color="#84cc16" />
            <NetworkGlobe />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.15} />
          </Canvas>
        </div>
      ) : (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-100 dark:from-zinc-900 via-slate-50 dark:via-zinc-950 to-slate-200 dark:to-black" />
      )}

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center pointer-events-none">
        <div className="text-center lg:text-left pointer-events-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-lime-600 dark:text-lime-400 font-bold uppercase tracking-widest mb-4 text-xs font-mono">
              AI Systems for Owner-Led Service Businesses
            </p>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.1] mb-6">
              Recover the hours your business loses to <span className="text-lime-600 dark:text-lime-400 block mt-1">manual operations.</span>
            </h1>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We audit the work behind your calls, quotes, scheduling, and reporting, then build the systems that remove repetitive steps.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/services/it-audits" className="px-8 py-4 bg-lime-500 text-zinc-950 rounded-xl font-extrabold hover:bg-lime-400 transition-all shadow-xl shadow-lime-500/25 text-center text-base">
                Book a 15-Minute Audit
              </Link>
              <Link href="#services" className="px-8 py-4 border border-zinc-300 dark:border-zinc-700 bg-white/10 dark:bg-zinc-900/80 text-zinc-900 dark:text-white rounded-xl font-bold hover:border-lime-500 transition-all text-center text-base">
                See How We Work
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="hidden lg:block"></div>
      </div>

      {/* Bottom Blend Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 dark:from-zinc-950 to-transparent z-10 pointer-events-none" />
    </section>
  );
}