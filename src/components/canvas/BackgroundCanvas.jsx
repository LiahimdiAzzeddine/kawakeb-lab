// src/components/BackgroundCanvas.jsx
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, Stars, Trail } from "@react-three/drei";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import AtmosphereMesh from "../AtmosphereMesh";
import EarthMaterial from "../EarthMaterial";

gsap.registerPlugin(ScrollTrigger);

const sunDirection = new THREE.Vector3(-2, 0.5, 1.5);


export function Satellite({ earthRef }) {
  const ref = useRef();
  const radius = 2.08;
  let currentTime = 0;
  const [exploded, setExploded] = useState(false);
  const [scale, setScale] = useState(1);


  useFrame((_, delta) => {
    currentTime += delta*0.3;

    if (ref.current && earthRef.current && !exploded) {
      const earthPos = earthRef.current.position;
      ref.current.position.x = earthPos.x + Math.cos(currentTime) * radius;
      ref.current.position.y = earthPos.y -1.2;
      ref.current.position.z = earthPos.z + Math.sin(currentTime) * radius;
    }

    // Si explosé, augmenter l’échelle puis disparaître
    if (exploded) {
      setScale((s) => s + delta * 5); // accélération de la "croissance"
      ref.current.scale.set(scale, scale, scale);
      if (scale > 3) ref.current.visible = false; // disparaît après explosion
    }
  });

  return (
    <group>
      <Trail
        width={0.3}
        color={0xff9900}
        length={3}
        attenuation={(width) => width}
      >
        <mesh
          ref={ref}
          onClick={() => setExploded(true)}
          scale={[scale, scale, scale]}
        >
          <sphereGeometry args={[0.05, 32, 32]} />
          <meshBasicMaterial color={0xff9900} />
        </mesh>
      </Trail>
    </group>
  );
}



function Earth({ refEarth }) {
  useFrame(() => {
    refEarth.current.rotation.y += 0.001;
  });
  const map = useLoader(THREE.TextureLoader, "./textures/earth-daymap-4k.jpg");

  const axialTilt = (23.4 * Math.PI) / 180;

  return (
    <group rotation-z={axialTilt} position={[0, -2.5, 0]} scale={1.1}>
      <mesh ref={refEarth}>
        <icosahedronGeometry args={[2, 64]} />
        <EarthMaterial sunDirection={sunDirection} />
        {/* <meshStandardMaterial map={map} /> */}
        <AtmosphereMesh />
      </mesh>
    </group>
  );
}



function CameraScrollAnimation({ earthRef }) {
  const { camera } = useThree();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#scroll-sections",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
        pin: false,
      },
    });

    tl.to(camera.position, { x: 0, y: 0.1, z: 5, duration: 0.5 });

    tl.to(
      camera.position,
      { x: -4, y: 0, z: 6, duration: 1 }
    );


    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, [camera]);

  return null;
}


export default function BackgroundCanvas() {
  const { x, y, z } = sunDirection;
  const EarthRef = useRef();


  return (
    <div className="fixed inset-0 w-screen h-screen z-50">
      <Canvas camera={{ position: [0, 0.1, 5], fov: 50 }} gl={{ toneMapping: THREE.NoToneMapping }}>
        <hemisphereLight args={[0xffffff, 0x000000, 3.0]} />
        <directionalLight position={[x, y, z]} />

        <Stars radius={300} depth={60} count={8000} factor={6} fade />
<Earth refEarth={EarthRef} />
<Satellite earthRef={EarthRef} />

        <CameraScrollAnimation
          earthRef={EarthRef}

        />

        {/* <OrbitControls/> */}
      </Canvas>
    </div>
  );
}
