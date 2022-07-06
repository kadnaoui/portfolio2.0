import React from 'react';
import Wrapper from '../assets/wrappers/AboutWrapper';
import Image from '../assets/mecv.png'
import { motion } from 'framer-motion';
import CV from '../assets/MyCv.pdf'
import DocumentMeta from 'react-document-meta'


const About = () => {
  const meta = {
    title: 'About',
    description: 'Some informations about me.',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'react,portfolio,about'
      }
    }
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration:0.4,
        delayChildren: 0.8,
        staggerChildren: 0.4
      }
    }
  };
  return (
    <DocumentMeta {...meta}>
    <motion.div
    variants={container}
    initial="hidden"
    animate="visible"
    className='dark:bg-slate-800 dark:text-white'
    exit={{x:window.innerWidth,transition:{duration:0.4}}}
>
    <Wrapper>
        <div className="left ">
<h1>About Me</h1>
<p>Hi. My name is Abderrahim Kadnaoui, I’m from Algeria and I have a Bachelor degree in Computer Science.<br/>
I have started learning about web development in 2020 since then I gained experience in developing UserInterfaces and still looking forward to learn more and grow in this field.<br/>
As I am a dedicated individual who is intrigued and eager to constantly provide my best effort to whatever task is assigned to me. If there's 
something I don't know, I'll figure out how to learn it.
</p>
<div className="tools">
  <h2>Tools and technologies that I worked with</h2>
<p>Html, Css, JavaScript, Reactjs, Git, NPM, TDD, StyledComponents, Framer motion,Rest API, SQL and Scrum.</p>
</div>
<div className="tools">
  <h2>Tools and technologies that I am currently learning</h2>
<p>NextJs, Express, MongoDb, Firebase, Jest, TDD.</p>
</div>
<button onClick={()=>window.open(CV, '_blank')}>View CV</button>    
        </div>
        <motion.div className="right"
 variants={item}
 transition={{
     type: "spring",
     stiffness: 260,
     damping: 20,
     default: { duration: 0.2 }
   }
   
 }>
        <img src={Image} />
        </motion.div>


    </Wrapper>
    </motion.div>
    </DocumentMeta>
  )
}

export default About