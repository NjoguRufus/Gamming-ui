import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

const RotatingCube = () => {
  const meshRef = useRef();
  const texture = useTexture('/path/to/your/texture.jpg');
  
  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const ThreeDCube = () => {
  return (
    <Canvas className="h-64">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <spotLight position={[-5, 5, 10]} angle={0.3} penumbra={1} intensity={1} castShadow />
      <RotatingCube />
      <OrbitControls />
      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
    </Canvas>
  );
};

export default ThreeDCube;
