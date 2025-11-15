import React, { forwardRef, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'


  
  export const Electroswing = forwardRef(({ wireframe = false, ...props }, ref) => {

  const { nodes, materials, animations } = useGLTF('/electroswing.glb')

  console.log("🚀 ~ animations:", animations)
  const { actions } = useAnimations(animations, ref)
  if (actions['Seat']) {
  actions['Seat'].play()
}

  if (materials["Material.001"]) {
    materials["Material.001"].transparent = true
    materials["Material.001"].opacity = 0.3   // entre 0 et 1
    materials["Material.001"].depthWrite = false // optionnel : donne un effet "glass"
    materials["Material.001"].side = THREE.DoubleSide // optionnel : visible recto/verso

  }
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: '#00ffff',
      wireframe: true,
    })
  return (
    <group ref={ref} {...props} dispose={null} scale={0.002}  rotation={[0, -Math.PI / 2, 0 ]}
      position={[2.5, 0.4, -2]}>
        
      <group name="Scene" rotation={[0.1, -Math.PI / 2, 0]}>
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="_8">
                <group name="SpaceShip_7">
                  <group name="Body_3">
                    <group name="body_0" position={[0, 0.625, 0]} />
                    <group name="wingtip_1_1" position={[-0.125, 0.563, -1.188]} />
                    <group name="wingtip_2_2" position={[-0.125, 0.563, 1.188]} />
                  </group>
                  <group name="Engine_6">
                    <group name="engine_1_4" position={[-0.25, 0.594, -0.938]} />
                    <group name="engine_2_5" position={[-0.25, 0.594, 0.938]} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model001" rotation={[-Math.PI / 2, 0, 0]} scale={16.828} />
        <group name="9d06199c2def4d1b95bc7e37e8f30cf1fbx" scale={16.828} />
        <group name="Object_2" scale={16.828} />
        <group name="RootNode" scale={16.828} />
        <group name="Luminaris_Ingame" rotation={[-Math.PI / 2, 0, 0]} />
        <group
          name="Object_5"
          position={[0, -20.825, 132.832]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={16.828}
        />
        <group
          name="core_engine_ribs004"
          position={[7.397, 21.716, 4.389]}
          rotation={[0, 0, -0.393]}
          scale={0.1}>
          <group name="Object_8" position={[0.292, -9.379, 31.932]} />
        </group>
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
                name="core_engine_ribs005_Luminaris_starship_material_0_1"
                castShadow
                receiveShadow
                geometry={nodes.core_engine_ribs005_Luminaris_starship_material_0_1.geometry}
                material={wireframe ? wireMaterial :materials.Luminaris_starship_material}
                
              />
              <mesh
                name="core_engine_ribs005_Luminaris_starship_material_0_2"
                castShadow
                receiveShadow
                geometry={nodes.core_engine_ribs005_Luminaris_starship_material_0_2.geometry}
                material={wireframe ? wireMaterial :materials['Material.001']}
              />
            </group>
          </group>
        </group>
        <group name="core_engine_ribs003" />
        <group name="Core_engine">
          <group name="Object_16001" position={[0, -7.894, 31.023]} />
        </group>
        <group name="upper_engine">
          <group name="Object_19" position={[0, -7.894, -1.238]} />
        </group>
        <group name="lower_Rotor" position={[0, 0, -1.53]}>
          <group name="Object_22" position={[0, -7.894, 15.487]} />
        </group>
        <group name="SK_M_MED_Astronaut_01ao">
          <skinnedMesh
            name="SK_M_MED_Astronaut_01mo"
            geometry={nodes.SK_M_MED_Astronaut_01mo.geometry}
            material={wireframe ? wireMaterial :materials.M_MED_Astronaut}
            skeleton={nodes.SK_M_MED_Astronaut_01mo.skeleton}
          />
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
<primitive object={nodes.root_1} />


        </group>
      </group>
    </group>
  )
});

useGLTF.preload('/electroswing.glb')
