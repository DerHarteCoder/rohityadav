
import { Suspense, useEffect, useState } from 'react';
import { Canvas} from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
// import {CanvasLoader} from '../Loader.jsx';
// import { HemisphereLight } from 'three';

const Computers = () => {
const computer = useGLTF('./public/desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black'/>
      <pointLight intensity={1} />
      <primitive object={computer.scene} />
    </mesh>
  )
}

export default Computers

