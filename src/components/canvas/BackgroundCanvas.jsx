// src/components/BackgroundCanvas.jsx
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, Stars, Trail } from "@react-three/drei";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import AtmosphereMesh from "../AtmosphereMesh";
import EarthMaterial from "../EarthMaterial";
import { Spaceship } from "../Spaceship";
import { Model } from "../WireframeEdges";
import { Astronaut } from "../Astronaut";

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



function CameraScrollAnimation({ earthRef,shipRefo }) {
  const { camera } = useThree();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#scroll-sections",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
        pin: false,
        markers:true
      },
    });

    // tl.to(camera.position, { y: 0.1, z: 5, duration: 0.3, ease: "power1.inOut" });
    tl.to(shipRefo.current.position,{x:0,z:0,duration:0.5, ease: "power1.inOut"},'<')
    tl.to(shipRefo.current.rotation, { y: 0,x: Math.PI/2, duration: 1, ease: "power1.inOut" },'<');
    tl.to(camera.position,{ y: -0.8, duration:1, ease: "power1.inOut" },'<');
  tl.to(earthRef.current.position,{  z:-2, duration:1, ease: "power1.inOut" },'<');
  
 tl.to(shipRefo.current.position, { y:-1.5, duration: 2, ease: "power1.inOut" },'<0.1');
 //apartir d ici le movement est n'est pas naturell il faut faire une solution
       tl.to(shipRefo.current.position, { x: 2, duration:1.5, ease: "power1.inOut" });
       tl.to(earthRef.current.position,{ y:6,x:2, duration:1.5, ease: "power1.inOut" },'<');
    
 tl.to(shipRefo.current.rotation, {y:-Math.PI/2,x:0, duration: 2, ease: "power1.inOut" });
 tl.to(shipRefo.current.position, { x:0, duration:1, ease: "power1.inOut" },'<');
  tl.to(shipRefo.current.rotation, {y:Math.PI/2, duration: 2, ease: "power1.inOut" });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, [camera]);

  return null;
}
function ScissorEffect({ shipRefo }) {
  const { gl, size } = useThree();
  
  useEffect(() => {
    const triggerSection = document.querySelector("#scroll-sections section:last-child");

    const updateScissor = () => {
      const rect = triggerSection.getBoundingClientRect();
      gl.setScissor(
        0,
        rect.top,
        size.width,
        rect.height
      );
      gl.setScissorTest(true);
      gl.setViewport(0, 0, size.width, size.height);
    };

    const onScroll = () => {
      updateScissor();
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [gl, size, shipRefo]);

  return null;
}

export default function BackgroundCanvas() {
  const { x, y, z } = sunDirection;
  const EarthRef = useRef();
  const shipRefo=useRef();

  return (
    <div className="fixed inset-0 w-screen h-screen z-50">
      <Canvas camera={{ position: [0, 0.1, 5], fov: 50 }} gl={{ toneMapping: THREE.NoToneMapping }}>
        <hemisphereLight args={[0xffffff, 0x000000, 3.0]} />
        <directionalLight position={[x, y, z]} />
        {/* <Astronaut/> */}
        <Model/>

        <Stars radius={300} depth={60} count={8000} factor={6} fade />
        <Earth refEarth={EarthRef} />
        
        <Satellite earthRef={EarthRef} />
        <Spaceship ref={shipRefo} />
        <CameraScrollAnimation
          earthRef={EarthRef}
shipRefo={shipRefo}
        />


        {/* <OrbitControls/> */}
      </Canvas>
    </div>
  );
}
