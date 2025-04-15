import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
    <div className='status-diff'>

      <span className={`status ${project.status.toLowerCase()}`}>
        {project.status}

          </span>

          <span className={`status ${project.status.toLowerCase()}`}>
        
      {project.difficulty}
          </span>
    </div>
      <Link to={`/project/${project.id}`} className="view-details">
        View Details
      </Link>
    </div>
  );
};

export default ProjectCard;