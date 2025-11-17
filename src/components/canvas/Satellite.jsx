import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Satellite(props) {
  const { nodes, materials } = useGLTF('/satellite-opt.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.metall}
        position={[0.047, 0.028, 0.078]}
        rotation={[-1.575, -0.02, 0.618]}
        scale={[1.071, 0.107, 1.071]}
      />
    </group>
  )
}

useGLTF.preload('/satellite-opt.glb')
