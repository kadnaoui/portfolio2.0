import React from 'react'
import { useNavigate  } from "react-router-dom";
import { motion } from "framer-motion";


const Card = ({img,variants,title,id}) => {
  const base64String = btoa(new Uint8Array(img).reduce(function (data, byte) {
    return data + String.fromCharCode(byte);
}, ''));
  const navigate=useNavigate()
    const displayFront=()=>{
       return <>
        <img src={`data:image/png;base64,${base64String}`}/>
    <div className='hover'>
      <h1>{title}</h1>
      <p>(Click for details)</p>
      </div>
    
    </>
    }
   
  return (

    <motion.div
    className='project'
    variants={variants}
    onClick={()=>navigate(`${id}`)}
    whileHover={{ scale: 1.2,
    borderRadius: "10%" }}
  whileTap={{
    scale: 0.8,
    borderRadius: "10%"
  }}>
    {displayFront()}
  </motion.div>
  )
}

export default Card
