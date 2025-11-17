import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import * as THREE from 'three';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

// Create a simple procedural nebula shader
const NebulaMaterial = shaderMaterial(
  { time: 0.0 },
  `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
  }`,
  `
  uniform float time;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv * 2.0 - 1.0;
    float color = 0.5 + 0.5*sin(time + uv.x*10.0)*cos(time + uv.y*10.0);
    gl_FragColor = vec4(vec3(color*0.6, color*0.8, color), 1.0);
  }
`
);

extend({ NebulaMaterial });

export function ProceduralNebula() {
  const ref = useRef();
  useFrame(({ clock }) => (ref.current.time = clock.getElapsedTime()));

  return (
    <mesh scale={500}>
      <sphereGeometry args={[1, 32, 32]} />
      <nebulaMaterial ref={ref} side={THREE.BackSide} />
    </mesh>
  );
}
