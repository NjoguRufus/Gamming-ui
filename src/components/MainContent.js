// src/components/ThreeDPyramid.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

const RotatingPyramid = () => {
  const meshRef = useRef();
  
  useFrame(() => {
    meshRef.current.rotation.x += 0.02;
    meshRef.current.rotation.y += 0.02;
  });

  return (
    <mesh ref={meshRef}>
      <coneGeometry args={[1, 2, 4]} /> {/* Pyramid shape */}
      <meshStandardMaterial color="blue" /> {/* Use a solid color for testing */}
    </mesh>
  );
};

const ThreeDPyramid = () => {
  return (
    <Canvas className="h-64">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <spotLight position={[-5, 5, 10]} angle={0.3} penumbra={1} intensity={1} castShadow />
      <RotatingPyramid />
      <OrbitControls />
      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
    </Canvas>
  );
};

export default ThreeDPyramid;
