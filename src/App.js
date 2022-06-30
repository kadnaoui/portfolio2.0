import React, { useRef, useEffect, useState, Suspense } from "react";
import { Section } from "./components/section";

import { Canvas , useFrame} from "@react-three/fiber";
import { Html, useGLTF,OrbitControls } from "@react-three/drei";

function Model({ url }) {
  const gltf = useGLTF(url, true);
  
  return <primitive object={gltf.scene} dispose={null} />;
  
}

const HTMLContent = () => {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.x += 0.01));
  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, 218, 90]}>
        <mesh ref={ref}  position={[0, 35, 0]}>
    
          <Model url='/scene.gltf'/>
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
        camera={{ position: [0, 0, 120], fov: 70 }}>
          <Lights/>
          <HTMLContent
            bgColor='#f15946'
            position={250}>
            
          </HTMLContent>
         
      </Canvas>
     
    </div>
  );
}