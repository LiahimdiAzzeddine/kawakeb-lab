// src/components/BackgroundCanvas.jsx
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Environment, Lightformer, OrbitControls, Sky, Stars, Trail } from "@react-three/drei";
import React, { useRef, useEffect, useState, Suspense } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import AtmosphereMesh from "../AtmosphereMesh";
import EarthMaterial from "../EarthMaterial";
import { Spaceship } from "../Spaceship";
import {
  CubeTextureLoader,
} from "three";
import QonoSMaterial from "./QonoSMaterial";
import CanvasLoader from "../sub-components/Loader";
import { Electroswing } from "../Electroswing";

gsap.registerPlugin(ScrollTrigger);

const sunDirection = new THREE.Vector3(-4, 0.5, 1.5);


export function Satellite({ earthRef }) {
  const ref = useRef();
  const radius = 2.08;
  let currentTime = 0;
  const [exploded, setExploded] = useState(false);
  const [scale, setScale] = useState(1);


  useFrame((_, delta) => {
    currentTime += delta * 0.3;

    if (ref.current && earthRef.current && !exploded) {
      const earthPos = earthRef.current.position;
      ref.current.position.x = earthPos.x + Math.cos(currentTime) * radius;
      ref.current.position.y = earthPos.y - 1.2;
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

  const axialTilt = (23.4 * Math.PI) / 180;

  return (
    <group rotation-z={axialTilt} position={[0, -2.5, 0]} scale={1.1}>
      <mesh ref={refEarth}>
        <icosahedronGeometry args={[2, 64]} />
        <EarthMaterial sunDirection={sunDirection} />
        <AtmosphereMesh />
      </mesh>
    </group>
  );
}
function Qono({ planetRef, position }) {
  useFrame(() => {
    planetRef.current.rotation.y += 0.0009;
  });
  const axialTilt = (23.4 * Math.PI) / 180;

  return (
    <group rotation-z={axialTilt} position={position} scale={1.1}>
      <mesh ref={planetRef}>
        <icosahedronGeometry args={[2, 64]} />
        <QonoSMaterial sunDirection={sunDirection} />

      </mesh>
    </group>
  );
}
function Planet({ texturePath, size = 1, position = [0, 0, 0], rotationSpeed = 0.0005, planetRef }) {
  const ref = planetRef || useRef();
  const map = useLoader(THREE.TextureLoader, texturePath);
  useFrame(() => {
    ref.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 64, 64]} />
      <meshStandardMaterial map={map} />
    </mesh>
  );
}


function CameraScrollAnimation({ earthRef, shipRefo, setWireframe, astronaut }) { 
 
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

    // -------------------------------------------------------
    // 🔒 1) TES 8 PREMIÈRES ANIMATIONS — INCHANGÉES
    // -------------------------------------------------------
    tl.to(shipRefo?.current?.position, { x: 0, duration: 0.7, ease: "power1.inOut" })
    tl.to(shipRefo?.current?.position, { z: 2.2, duration: 0.7, ease: "power1.inOut" }, '<0.1')
    tl.to(shipRefo?.current?.rotation, { y: 0, x: Math.PI / 2, duration: 0.7, ease: "power1.inOut" }, '<0.1');
    tl.to(camera, { fov:65, duration: 1.5, ease: "power1.inOut", onUpdate: () => camera.updateProjectionMatrix() }, "<");

    tl.to(shipRefo?.current?.position, { y: -7.5, duration: 0.8, ease: "power1.inOut" }, '<0.2');
    tl.to(camera.position, { y: -7.5, duration: 0.8, ease: "power1.inOut" }, '<');

    tl.to(camera.position, { y: -10, duration: 4, ease: "power1.inOut" });
    tl.to(shipRefo?.current?.position, { y: -10, duration: 4, ease: "power1.inOut" }, '<');

    // -------------------------------------------------------
    // ✨ 2) NOUVELLE VERSION FLUIDE & LOGIQUE — améliorée
    // -------------------------------------------------------

    // Virage doux
    tl.to(shipRefo?.current?.rotation, { 
      y: Math.PI / 10, 
      z:Math.PI/6,
      duration: 0.7, 
      ease: "power2.inOut" 
    }, '<');

    tl.to(shipRefo?.current?.position, { 
      x: 1.8, 
      duration: 0.7, 
      ease: "power2.inOut" 
    }, '<0.1');
     tl.to(shipRefo?.current?.rotation, { 
      z: -Math.PI/3, 
      duration: 0.7, 
      ease: "power2.inOut" 
    }, '<1');
    // Retour smooth
    tl.to(shipRefo?.current?.rotation, { 
      z: Math.PI/3, 
      y: -Math.PI / 4, 
      duration:2, 
      ease: "power2.inOut" 
    },'<0.7');
    tl.to(shipRefo?.current?.position, { 
      x: -1.8, 
      duration: 1, 
      ease: "power2.inOut" 
    });


    
    // Rotation cinématique + descente finale
    tl.to(shipRefo?.current?.rotation, {
      x: Math.PI / 4,
      y: Math.PI / 2,
      z: -Math.PI / 6,
      duration: 2,
      ease: "power2.inOut",
    });

    tl.to(shipRefo?.current?.position, { 
      x: 0.5, 
      y: -11, 
      duration: 2, 
      ease: "power2.inOut" 
    }, '<0.51');

    // Zoom cinématique cam
    tl.to(camera, { 
      fov: 50, 
      duration: 1.8, 
      ease: "power2.inOut", 
      onUpdate: () => camera.updateProjectionMatrix(),
    }, '<');

    // Petit slide final du ship
    tl.to(shipRefo?.current?.position, { 
      x: 4, 
      duration: 3, 
      ease: "power2.inOut" 
    });

    // -------------------------------------------------------
    // Wireframe trigger
    // -------------------------------------------------------
    ScrollTrigger.create({
      trigger: "#section-2",
      start: "top center",
      end: "bottom center",
      onEnter: () => setWireframe(true),
      onLeaveBack: () => setWireframe(false),
      onLeave: () => setWireframe(false),
      onEnterBack: () => setWireframe(true),
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, [shipRefo.current,camera]);

  return null;
}



export default function BackgroundCanvas() {
  const { x, y, z } = sunDirection;
  const EarthRef = useRef();
  const shipRefo = useRef();
  const NeptuneRef = useRef();
  const JupiterRef = useRef();
  const AstronautRef = useRef();

  const [wireframe, setWireframe] = useState(false)

  return (
    <div className="fixed inset-0 w-screen h-screen z-10">
      <Canvas camera={{ position: [0, 0.1, 5], fov: 40 }} gl={{ toneMapping: THREE.NoToneMapping }}>
        {/* <SkyBox/> */}
        <Environment files="./blue_photo_studio_1k.hdr" resolution={512} >
          <group rotation={[0, 0, 1]}>
            <Lightformer form="circle" intensity={10} position={[0, 10, -10]} scale={20} onUpdate={(self) => self.lookAt(0, 0, 0)} />
            <Lightformer intensity={0.1} onUpdate={(self) => self.lookAt(0, 0, 0)} position={[-5, 1, -1]} rotation-y={Math.PI / 2} scale={[50, 10, 1]} />
            <Lightformer intensity={0.1} onUpdate={(self) => self.lookAt(0, 0, 0)} position={[10, 1, 0]} rotation-y={-Math.PI / 2} scale={[50, 10, 1]} />
            <Lightformer color="white" intensity={0.2} onUpdate={(self) => self.lookAt(0, 0, 0)} position={[0, 1, 0]} scale={[10, 100, 1]} />
          </group>
        </Environment>

        <hemisphereLight args={[0xffffff, 0x000000, 3.0]} />
        <directionalLight position={[x, y, z]} />

        <Stars radius={300} depth={60} count={8000} factor={6} fade />
        <Suspense fallback={<CanvasLoader />}>
          <Earth refEarth={EarthRef} />
        </Suspense>
    <Suspense fallback={<CanvasLoader />}>
          <Electroswing ref={shipRefo} AstronautRef={AstronautRef} wireframe={wireframe} />
     </Suspense>
        {/* <Spaceship ref={shipRefo} wireframe={wireframe}/> */}
        {/* <Astronaut/> */}
        <Suspense fallback={<CanvasLoader />}>
          <Qono position={[-14, 3, -25]} planetRef={NeptuneRef} /></Suspense>
        <Suspense fallback={<CanvasLoader />}>
          <Planet
            texturePath="./textures/c0bf2c169a377e96ee80b25245188c65.jpg"
            size={1.8}
            position={[35, -5, -70]}
            rotationSpeed={0.003}
            planetRef={JupiterRef}
          />
        </Suspense>
 <CameraScrollAnimation
          earthRef={EarthRef}
          shipRefo={shipRefo}
          setWireframe={setWireframe}
          astronaut={AstronautRef}
        />

        {/* <Satellite earthRef={EarthRef} /> */}

       


        {/* <OrbitControls/> */}
      </Canvas>
    </div>
  );
}
