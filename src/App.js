import React, { useRef, useEffect, useState, Suspense } from "react";
import { Section } from "./components/section";

import { Canvas , useFrame} from "@react-three/fiber";
import { Html, useGLTF,OrbitControls } from "@react-three/drei";

function Model({ url }) {
  const gltf = useGLTF(url, true);
  
  return <primitive object={gltf.scene} dispose={null} args={[3,3,3]} />;
  
}

const HTMLContent = () => {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.y += 0.01));
  useFrame(() => (ref.current.rotation.x += 0.02));
  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, 0, -300]}>
        <mesh ref={ref}  position={[0, 0, 0]} >
          <Model url='/3D/scene.gltf'/>
        </mesh>

      </group>
    </Section>
  );
};

const Lights = () => {
  return (
    <>
      {/* Ambient Light illuminates lights for all objects */}
      <ambientLight intensity={0.3} />
      {/* Diretion light */}
      <directionalLight position={[10, 10, 5]} intensity={1} />
     
  
    </>
  );
};


export default function App() {


  return (
    <div style={{height:"100vh"}}>
      {/* R3F Canvas */}
      <Canvas
        colormanagement='true'
        camera={{ position: [0, 0,0], fov: 90 }}>
          <Lights/>
          <HTMLContent
            bgColor='#f15946'
            position={250}>
            
          </HTMLContent>
          
      </Canvas>
     
    </div>
  );
}