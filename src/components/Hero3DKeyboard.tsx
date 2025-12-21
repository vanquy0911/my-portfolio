import { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, RoundedBox, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

interface KeyProps {
  position: [number, number, number];
  size: [number, number, number];
  color: string;
  label?: string;
  glowColor: string;
  onKeyPress?: () => void;
}

const Key = ({ position, size, color, glowColor, onKeyPress }: KeyProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const targetY = useRef(position[1]);

  useFrame(() => {
    if (meshRef.current) {
      const targetPosY = isPressed ? position[1] - 0.08 : position[1];
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        targetPosY,
        0.3
      );
    }
  });

  const handleClick = () => {
    setIsPressed(true);
    onKeyPress?.();
    setTimeout(() => setIsPressed(false), 150);
  };

  return (
    <group position={[position[0], position[1], position[2]]}>
      {/* Glow effect */}
      {isHovered && (
        <mesh position={[0, -0.05, 0]}>
          <boxGeometry args={[size[0] + 0.1, 0.05, size[2] + 0.1]} />
          <meshBasicMaterial color={glowColor} transparent opacity={0.4} />
        </mesh>
      )}
      
      <RoundedBox
        ref={meshRef}
        args={size}
        radius={0.06}
        smoothness={4}
        onClick={handleClick}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
      >
        <meshPhysicalMaterial
          color={color}
          metalness={0.1}
          roughness={0.2}
          transmission={0.3}
          thickness={0.5}
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          emissive={isHovered ? glowColor : '#000000'}
          emissiveIntensity={isHovered ? 0.5 : 0}
        />
      </RoundedBox>
    </group>
  );
};

const Keyboard = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse, viewport } = useThree();
  const [isDragging, setIsDragging] = useState(false);

  useFrame(() => {
    if (groupRef.current && !isDragging) {
      // Smooth tilt based on mouse position
      const targetRotationX = mouse.y * 0.15;
      const targetRotationY = mouse.x * 0.2;
      
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotationX,
        0.05
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotationY,
        0.05
      );
    }
  });

  // Key configurations - mini keyboard layout
  const keyColors = {
    indigo: '#6366f1',
    cyan: '#06b6d4',
    purple: '#a855f7',
    pink: '#ec4899',
    blue: '#3b82f6',
    violet: '#8b5cf6',
  };

  const glowColors = {
    indigo: '#818cf8',
    cyan: '#22d3ee',
    purple: '#c084fc',
    pink: '#f472b6',
    blue: '#60a5fa',
    violet: '#a78bfa',
  };

  const keys = [
    // Row 1
    { pos: [-1.2, 0, -0.8] as [number, number, number], size: [0.5, 0.25, 0.5] as [number, number, number], color: keyColors.indigo, glow: glowColors.indigo },
    { pos: [-0.6, 0, -0.8] as [number, number, number], size: [0.5, 0.25, 0.5] as [number, number, number], color: keyColors.cyan, glow: glowColors.cyan },
    { pos: [0, 0, -0.8] as [number, number, number], size: [0.5, 0.25, 0.5] as [number, number, number], color: keyColors.purple, glow: glowColors.purple },
    { pos: [0.6, 0, -0.8] as [number, number, number], size: [0.5, 0.25, 0.5] as [number, number, number], color: keyColors.pink, glow: glowColors.pink },
    { pos: [1.2, 0, -0.8] as [number, number, number], size: [0.5, 0.25, 0.5] as [number, number, number], color: keyColors.blue, glow: glowColors.blue },
    
    // Row 2
    { pos: [-1.2, 0, -0.2] as [number, number, number], size: [0.5, 0.25, 0.5] as [number, number, number], color: keyColors.purple, glow: glowColors.purple },
    { pos: [-0.6, 0, -0.2] as [number, number, number], size: [0.5, 0.25, 0.5] as [number, number, number], color: keyColors.indigo, glow: glowColors.indigo },
    { pos: [0, 0, -0.2] as [number, number, number], size: [0.5, 0.25, 0.5] as [number, number, number], color: keyColors.cyan, glow: glowColors.cyan },
    { pos: [0.6, 0, -0.2] as [number, number, number], size: [0.5, 0.25, 0.5] as [number, number, number], color: keyColors.indigo, glow: glowColors.indigo },
    { pos: [1.2, 0, -0.2] as [number, number, number], size: [0.5, 0.25, 0.5] as [number, number, number], color: keyColors.violet, glow: glowColors.violet },
    
    // Row 3
    { pos: [-1.2, 0, 0.4] as [number, number, number], size: [0.5, 0.25, 0.5] as [number, number, number], color: keyColors.cyan, glow: glowColors.cyan },
    { pos: [-0.6, 0, 0.4] as [number, number, number], size: [0.5, 0.25, 0.5] as [number, number, number], color: keyColors.pink, glow: glowColors.pink },
    { pos: [0, 0, 0.4] as [number, number, number], size: [0.5, 0.25, 0.5] as [number, number, number], color: keyColors.indigo, glow: glowColors.indigo },
    { pos: [0.6, 0, 0.4] as [number, number, number], size: [0.5, 0.25, 0.5] as [number, number, number], color: keyColors.purple, glow: glowColors.purple },
    { pos: [1.2, 0, 0.4] as [number, number, number], size: [0.5, 0.25, 0.5] as [number, number, number], color: keyColors.cyan, glow: glowColors.cyan },
    
    // Space bar row
    { pos: [-0.9, 0, 1.0] as [number, number, number], size: [0.5, 0.25, 0.5] as [number, number, number], color: keyColors.violet, glow: glowColors.violet },
    { pos: [0, 0, 1.0] as [number, number, number], size: [1.4, 0.25, 0.5] as [number, number, number], color: keyColors.indigo, glow: glowColors.indigo },
    { pos: [0.9, 0, 1.0] as [number, number, number], size: [0.5, 0.25, 0.5] as [number, number, number], color: keyColors.violet, glow: glowColors.violet },
  ];

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef}>
        {/* Keyboard base with glassmorphism */}
        <RoundedBox args={[3.4, 0.15, 2.6]} radius={0.1} smoothness={4} position={[0, -0.2, 0.1]}>
          <meshPhysicalMaterial
            color="#1e1b4b"
            metalness={0.3}
            roughness={0.1}
            transmission={0.6}
            thickness={0.5}
            envMapIntensity={1}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </RoundedBox>
        
        {/* Keys */}
        {keys.map((key, index) => (
          <Key
            key={index}
            position={key.pos}
            size={key.size}
            color={key.color}
            glowColor={key.glow}
          />
        ))}
      </group>
    </Float>
  );
};

const Hero3DKeyboard = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 2.5, 4], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
          <pointLight position={[-5, 5, 5]} intensity={0.5} color="#06b6d4" />
          <pointLight position={[5, 5, -5]} intensity={0.5} color="#6366f1" />
          <spotLight
            position={[0, 10, 0]}
            intensity={0.8}
            angle={0.3}
            penumbra={1}
            color="#a855f7"
          />
          
          <Keyboard />
          
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2.2}
          />
          
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Hero3DKeyboard;
