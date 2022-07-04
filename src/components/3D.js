import React, { useRef} from "react";
import { Section } from "./section";
import { Canvas , useFrame} from "@react-three/fiber";
import {  useGLTF , Html} from "@react-three/drei";
import { useTypewriter } from 'react-simple-typewriter'

function Model({ url }) {
  const gltf = useGLTF(url, true);
  
  return <primitive object={gltf.scene} dispose={null} args={[3,3,3]} />;
  
}

const HTMLContent = () => {
    const {text} = useTypewriter({
        words: ['Web Developer','(Frontend)'],
        loop: false
      })
  const ref = useRef();
  useFrame(() => (ref.current.rotation.y += 0.01));
  useFrame(() => (ref.current.rotation.x += 0.02));
  return (
    <Section factor={1.5} offset={1} >
      <group position={[0, 0,-300]}  >
        <mesh ref={ref}  position={[0, 0, 0]} >
          <Model url='/3D/scene.gltf'/>
        </mesh>

        <Html fullscreen >
        <div className='text'>
      <h1 > 
        <span>
      <b className="first">Hi, I am Abderrahim Kadnaoui.</b> Welcome to My Portfolio </span> <br/>{' '}
        <span className="type" >
         {text}
        </span>
        <br/>
       <b className='quote'> Passionate about technology and it’s possibilities.</b>
      </h1>
      
    </div>
        </Html>
      </group>
    </Section>
  );
};

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
    </>
  );
};


export default function Shape() {

  return (
    <div className="shape">
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