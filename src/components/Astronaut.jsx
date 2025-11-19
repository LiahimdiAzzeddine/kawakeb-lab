import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Astronaut(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./astronaut-opt.glb");
  const { actions, mixer } = useAnimations(animations, group);

  const [hovered, setHovered] = useState(false);
  const [busy, setBusy] = useState(false);


  useEffect(() => {
    if (actions["Float-Legacy Slot"]) {
      actions["Float-Legacy Slot"].reset().fadeIn(0.5).play();
    }
  }, [actions]);

  // ▶ Changement de couleur du casque au hover
  useEffect(() => {
    // Parcourir TOUS les matériaux pour trouver le casque
    Object.values(materials).forEach((material) => {
      // Vérifier si le matériau supporte l'émission
      if (material.emissive) {
        material.emissive.setHex(0x3a7fff);
        material.emissiveIntensity = hovered ? 0.6 : 0.08;
        material.needsUpdate = true;
      }
    });

    // Alternative: Parcourir tous les meshes pour modifier leur matériau
    group.current?.traverse((child) => {
      if (child.isMesh && child.material) {
        if (child.material.emissive) {
          child.material.emissive.setHex(0x3a7fff);
          child.material.emissiveIntensity = hovered ? 0.6 : 0.08;
          child.material.needsUpdate = true;
        }
      }
    });
  }, [hovered, materials]);

  // ▶ Hover animation
  useEffect(() => {
    if (!actions) return;

    const floating = actions["Float-Legacy Slot"];
    const idle = actions["Idle"];

    if (!idle) return;

    if (hovered && !busy) {
      floating?.fadeOut(0.2);
      idle.reset().fadeIn(0.3).play();
    } else if (!busy) {
      idle?.fadeOut(0.2);
      floating?.reset().fadeIn(0.5).play();
    }
  }, [hovered, actions, busy]);

  // ▶ Click animation: SayHay
  const handleClick = () => {
    if (busy) return;

    const sayHay = actions["SayHay"];
    const floating = actions["Float-Legacy Slot"];
    if (!sayHay) return;

    setBusy(true);

    floating?.fadeOut(0.3);
    sayHay.reset().fadeIn(0.2).play();
    sayHay.loop = 2200; // LoopOnce dans Three.js
    sayHay.clampWhenFinished = true;

    const onFinished = (e) => {
      if (e.action === sayHay) {
        mixer.removeEventListener("finished", onFinished);
        sayHay.fadeOut(0.3);
        floating?.reset().fadeIn(0.5).play();
        setBusy(false);
      }
    };

    mixer.addEventListener("finished", onFinished);
  };

  // Debug: afficher tous les noms de matériaux
  useEffect(() => {
    console.log("Matériaux disponibles:", Object.keys(materials));
  }, [materials]);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={0.02}
      position={[0, -1.5, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={handleClick}
      rotation={[0, -Math.PI / 1.5, 0]}
    >
      <group name="Scene">
        <group name="SK_M_MED_Astronaut_01ao">
          <primitive object={nodes.root} />
        </group>
        <skinnedMesh
          name="SK_M_MED_Astronaut_01mo"
          geometry={nodes.SK_M_MED_Astronaut_01mo.geometry}
          material={materials.M_MED_Astronaut}
          skeleton={nodes.SK_M_MED_Astronaut_01mo.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./astronaut-opt.glb");