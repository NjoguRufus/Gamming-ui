// src/components/ThreeDPyramid.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

const FuturisticMaterial = () => {
  const shaderRef = useRef();
  const uniforms = {
    uTime: { value: 0 },
    uColor: { value: new THREE.Color('#00f') }
  };

  useFrame(({ clock }) => {
    uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <shaderMaterial
      ref={shaderRef}
      vertexShader={`
        uniform float uTime;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 pos = position;
          pos.z += sin(uTime + uv.x * 10.0) * 0.5;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `}
      fragmentShader={`
        uniform vec3 uColor;
        varying vec2 vUv;
        void main() {
          vec3 color = uColor * (0.5 + 0.5 * sin(vUv.x * 10.0 + uTime));
          gl_FragColor = vec4(color, 1.0);
        }
      `}
      uniforms={uniforms}
    />
  );
};

const RotatingPyramid = () => {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.x += 0.02;
    meshRef.current.rotation.y += 0.02;
  });

  return (
    <mesh ref={meshRef}>
      <coneGeometry args={[1, 2, 4]} />
      <FuturisticMaterial />
    </mesh>
  );
};

const ThreeDPyramid = () => {
  return (
    <Canvas className="h-64" style={{ background: 'radial-gradient(circle, #000000, #222222)' }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <spotLight position={[-5, 5, 10]} angle={0.3} penumbra={1} intensity={2} castShadow />
      <RotatingPyramid />
      <OrbitControls />
      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
    </Canvas>
  );
};

export default ThreeDPyramid;
