import React from 'react';

const workSteps = [
  {
    number: '01',
    title: 'Understand the Problem',
    text:
      "I start by understanding the goal of the project, the users' needs, and the main tasks the interface or system needs to support."
  },
  {
    number: '02',
    title: 'Structure the Solution',
    text:
      'I organize information, data, and features clearly before focusing on the visual design. My background in databases and backend development helps me think about how the interface connects to the system behind it.'
  },
  {
    number: '03',
    title: 'Build and Refine',
    text:
      'I use my experience with React, JavaScript, PHP, GraphQL, and other technologies to turn ideas into working applications. I focus on writing clear code, testing changes, and improving the design through iteration.'
  },
  {
    number: '04',
    title: 'Learn Through Feedback',
    text:
      'As a teaching assistant and student, I value feedback and clear communication. I use review sessions, code reviews, and user feedback to improve both the technical quality and the user experience.'
  }
];

function HowIWork() {
  return (
    <section id="how-i-work" className="content-section muted-section section-offset">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-9">
            <p className="section-kicker">How I Work</p>
            <h2 className="section-title">A simple process for better interfaces</h2>
            <p className="section-copy mb-0">
              My approach combines software engineering practices with UI design
              principles. I like to understand the problem first, organize the
              structure clearly, then build and improve the solution through
              feedback. Through SEG3125, I am continuing to develop my UI design
              skills while bringing software development experience into the
              process.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {workSteps.map((step) => (
            <div className="col-md-6" key={step.number}>
              <article className="card process-card h-100">
                <div className="card-body">
                  <span className="process-number">{step.number}</span>
                  <h3 className="card-title h5 mt-3">{step.title}</h3>
                  <p className="card-text mb-0">{step.text}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowIWork;
