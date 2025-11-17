import * as THREE from "three";
import React from "react";
import { useLoader } from "@react-three/fiber";

const defaultSunDirection = new THREE.Vector3(-2, 0.5, 1.5).normalize();

function getQonoSMat(sunDirection = defaultSunDirection) {
  const groundMap = useLoader(
    THREE.TextureLoader, 
    "./textures/QonoS_Ground_Diff.png"
  );
  const cloudMap = useLoader(
    THREE.TextureLoader,
    "./textures/QonoS_Cloud_Diffuse.png"
  );

  const uniforms = {
    groundTexture: { value: groundMap },
    cloudsTexture: { value: cloudMap },
    sunDirection: { value: sunDirection },
  };

  const vs = `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * viewMatrix * modelPosition;

      vUv = uv;
      vNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
      vPosition = modelPosition.xyz;
    }
  `;

 const fs = `
  uniform sampler2D groundTexture;
  uniform sampler2D cloudsTexture;
  uniform vec3 sunDirection;

  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    vec3 normal = normalize(vNormal);

    // Couleur du sol
    vec3 color = texture2D(groundTexture, vUv).rgb;

    // Orientation du soleil pour un léger éclairage
    float light = dot(normal, sunDirection);
    light = clamp(light, 0.0, 1.0);
    color *= 0.5 + 0.5 * light;

    // Nuages
    vec3 cloudRGB = texture2D(cloudsTexture, vUv).rgb;
    float cloudMask = dot(cloudRGB, vec3(0.333)); // luminosité moyenne comme masque
    cloudMask = smoothstep(0.3, 0.7, cloudMask);   // ajuster l’intensité
    color = mix(color, cloudRGB, cloudMask * 0.7); // mélange partiel

    gl_FragColor = vec4(color, 1.0);
  }
`;

  const material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: vs,
    fragmentShader: fs,
    transparent: false,
  });

  return material;
}

function QonoSMaterial({ sunDirection }) {
  const material = React.useMemo(() => getQonoSMat(sunDirection), []);
  return <primitive object={material} />;
}

export default QonoSMaterial;
