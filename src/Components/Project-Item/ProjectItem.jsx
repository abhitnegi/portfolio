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
                <div className="holder">
                  <h1>{value.name}</h1>
                  <h2>{value.skills}</h2>
                  <b>Click to view details.....</b>
                </div>
            </div>
          </Link>
        </div> 
      </div>
    </div> 
  )
}

export default ProjectItem
