import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectList from './components/ProjectList'; // Changed from ProjectCard
import ProjectDetails from './components/ProjectDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1>CS619 Projects Portal</h1>
          <h3>For Paid Projects : 0324-6607443</h3>
        </header>
        <Routes>
          <Route path="/" element={<ProjectList />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;