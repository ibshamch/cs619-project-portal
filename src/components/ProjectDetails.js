import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectDetails = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Age prediction by Facial Features recognition using Yolo v4",
      status: "Open",
      description: "A computer vision project using YOLOv4 for age prediction based on facial features.",
      roadmap: [
        "Data Collection (1 month)",
        "Model Training (2 weeks)",
        "API Development (1 week)",
        "Testing & Deployment (1 week)"
      ],
      difficulty: "Hard"
    },
    {
      id: 2,
      title: "Android App for Location Based Services",
      status: "Open",
      description: "An Android application offering various services based on the user’s current location.",
      roadmap: [
        "Requirement Analysis (1 week)",
        "Design UI/UX (1 week)",
        "Development (2 weeks)",
        "Testing & Release (1 week)"
      ],
      difficulty: "Medium"
    },
    {
      id: 3,
      title: "Android based Tourist Guide",
      status: "Open",
      description: "An app to help tourists explore cities with information and route guidance.",
      roadmap: [
        "City Data Collection (2 weeks)",
        "App Interface Design (1 week)",
        "Navigation Integration (1 week)",
        "Deployment (1 week)"
      ],
      difficulty: "Easy"
    },
    {
      id: 4,
      title: "Android Car Buy & Sell App",
      status: "Open",
      description: "A mobile platform for buying and selling cars online.",
      roadmap: [
        "Wireframing (1 week)",
        "Database Setup (1 week)",
        "Core Features Dev (2 weeks)",
        "Testing & Deployment (1 week)"
      ],
      difficulty: "Medium"
    },
    {
      id: 5,
      title: "Artificial Intelligence Based Chatbot for University Students",
      status: "Open",
      description: "AI chatbot to help university students with FAQs, schedules, and academic support.",
      roadmap: [
        "Chat Flow Design (1 week)",
        "Model Training (2 weeks)",
        "App Integration (1 week)",
        "Testing & Feedback (1 week)"
      ],
      difficulty: "Hard"
    }
  ]);

  const { id } = useParams();
  const projectId = parseInt(id, 10);
  const project = projects.find(p => p.id === projectId);

  const whatsappNumber = '03246607443';
  const whatsappMessage = project
    ? `Hi, I'm interested in the "${project.title}" project. Can you provide more details?`
    : '';

  if (!project) return <div className="loading">Project not found.</div>;

  return (
    <div className="project-details">
      <Link to="/" className="back-button">
        ← Back to Projects
      </Link>

      <div className="project-header">
        <h2>{project.title}</h2>
        <span className={`status-badge ${project.status}`}>
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
