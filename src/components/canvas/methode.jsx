import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from "three";
export const Electroswing = forwardRef(
  ({ wireframe = false, AstronautRef, ...props }, ref) => {
  const { nodes, materials, animations } = useGLTF('/electroswing-opt.glb')
  const { actions } = useAnimations(animations, group)
  // Lance l'animation Seat uniquement quand animations est prêt
    // useEffect(() => {
    //   if (actions["Seat"]) {
    //     actions["Seat"].play();
    //   }
    // }, [actions]);
        if (materials["Material.001"]) {
          materials["Material.001"].transparent = true;
          materials["Material.001"].opacity = 0.3; // entre 0 et 1
          materials["Material.001"].depthWrite = false; // optionnel : donne un effet "glass"
          materials["Material.001"].side = THREE.DoubleSide; // optionnel : visible recto/verso
        }
        const wireMaterial = new THREE.MeshBasicMaterial({
          color: "#00ffff",
          wireframe: true,
        });
  return (
   <group
        ref={ref}
        {...props}
        dispose={null}
        scale={0.002}
        rotation={[0, -Math.PI / 2, 0]}
        position={[6.5, 0.4, -2]}
      >
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
                material={wireframe ? wireMaterial :materials.Luminaris_starship_material}
              />
              <mesh
                name="core_engine_ribs005_Luminaris_starship_material_0_primitive1"
                castShadow
                receiveShadow
                geometry={
                  nodes.core_engine_ribs005_Luminaris_starship_material_0_primitive1.geometry
                }
                material={wireframe ? wireMaterial :materials['Material.001']}
              />
            </group>
          </group>
        </group>
        <group name="core_engine_ribs003" rotation={[0, 0, -0.073]} />
        <group name="Core_engine" rotation={[0, 0, 0.11]} />
        <group name="upper_engine" rotation={[0, 0, -0.037]} />
        <group name="lower_Rotor" position={[0, 0, -1.53]} rotation={[0, 0, 0.037]} />
        <group name="SK_M_MED_Astronaut_01ao">
          <primitive object={nodes.root} />
           {/* HELMET FIX */}
            {/* <primitive
  object={nodes.root_1}
  ref={(helmet) => {
    if (!helmet) return

    helmet.traverse((child) => {
      if (child.isMesh) {
        // Applique wireMaterial quand wireframe = true
        child.material = wireframe ? wireMaterial : child.material
      }
    })
  }}
/> */}
        </group>
        <skinnedMesh
          name="SK_M_MED_Astronaut_01mo"
          geometry={nodes.SK_M_MED_Astronaut_01mo.geometry}
          material={wireframe ? wireMaterial :materials.M_MED_Astronaut}
          skeleton={nodes.SK_M_MED_Astronaut_01mo.skeleton}
        />
      </group>
    </group>
  )
});

useGLTF.preload('/electroswing-opt.glb')