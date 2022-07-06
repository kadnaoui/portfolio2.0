import React from 'react'
import Shape from '../components/3D'
import Wrapper from '../assets/wrappers/HomeWrapper'
import { useTypewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import DocumentMeta from 'react-document-meta';

const Index = () => {
  const meta = {
    title: 'Abderrahim',
    description: "Abderrahim Kadnaoui's Portfolio Website",
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'react,Web,abderrahim,webdeveloper, frontend'
      }
    }
  };
  const {text} = useTypewriter({
    words: ['Web Developer','(Frontend)'],
    loop: false
  })
  return (
    <DocumentMeta {...meta}>
    <motion.div
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x:window.innerWidth,transition:{duration:0.4}}}
>
    <Wrapper>


        <Shape/>
        <div className='txt'>
        <h1 > 
        <span>
      <b className="intro">Hi, I am Abderrahim Kadnaoui,</b><br/> Welcome to My Portfolio </span> <br/>{' '}
        <span className="typing" >
         {text}
        </span>
        <br/>
       <b className='qt'> Passionate about technology and it’s possibilities.</b>
      </h1>
        </div>

    </Wrapper>
    </motion.div>
    </DocumentMeta>
  )
}

export default Index