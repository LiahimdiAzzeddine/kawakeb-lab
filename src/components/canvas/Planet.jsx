import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../sub-components/Loader";

const Planet = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.5}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <mesh castShadow receiveShadow scale={3}>
        <icosahedronGeometry args={[1, 4]} />
        <meshStandardMaterial
          color={props.color} 
          metalness={0.3}
          roughness={0.7}
          transparent
          opacity={1}
        />
        <Decal
          position={[0, 0, 1]} // Adjusted for better visibility on the surface
          rotation={[0, 0, 0]} // Adjusted rotation
          scale={[1, 1, 1]} // Adjusted scale
          map={decal}
          depthTest={false}
        />
      </mesh>
    </Float>
  );
};

const PlanetCanvas = ({ icon, color }) => {
  return (
    <Canvas frameloop='demand' dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} /> {/* Allows the user to rotate the view */}
        <Planet imgUrl={icon} color={color} /> {/* Passes the texture and color to the Planet component */}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default PlanetCanvas;
