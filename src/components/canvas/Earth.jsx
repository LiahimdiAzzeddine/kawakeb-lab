import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Lightformer,
  OrbitControls,
  Preload,
} from "@react-three/drei";

import CanvasLoader from "../sub-components/Loader";
import Astronaut from "../Astronaut";

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* === Controls === */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        {/* === Ambient Light === */}
        <ambientLight intensity={0.3} />

        {/* === Key Light (face du modèle) === */}
        <directionalLight
          castShadow
          intensity={1.2}
          position={[5, 5, 5]}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        {/* === Rim Light (halo lumineux arrière) === */}
        <directionalLight
          intensity={1}
          position={[-5, 3, -3]}
          color="#99bbff"
        />

        {/* === Fill Light douce === */}
        <pointLight intensity={0.7} position={[0, 2, 4]} />

        {/* === Environment HDRI === */}
  <Environment files="./blue_photo_studio_1k.hdr" resolution={512} >
          <group rotation={[0, 0, 1]}>
            <Lightformer form="circle" intensity={10} position={[0, 10, -10]} scale={20} onUpdate={(self) => self.lookAt(0, 0, 0)} />
            <Lightformer intensity={0.1} onUpdate={(self) => self.lookAt(0, 0, 0)} position={[-5, 1, -1]} rotation-y={Math.PI / 2} scale={[50, 10, 1]} />
            <Lightformer intensity={0.1} onUpdate={(self) => self.lookAt(0, 0, 0)} position={[10, 1, 0]} rotation-y={-Math.PI / 2} scale={[50, 10, 1]} />
            <Lightformer color="white" intensity={0.2} onUpdate={(self) => self.lookAt(0, 0, 0)} position={[0, 1, 0]} scale={[10, 100, 1]} />
          </group>
        </Environment>


        {/* === Your model === */}
        <Astronaut />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
