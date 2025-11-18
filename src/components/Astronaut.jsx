import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Astronaut(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./astronaut-opt.glb')
  const { actions } = useAnimations(animations, group)
   console.log("🚀 ~ Astronaut ~ actions:", actions)
   useEffect(() => {
      if (actions["Float-Legacy Slot"]) {
        actions["Float-Legacy Slot"].play();
      }
    }, [actions]);
  return (
    <group ref={group} {...props} dispose={null} scale={0.02} position={[0,-1.5,0]}>
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
  )
}

useGLTF.preload('./astronaut-opt.glb')
