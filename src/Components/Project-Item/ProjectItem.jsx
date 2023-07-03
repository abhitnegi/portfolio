import React from 'react'
import { Link } from 'react-router-dom';
import './ProjectItem.css'

const ProjectItem = (props) => {
    const { value, id } = props;
  return (
    <div className="project-container">
      <div className='projectItem'>
        <div className="projectList">
          <Link to={`/project-details/${id}`}>
            <div className="projects">
                <img src={value.image} alt="" />
                <h1>{value.name}</h1>
                <h2>{value.skills}</h2>
            </div>
          </Link>
        </div> 
      </div>
    </div> 
  )
}

export default ProjectItem
