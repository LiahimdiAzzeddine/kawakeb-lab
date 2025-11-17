import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Nebula({ intensity = 1, ...props }) {
  const materialRef = useRef();

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh {...props}>
      <planeGeometry args={[20, 20, 1, 1]} />
      <shaderMaterial
        ref={materialRef}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        uniforms={{
          uTime: { value: 0 },
          uIntensity: { value: intensity }
        }}
        vertexShader={vertex}
        fragmentShader={fragment}
      />
    </mesh>
  );
}

const vertex = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragment = `
  varying vec2 vUv;
  uniform float uTime;
  uniform float uIntensity;

  // ------------------------
  // 2D Noise (Super simple, fast)
  // ------------------------
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453123);
  }

  float noise(vec2 p){
    vec2 i = floor(p);
    vec2 f = fract(p);
  
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
  
    vec2 u = f * f * (3.0 - 2.0 * f);
  
    return mix(a, b, u.x) +
           (c - a) * u.y * (1.0 - u.x) +
           (d - b) * u.x * u.y;
  }

  // Fractal noise
  float fbm(vec2 p) {
    float value = 0.0;
    float scale = 0.5;
  
    for(int i = 0; i < 6; i++) {
      value += noise(p) * scale;
      p *= 2.0;
      scale *= 0.5;
    }
    return value;
  }

  void main() {
    vec2 uv = vUv * 3.0 - 1.5;

    float t = uTime * 0.05;

    // Nebula swirl texture
    float n = fbm(uv + vec2(t * 0.6, t * 0.2));

    // Glow cores like your image (orange)
    float core = pow(fbm(uv * 2.0 - t * 0.2), 4.0);

    vec3 purple = vec3(0.3, 0.1, 0.5);
    vec3 glow   = vec3(1.0, 0.5, 0.1);

    vec3 color =
      purple * n * 1.5 +
      glow * core * 2.0;

    // Slight bloom feel
    color += pow(core, 2.0) * 0.3;

    gl_FragColor = vec4(color * uIntensity, n * 0.6);
  }
`;
