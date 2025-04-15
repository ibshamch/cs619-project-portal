import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const ProjectDetails = () => {
  const [project, setProject] = useState(null);
  const { id } = useParams();
  const whatsappNumber = '03246607443'; // Your WhatsApp number
  const whatsappMessage = `Hi, I'm interested in the "${project?.title}" project. Can you provide more details?`;

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/projects/${id}`);
        setProject(res.data);
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };
    fetchProject();
  }, [id]);

  if (!project) return <div className="loading">Loading project details...</div>;

  return (
    <div className="project-details">
      <Link to="/" className="back-button">
        ← Back to Projects
      </Link>
      
      <div className="project-header">
        <h2>{project.title}</h2>
        <span className={`status-badge ${project.status.toLowerCase()}`}>
          {project.status}
        </span>
      </div>

      <div className="details-section">
        <h3>Project Description</h3>
        <p>{project.description}</p>
      </div>

      <div className="details-section">
        <h3>Development Roadmap</h3>
        <ul className="roadmap">
          {project.roadmap.map((step, index) => (
            <li key={index}>
              <span className="roadmap-marker"></span>
              {step}
            </li>
          ))}
        </ul>
      </div>

      <div className="contact-section">
        <h3>Interested in this project?</h3>
        <p>If you want this as a paid project or need customization, contact us on WhatsApp:</p>
        <a 
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          className="whatsapp-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="whatsapp-icon">📱</span> Contact on WhatsApp
        </a>
        <p className="contact-note">We'll respond within 24 hours</p>
      </div>
    </div>
  );
};

export default ProjectDetails;