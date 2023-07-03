import React from 'react'
import { useParams } from 'react-router-dom'
import { project } from '../helper/Helper'
import './Details.css'

const Details = () => {
  const { id } = useParams()
  const projects = project[id]
  return (
    <div className='response'>
      <div className="responseItem">
        <img src={projects.image} alt="" />
        <div className="projectLink">
          <h1>{projects.name}</h1>
          <a href={projects.link}><h1>Live Demo</h1></a>
        </div>
        <p>{projects.develop} using React.js for {projects.thing} and display details {projects.cart} <br />
          Implemented {projects.manage} to manage the application state <br />
          Designed a user-friendly interface using CSS allowing users to search {projects.thing} and display details  <br />
          {projects.details} <br />
          {projects.additional}</p>
      </div> 
    </div>
  )
}

export default Details
