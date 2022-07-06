import React from 'react'
import { useParams  } from "react-router-dom";
import Wrapper from '../assets/wrappers/ProjectWrapper';
import axios from 'axios';
import DocumentMeta from 'react-document-meta';

  
const Project = () => {
  
  const [project,setProject]=React.useState({})
  const meta = {
    title: project?project.title:'Project',
    description:project? project.description:' ',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'react,projects,web apps,abderrahim,webdeveloper'
      }
    }
  };
  const {id}=useParams()
  React.useEffect(() => {
    axios
      .get(`https://abderrahim-projects.herokuapp.com/projects/${id}`)
      .then((res) => setProject(res.data))
      .catch((err) => console.log(err, "it has an error"));
  });
  let base64String;
 if(project.image){  base64String = btoa(new Uint8Array(project.image.data.data).reduce(function (data, byte) {
    return data + String.fromCharCode(byte);
}, ''));}
  return (
    <DocumentMeta {...meta}>
    <Wrapper>
        <div className='top'>
            <h1>
{project.title}
            </h1>
<img src={project.image?`data:image/png;base64,${base64String}`:''}/>
        </div>
        <hr/>
        <div className='bottom'>
            <div className='description'>
            <h2>
                Description
            </h2>
            <p>
            {project.description}
            </p>
            </div>
            
            <div className='buttons'>
                <button onClick={()=>window.open(project.link, '_blank')} >
                    visit
                </button>
            </div>
        </div>
    </Wrapper>
    </DocumentMeta>
  )
}

export default Project