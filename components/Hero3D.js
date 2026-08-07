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
 {/* Core wireframe sphere for earth-like structure */}
 <mesh>
 <icosahedronGeometry args={[2.4, 2]} />
 <meshBasicMaterial color="#14532d" wireframe transparent opacity={0.2} />
 </mesh>

 {/* Node points - Lime Green */}
 {nodePoints.map((point, i) => (
 <mesh key={i} position={point}>
 <sphereGeometry args={[0.05, 16, 16]} />
 <meshBasicMaterial color="#84cc16" />
 </mesh>
 ))}

 {/* Connection lines - Green/Cyan gradient feel */}
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
 {/* Subtle radial gradient */}
 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lime-100/50 dark:from-lime-950/30 via-slate-50 dark:via-zinc-950 to-slate-100 dark:to-black" />

 {/* 3D Scene */}
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
 <p className="text-lime-600 dark:text-lime-400 font-semibold uppercase tracking-widest mb-4 text-sm">Automation Architects & Tech Curators</p>
 <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6 leading-tight">
 Audit the System.<br />
 <span className="text-lime-600 dark:text-lime-500">Scale the Business.</span>
 </h1>
 </motion.div>

 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
 <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl mx-auto lg:mx-0">
 We audit your operations and build custom Agentic systems and specialized AI agents. Save 15–20 hours a week per employee and stop losing revenue to missed calls and manual admin.
 </p>

 <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
 <Link href="/tools" className="px-8 py-4 bg-lime-500 text-zinc-950 rounded-md font-bold hover:bg-lime-400 transition-colors shadow-lg shadow-lime-500/20">
 Calculate Your Savings
 </Link>
 <Link href="/guides" className="px-8 py-4 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-white rounded-md font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
 Explore Industry Guides
 </Link>
 </div>
 </motion.div>
 </div>

 <div className="hidden lg:block"></div>
 </div>

 {/* Gradient Overlay for bottom blending */}
 <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 dark:from-zinc-950 to-transparent z-10 pointer-events-none" />
 </section>
 );
}