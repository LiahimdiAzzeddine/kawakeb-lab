import { useGLTF } from '@react-three/drei'
import React, { forwardRef } from "react";
import * as THREE from "three";

export const Spaceship = forwardRef(({ wireframe = false, ...props }, ref) => {
  const { nodes, materials } = useGLTF('./planet/spaceship-opt.glb');

  // Liste des meshes du modèle
  const meshes = [
    { geo: nodes.Spaceship_coolest_Orange_500k_Orange_0.geometry, mat: materials.Orange },
    { geo: nodes.Spaceship_coolest_Orange_500k_Panels_white1_0.geometry, mat: materials.Panels_white1 },
    { geo: nodes.Spaceship_coolest_Orange_500k_Panels_white2_0.geometry, mat: materials.Panels_white2 },
    { geo: nodes.Spaceship_coolest_Orange_500k_Panels_white3_0.geometry, mat: materials.Panels_white3 },
    { geo: nodes.Spaceship_coolest_Orange_500k_Glass001_0.geometry, mat: materials["Glass.001"] },
    { geo: nodes.Spaceship_coolest_Orange_500k_Emissive_white_0.geometry, mat: materials.Emissive_white },
    { geo: nodes.Spaceship_coolest_Orange_500k_Emissive_red_0.geometry, mat: materials.Emissive_red },
    { geo: nodes.Spaceship_coolest_Orange_500k_Grated_fence_0.geometry, mat: materials.Grated_fence },
  ];
  const wireMaterial = new THREE.MeshBasicMaterial({
    color: '#00ffff',
    wireframe: true,
  })
  return (
    <group
      ref={ref}
      {...props}
      rotation={[0, -Math.PI / 2, 0]}
      position={[2.5, 0.2, -2]}
    >
      {meshes.map((m, index) => (
        <group key={index} >
          {/* Mesh normal */}
          <mesh
            castShadow
            receiveShadow
            geometry={m.geo}
            material={wireframe ? wireMaterial : m.mat}
            scale={0.01}
          />

        
        </group>
      ))}
    </group>
  );
});

useGLTF.preload('./planet/spaceship-opt.glb');
