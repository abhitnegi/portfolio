import React from 'react'
import './Project.css'
import { project } from '../helper/Helper'
import ProjectItem from '../Project-Item/ProjectItem'

const Project = () => {
  return (
    <div className='project'>
      {project.map((value, id) => {
        return <ProjectItem value={value} id={id}/>
      })}
    </div>
  )
}

export default Project
