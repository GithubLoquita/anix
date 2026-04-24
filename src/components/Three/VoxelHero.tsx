import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Environment } from "@react-three/drei";
import * as THREE from "three";

function Voxel({ position, color, size = 1 }: { position: [number, number, number]; color: string; size?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    // Subtle float and rotation
    meshRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.1;
    meshRef.current.rotation.x = Math.sin(time * 0.5 + position[1]) * 0.1;
    meshRef.current.rotation.z = Math.cos(time * 0.5 + position[0]) * 0.1;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial 
        color={color} 
        roughness={0.1} 
        metalness={0.8}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

function VoxelGrid() {
  const voxels = useMemo(() => {
    const items = [];
    const count = 40;
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 15;
      const y = (Math.random() - 0.5) * 8;
      const z = (Math.random() - 0.5) * 5;
      const colors = ["#00e5ff", "#00ff85", "#ffffff", "#333333"];
      const color = colors[Math.floor(Math.random() * colors.length)];
      items.push({ position: [x, y, z] as [number, number, number], color });
    }
    return items;
  }, []);

  return (
    <group>
      {voxels.map((v, i) => (
        <Float key={i} speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Voxel position={v.position} color={v.color} size={Math.random() * 0.5 + 0.2} />
        </Float>
      ))}
    </group>
  );
}

export default function VoxelHero() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        <VoxelGrid />
        
        <Environment preset="night" />
        
        {/* Subtle grid floor */}
        <gridHelper args={[20, 20, "#222", "#111"]} position={[0, -4, 0]} rotation={[0, 0, 0]} />
      </Canvas>
    </div>
  );
}
