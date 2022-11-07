import React from 'react'
import Projectitem from './Projectitem'
import '../styles/Project.css'
import '../helpers/ProjectList'

import { ProjectList } from '../helpers/ProjectList'

function projects() {
  return (
    <div className='projects'>

    <h1>My Projects</h1>
    <div className='projectList'>
      {ProjectList.map((project,idx)=>{
        return <Projectitem id = {idx} name={project.name} image={project.image}/>
      })}
     </div>
    </div>
  )
}

export default projects