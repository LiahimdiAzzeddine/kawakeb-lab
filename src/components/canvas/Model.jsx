import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

export const Model = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("./planet/earth-opt.glb");
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere_Material001_0.geometry}
        material={materials["Material.001"]}
        rotation={[-Math.PI / 2, 0, -0.262]}
      />
    </group>
  );
});

useGLTF.preload("./planet/earth-opt.glb");
