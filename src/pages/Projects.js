import React from 'react'
import { motion } from 'framer-motion'
import Wrapper from '../assets/wrappers/ProjectsWrapper'
import Card from '../components/Card'
import axios from 'axios'


const Projects = () => {
  const [projects,setProjects]=React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://abderrahim-projects.herokuapp.com/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err, "it has an error"));
  });
  const displayProjects=()=>{
    return  projects.map(p=>
        <Card img={p.image.data.data} key={p._id} id={p._id} variants={item} title={p.title} /> )
  
    }
    const container = {
      hidden: { opacity: 1, scale: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.2
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
  return (
    <Wrapper>

     <h1 className='title'>Projects</h1>
     <motion.div className="projects"
         variants={container}
         initial="hidden"
         animate="visible"
     >
   
{displayProjects()}
       
     </motion.div>

    </Wrapper>
  )
}

export default Projects