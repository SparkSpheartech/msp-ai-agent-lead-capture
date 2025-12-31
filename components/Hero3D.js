'use client';
import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';

function AnimatedSphere() {
  const sphereRef = useRef();

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere visible args={[1, 100, 200]} scale={2.4} ref={sphereRef}>
      <MeshDistortMaterial
        color="#8b5cf6" // Violet-500
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

function ParticleField() {
    const ref = useRef()
    const [sphere] = useState(() => {
        const coords = new Float32Array(5000 * 3)
        for (let i = 0; i < 5000; i++) {
            coords[i * 3] = (Math.random() - 0.5) * 15
            coords[i * 3 + 1] = (Math.random() - 0.5) * 15
            coords[i * 3 + 2] = (Math.random() - 0.5) * 15
        }
        return coords
    })

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10
        ref.current.rotation.y -= delta / 15
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <points ref={ref}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={sphere.length / 3}
                        array={sphere}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.03}
                    color="#ffffff"
                    sizeAttenuation={true}
                    depthWrite={false}
                    transparent
                    opacity={0.6}
                />
            </points>
        </group>
    )
}

export default function Hero3D() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-zinc-950">
      
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <ParticleField />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center pointer-events-none">
        
        <div className="text-center lg:text-left pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              The Future of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                Digital Evolution
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              We build intelligent digital ecosystems that automate operations, 
              elevate brands, and secure futures.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="/services/ai-automation"
                className="px-8 py-4 bg-white text-zinc-950 rounded-full font-semibold hover:bg-zinc-200 transition-colors"
              >
                Explore AI Solutions
              </a>
              <a 
                href="/contact"
                className="px-8 py-4 border border-zinc-700 text-white rounded-full font-semibold hover:bg-zinc-900 transition-colors"
              >
                Start Your Project
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right side is kept empty to let the 3D sphere shine, or for mobile spacing */}
        <div className="hidden lg:block"></div>
      </div>
      
       {/* Gradient Overlay for bottom blending */}
       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent z-10 pointer-events-none" />

    </section>
  );
}
