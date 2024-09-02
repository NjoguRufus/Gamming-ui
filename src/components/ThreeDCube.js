// src/components/ThreeDCube.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const ThreeDCube = () => {
  return (
    <Canvas className="h-64">
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh rotation={[45, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={'blue'} />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDCube;
