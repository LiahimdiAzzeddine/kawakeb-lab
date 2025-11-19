import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from "three";

export const Electroswing = forwardRef(
  ({ wireframe = false, AstronautRef, ...props }, ref) => {
    const { nodes, materials, animations } = useGLTF('/electroswing-opt.glb')
    const { actions } = useAnimations(animations, ref)
    
    const [hovered, setHovered] = useState(false);

    // Lance l'animation Seat
    useEffect(() => {
      if (actions["Seat"]) {
        actions["Seat"].play();
      }
    }, [actions]);

    // Matériau de verre avec effet au hover
    useEffect(() => {
      if (materials["Material.001"]) {
        materials["Material.001"].transparent = true;
        materials["Material.001"].opacity = hovered ? 0.8 : 0.3;
        materials["Material.001"].depthWrite = false;
        materials["Material.001"].side = THREE.DoubleSide;
        
        // Effet de bouclier énergétique au hover
        if (hovered) {
          materials["Material.001"].emissive = new THREE.Color(0x00ffff);
          materials["Material.001"].emissiveIntensity = 0.5;
        } else {
          materials["Material.001"].emissiveIntensity = 0;
        }
        materials["Material.001"].needsUpdate = true;
      }
    }, [hovered, materials]);

    const wireMaterial = new THREE.MeshBasicMaterial({
      color: "#00ffff",
      wireframe: true,
    });

    // Effet hover sur le vaisseau
    useEffect(() => {
      if (!materials.Luminaris_starship_material) return;
      
      if (hovered) {
        materials.Luminaris_starship_material.emissive = new THREE.Color(0x0088ff);
        materials.Luminaris_starship_material.emissiveIntensity = 0.3;
      } else {
        materials.Luminaris_starship_material.emissiveIntensity = 0;
      }
      materials.Luminaris_starship_material.needsUpdate = true;
    }, [hovered, materials]);

    return (
      <group
        ref={ref}
        {...props}
        dispose={null}
        scale={0.002}
        rotation={[0, -Math.PI / 2, 0]}
        position={[6.5, 0.4, -2]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <group name="Scene" rotation={[0.1, -Math.PI / 2, 0]}>
          <group>
            <group name="Luminaris_Ingame" rotation={[-Math.PI / 2, 0, 0]} />
            <group
              name="core_engine_ribs004"
              position={[7.397, 21.716, 4.389]}
              rotation={[0, 0, -0.393]}
              scale={0.1}
            />
            <group
              name="core_engine_ribs005"
              position={[-7.397, 21.716, 4.389]}
              rotation={[0, 0, -0.393]}
              scale={0.1}>
              <group name="Object_11001" position={[0.292, -9.379, 31.932]}>
                <group
                  name="core_engine_ribs005_Luminaris_starship_material_0"
                  position={[-198.22, 199.168, -148.032]}
                  rotation={[-Math.PI / 2, -0.519, 1.181]}
                  scale={13.733}>
                  <mesh
                    name="core_engine_ribs005_Luminaris_starship_material_0_primitive0"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.core_engine_ribs005_Luminaris_starship_material_0_primitive0.geometry
                    }
                    material={wireframe ? wireMaterial : materials.Luminaris_starship_material}
                  />
                  <mesh
                    name="core_engine_ribs005_Luminaris_starship_material_0_primitive1"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.core_engine_ribs005_Luminaris_starship_material_0_primitive1.geometry
                    }
                    material={wireframe ? wireMaterial : materials['Material.001']}
                  />
                </group>
              </group>
            </group>
            <group name="core_engine_ribs003" rotation={[0, 0, -0.073]} />
            <group name="Core_engine" rotation={[0, 0, 0.11]} />
            <group name="upper_engine" rotation={[0, 0, -0.037]} />
            <group name="lower_Rotor" position={[0, 0, -1.53]} rotation={[0, 0, 0.037]} />
            <group>
              <group name="SK_M_MED_Astronaut_01ao" rotation={[0, Math.PI / 2, 0]} position={[0.5, 0, -8]}>
                <primitive object={nodes.root} />
              </group>
              <skinnedMesh
                name="SK_M_MED_Astronaut_01mo"
                geometry={nodes.SK_M_MED_Astronaut_01mo.geometry}
                material={wireframe ? wireMaterial : materials.M_MED_Astronaut}
                skeleton={nodes.SK_M_MED_Astronaut_01mo.skeleton}
              />
            </group>
          </group>
        </group>
      </group>
    )
  });

useGLTF.preload('/electroswing-opt.glb')