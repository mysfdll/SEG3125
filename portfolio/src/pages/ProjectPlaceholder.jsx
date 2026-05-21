import React from 'react';
import { Link, useParams } from 'react-router-dom';
import projects from '../data/projects.js';

function ProjectPlaceholder() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <section className="placeholder-page">
        <div className="container">
          <div className="placeholder-panel">
            <p className="section-kicker">Project Not Found</p>
            <h1 className="section-title">This project page does not exist.</h1>
            <Link className="btn btn-primary mt-3" to="/">
              Return to Homepage
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="placeholder-page">
      <div className="container">
        <div className="placeholder-panel">
          <p className="section-kicker">{project.type}</p>
          <h1 className="section-title">{project.title}</h1>
          <span className="badge status-badge mb-4">{project.status}</span>
          <p className="section-copy">{project.description}</p>
          <Link className="btn btn-primary mt-3" to="/">
            Return to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectPlaceholder;
