import React from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function Astronaut(props) {
  const { nodes, materials } = useGLTF('/astronaut-opt.glb')

  const wireframe = props.wireframe === true

  const wireMaterial = new THREE.MeshBasicMaterial({
    color: '#00ffff',
    wireframe: true,
  })

  return (
    <group {...props} dispose={null} scale={0.5} position={[0,-1,0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={wireframe ? wireMaterial : materials.Astronaut_mat}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/astronaut-opt.glb')
