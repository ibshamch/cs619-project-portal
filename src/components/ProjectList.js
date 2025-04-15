import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';

const ProjectList = () => {
  const [projects, setProjects] = useState([{
    "projects": [
      {
        "id": 1,
        "title": "Age prediction by Facial Features recognition using Yolo v4",
        "status": "Open",
        "description": "A computer vision project using YOLOv4 for age prediction based on facial features.",
        "roadmap": [
          "Data Collection (1 month)",
          "Model Training (2 weeks)",
          "API Development (1 week)",
          "Testing & Deployment (1 week)"
        ],
        "difficulty": "Hard"
      },
      {
        "id": 2,
        "title": "Android App for Location Based Services",
        "status": "Open",
        "description": "An Android application offering various services based on the user’s current location.",
        "roadmap": [
          "Requirement Analysis (1 week)",
          "Design UI/UX (1 week)",
          "Development (2 weeks)",
          "Testing & Release (1 week)"
        ],
        "difficulty": "Medium"
      },
      {
        "id": 3,
        "title": "Android based Tourist Guide",
        "status": "Open",
        "description": "An app to help tourists explore cities with information and route guidance.",
        "roadmap": [
          "City Data Collection (2 weeks)",
          "App Interface Design (1 week)",
          "Navigation Integration (1 week)",
          "Deployment (1 week)"
        ],
        "difficulty": "Easy"
      },
      {
        "id": 4,
        "title": "Android Car Buy & Sell App",
        "status": "Open",
        "description": "A mobile platform for buying and selling cars online.",
        "roadmap": [
          "Wireframing (1 week)",
          "Database Setup (1 week)",
          "Core Features Dev (2 weeks)",
          "Testing & Deployment (1 week)"
        ],
        "difficulty": "Medium"
      },
      {
        "id": 5,
        "title": "Artificial Intelligence Based Chatbot for University Students",
        "status": "Open",
        "description": "AI chatbot to help university students with FAQs, schedules, and academic support.",
        "roadmap": [
          "Chat Flow Design (1 week)",
          "Model Training (2 weeks)",
          "App Integration (1 week)",
          "Testing & Feedback (1 week)"
        ],
        "difficulty": "Hard"
      }
     
    ]
  }
  ]);


  return (
    <div className="project-list">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;