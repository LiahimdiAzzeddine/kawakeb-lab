import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Astronaut(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./astronaut-opt.glb");
  const { actions, mixer } = useAnimations(animations, group);

  const [hovered, setHovered] = useState(false);
  const [busy, setBusy] = useState(false); // empêche plusieurs clics simultanés

  // ▶ Animation par défaut
  useEffect(() => {
    if (actions["Float-Legacy Slot"]) {
      actions["Float-Legacy Slot"].reset().fadeIn(0.5).play();
    }
  }, [actions]);

  // ▶ Hover animation
  useEffect(() => {
    if (!actions) return;

    const floating = actions["Float-Legacy Slot"];
    const idle = actions["Idle"]; // Assurez-vous que votre GLB contient une animation Idle

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
    if (busy) return; // ignore si animation en cours

    const sayHay = actions["SayHay"];
    const floating = actions["Float-Legacy Slot"];
    if (!sayHay) return;

    setBusy(true);

    floating?.fadeOut(0.3);
    sayHay.reset().fadeIn(0.2).play();
    sayHay.loop = 0;
    sayHay.clampWhenFinished = true;

    const onFinished = () => {
      sayHay.removeEventListener("finished", onFinished);
      sayHay.fadeOut(0.3);
      floating?.reset().fadeIn(0.5).play();
      setBusy(false);
    };

    sayHay.getMixer().addEventListener("finished", onFinished);
  };

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
      rotation={[0,-Math.PI/1.5,0]}
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
