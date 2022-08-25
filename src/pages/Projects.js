import React from 'react'
import { motion } from 'framer-motion'
import Wrapper from '../assets/wrappers/ProjectsWrapper'
import Card from '../components/Card'
import axios from 'axios'
import DocumentMeta from 'react-document-meta';
import ReactLoading from 'react-loading';
 

const Projects = () => {
  const meta = {
    title: 'Projects',
    description: 'Some of of the things i did',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'react,projects,web apps,abderrahim,webdeveloper'
      }
    }
  };
  const [projects,setProjects]=React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://abderrahim-projects.herokuapp.com/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err, "it has an error"));
  },[]);
  const displayProjects=()=>{
   if (projects.length==0) {
    return <div className='loading'>
      <ReactLoading type='spokes' color='grey' height='100%' width='100%' />
    </div>
   }else{
    return  projects.map(p=>
      <Card img={p.image.data.data} key={p._id} id={p._id} variants={item} title={p.title} /> )

   }
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
    <DocumentMeta {...meta}>
    <Wrapper className='dark:bg-slate-800 dark:text-white'>

     <h1 className='title'>Projects</h1>
     <motion.div className="projects "
         variants={container}
         initial="hidden"
         animate="visible"
     >
   
{displayProjects()}
       
     </motion.div>

    </Wrapper>
    </DocumentMeta>
  )
}

export default Projects