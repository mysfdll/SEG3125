import React from 'react';
import { Link } from 'react-router-dom';

function CaseStudyCard({ project }) {
  const buttonText = project.liveUrl ? 'Visit Website' : 'View Project';

  return (
    <article className="card case-card h-100">
      <div className="case-visual" aria-hidden="true">
        <span>{project.type}</span>
      </div>
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
          <h3 className="card-title h5 mb-0">{project.title}</h3>
          <span className="badge status-badge">{project.status}</span>
        </div>
        <p className="card-text flex-grow-1">{project.description}</p>
        {project.liveUrl ? (
          <a
            className="btn btn-outline-primary mt-3"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Visit ${project.title} website`}
          >
            {buttonText}
          </a>
        ) : (
          <Link
            className="btn btn-outline-primary mt-3"
            to={project.route}
            aria-label={`View ${project.title} project`}
          >
            {buttonText}
          </Link>
        )}
      </div>
    </article>
  );
}

export default CaseStudyCard;
