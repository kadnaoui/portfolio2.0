import React from 'react'
import Shape from '../components/3D'
import Wrapper from '../assets/wrappers/HomeWrapper'
import { useTypewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

const Index = () => {
  const {text} = useTypewriter({
    words: ['Web Developer','(Frontend)'],
    loop: false
  })
  return (

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
  )
}

export default Index