import React from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function Model(props) {
  const { nodes, materials } = useGLTF("/untitled.glb");

  // lecture du paramètre wireframe envoyé dans <Model wireframe={true} />
  const wireframe =  true;

  // Matériau wireframe (unique)
  const wireMaterial = new THREE.MeshBasicMaterial({
    color: "#00ffff",
    wireframe: true,
  });

  return (
    <group {...props} dispose={null} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["1405+Plane_1_(1)"].geometry}
        material={wireframe ? wireMaterial : materials.Mat}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
    </group>
  );
}

useGLTF.preload("/untitled.glb");
