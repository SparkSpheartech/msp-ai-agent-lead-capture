'use client';
import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

function AnimatedSphere() {
  const sphereRef = useRef();

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.15;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere visible args={[1, 100, 200]} scale={2.2} ref={sphereRef}>
        <MeshDistortMaterial
          color="#0ea5e9" // Sky-500 - Primary brand cyan/blue
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.9}
          emissive="#0369a1" // Sky-700
          emissiveIntensity={0.3}
        />
      </Sphere>
    </Float>
  );
}

function ParticleField() {
  const ref = useRef();
  const count = 3000;

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      const distance = THREE.MathUtils.randFloat(4, 12);

      positions[i * 3] = distance * Math.sin(theta) * Math.cos(phi);
      positions[i * 3 + 1] = distance * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = distance * Math.cos(theta);

      // Gradient from cyan to blue
      const t = Math.random();
      color.lerpColors(new THREE.Color('#22d3ee'), new THREE.Color('#3b82f6'), t); // Cyan-400 to Blue-500
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return [positions, colors];
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 25;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} vertexColors sizeAttenuation={true} depthWrite={false} transparent opacity={0.7} />
    </points>
  );
}

export default function Hero3D() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-black">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
          <pointLight position={[-5, -5, -5]} intensity={0.5} color="#22d3ee" />
          <ParticleField />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center pointer-events-none">

        <div className="text-center lg:text-left pointer-events-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-cyan-400 font-semibold uppercase tracking-widest mb-4 text-sm">Fort Wayne&apos;s Premier Tech Partner</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              Ignite Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Digital Future
              </span>
            </h1>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <p className="text-xl text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0">
              We engineer intelligent systems that automate your operations, elevate your brand, and secure your digital infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/services/ai-automation" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/30">
                Explore AI Solutions
              </a>
              <a href="/support" className="px-8 py-4 border border-slate-700 text-white rounded-full font-semibold hover:bg-slate-800/50 transition-colors">
                Get Support
              </a>
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
