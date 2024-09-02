import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer, RenderPass } from 'three-stdlib';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import './ThreeScene.css'; // Import styles for UI overlay

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create a glowing sphere
    const sphereGeometry = new THREE.SphereBufferGeometry(1, 32, 32);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: 0x00ff00,
      emissive: 0x00ff00,
      emissiveIntensity: 0.5
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Add a light source
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    // Create a particle system
    const particleCount = 5000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = Math.random() * 2000 - 1000;
      positions[i + 1] = Math.random() * 2000 - 1000;
      positions[i + 2] = Math.random() * 2000 - 1000;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x888888,
      size: 0.5,
      map: new THREE.TextureLoader().load('path/to/your/particle_texture.png'),
      blending: THREE.AdditiveBlending,
      transparent: true
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Create custom shader material
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;
    const fragmentShader = `
      varying vec2 vUv;
      uniform float time;
      void main() {
        vec3 color = 0.5 + 0.5 * cos(time + vUv.xyx + vec3(0, 2, 4));
        gl_FragColor = vec4(color, 1.0);
      }
    `;
    const shaderMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        time: { value: 0 }
      }
    });
    const shaderGeometry = new THREE.PlaneBufferGeometry(5, 5);
    const shaderMesh = new THREE.Mesh(shaderGeometry, shaderMaterial);
    scene.add(shaderMesh);

    // Add post-processing effects
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5, 0.4, 0.85
    );
    composer.addPass(bloomPass);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      shaderMaterial.uniforms.time.value += 0.05;
      composer.render();
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
    };
    animate();

    // Cleanup on unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <>
      <div className="ui-overlay">
        <h1 className="title">Futuristic Gaming UI</h1>
        <button className="button">Start</button>
        {/* Add more UI elements */}
      </div>
      <div ref={mountRef} />
    </>
  );
};

export default ThreeScene;
