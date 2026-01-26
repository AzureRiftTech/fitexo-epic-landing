"use client";

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, OrbitControls } from '@react-three/drei';
import { useRef, useMemo, Suspense, useEffect, useState } from 'react';
import * as THREE from 'three';

function useScrollY() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
}

function AnimatedSphere({ scrollY }: { scrollY: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const targetScale = useRef(1);
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (meshRef.current) {
      // Parallax scroll effect
      const scrollFactor = scrollY * 0.001;
      targetScale.current = 1 + scrollFactor * 0.5;
      targetRotation.current.x = state.clock.elapsedTime * 0.1 + scrollFactor * 0.5;
      targetRotation.current.y = state.clock.elapsedTime * 0.15 + scrollFactor * 0.3;

      // Smooth interpolation
      meshRef.current.rotation.x += (targetRotation.current.x - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y += (targetRotation.current.y - meshRef.current.rotation.y) * 0.05;
      meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale.current, 0.05));

      // Add vertical parallax movement
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        scrollFactor * -2,
        0.03
      );
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef}>
        <Sphere args={[1.8, 128, 128]}>
          <MeshDistortMaterial
            color="#dc2626"
            attach="material"
            distort={0.5}
            speed={1.5}
            roughness={0.15}
            metalness={0.9}
            envMapIntensity={1}
          />
        </Sphere>
      </mesh>
    </Float>
  );
}

function ParticleField({ scrollY }: { scrollY: number }) {
  const count = 800;
  const particlesRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      // Create a spherical distribution
      const radius = 8 + Math.random() * 12;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      pos[i] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

  const sizes = useMemo(() => {
    const s = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      s[i] = Math.random() * 0.5 + 0.1;
    }
    return s;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      const scrollFactor = scrollY * 0.0005;
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02 + scrollFactor;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01 + scrollFactor * 0.5;
      particlesRef.current.position.z = scrollFactor * -5;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#ef4444"
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function FloatingRings({ scrollY }: { scrollY: number }) {
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);
  const ringRef3 = useRef<THREE.Mesh>(null);
  const ringRef4 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const scrollFactor = scrollY * 0.001;

    if (ringRef1.current) {
      ringRef1.current.rotation.x = t * 0.3 + scrollFactor;
      ringRef1.current.rotation.z = t * 0.2;
      ringRef1.current.scale.setScalar(1 + scrollFactor * 0.3);
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.y = t * 0.25 - scrollFactor * 0.5;
      ringRef2.current.rotation.z = -t * 0.15;
      ringRef2.current.scale.setScalar(1 + scrollFactor * 0.2);
    }
    if (ringRef3.current) {
      ringRef3.current.rotation.x = -t * 0.2 + scrollFactor * 0.3;
      ringRef3.current.rotation.y = t * 0.3;
      ringRef3.current.scale.setScalar(1 + scrollFactor * 0.15);
    }
    if (ringRef4.current) {
      ringRef4.current.rotation.x = t * 0.15;
      ringRef4.current.rotation.z = -t * 0.25 + scrollFactor;
      ringRef4.current.scale.setScalar(1 + scrollFactor * 0.1);
    }
  });

  return (
    <>
      <mesh ref={ringRef1} position={[0, 0, 0]}>
        <torusGeometry args={[2.5, 0.025, 32, 100]} />
        <meshStandardMaterial color="#dc2626" metalness={0.95} roughness={0.05} emissive="#dc2626" emissiveIntensity={0.2} />
      </mesh>
      <mesh ref={ringRef2} position={[0, 0, 0]}>
        <torusGeometry args={[2.9, 0.02, 32, 100]} />
        <meshStandardMaterial color="#ef4444" metalness={0.95} roughness={0.05} emissive="#ef4444" emissiveIntensity={0.15} />
      </mesh>
      <mesh ref={ringRef3} position={[0, 0, 0]}>
        <torusGeometry args={[3.3, 0.015, 32, 100]} />
        <meshStandardMaterial color="#f87171" metalness={0.95} roughness={0.05} emissive="#f87171" emissiveIntensity={0.1} />
      </mesh>
      <mesh ref={ringRef4} position={[0, 0, 0]}>
        <torusGeometry args={[3.7, 0.01, 32, 100]} />
        <meshStandardMaterial color="#fca5a5" metalness={0.9} roughness={0.1} emissive="#fca5a5" emissiveIntensity={0.05} />
      </mesh>
    </>
  );
}

function GlowingSpheres({ scrollY }: { scrollY: number }) {
  const sphereRefs = useRef<THREE.Mesh[]>([]);

  const positions = useMemo(() => [
    { x: -4, y: 2, z: -3, scale: 0.15 },
    { x: 4, y: -2, z: -2, scale: 0.1 },
    { x: -3, y: -3, z: -4, scale: 0.12 },
    { x: 5, y: 3, z: -5, scale: 0.08 },
    { x: -5, y: 0, z: -6, scale: 0.2 },
  ], []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const scrollFactor = scrollY * 0.001;

    sphereRefs.current.forEach((ref, i) => {
      if (ref) {
        const pos = positions[i];
        ref.position.x = pos.x + Math.sin(t * 0.5 + i) * 0.5;
        ref.position.y = pos.y + Math.cos(t * 0.3 + i) * 0.5 - scrollFactor;
        ref.position.z = pos.z - scrollFactor * 3;
      }
    });
  });

  return (
    <>
      {positions.map((pos, i) => (
        <mesh
          key={i}
          ref={(el) => { if (el) sphereRefs.current[i] = el; }}
          position={[pos.x, pos.y, pos.z]}
        >
          <sphereGeometry args={[pos.scale, 32, 32]} />
          <meshStandardMaterial
            color="#dc2626"
            emissive="#dc2626"
            emissiveIntensity={2}
            metalness={1}
            roughness={0}
          />
        </mesh>
      ))}
    </>
  );
}

function Scene() {
  const scrollY = useScrollY();

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#dc2626" />
      <pointLight position={[10, -10, 5]} intensity={0.4} color="#ef4444" />
      <pointLight position={[0, 10, 0]} intensity={0.3} color="#ffffff" />

      <AnimatedSphere scrollY={scrollY} />
      <FloatingRings scrollY={scrollY} />
      <ParticleField scrollY={scrollY} />
      <GlowingSpheres scrollY={scrollY} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 2.2}
      />
    </>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
