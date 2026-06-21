import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import projects from '../data/projects.js';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import HowIWork from '../components/HowIWork.jsx';
import CaseStudyCard from '../components/CaseStudyCard.jsx';
import Contact from '../components/Contact.jsx';

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const timer = window.setTimeout(() => {
        document.getElementById(location.state.scrollTo)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);

      return () => window.clearTimeout(timer);
    }
  }, [location.state]);

  return (
    <>
      <Hero />
      <About />
      <HowIWork />

      <section id="case-studies" className="content-section section-offset">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <p className="section-kicker">Case Studies</p>
              <h2 className="section-title">Semester project collection</h2>
            </div>
          </div>

          <div className="row g-4">
            {projects.map((project) => (
              <div className="col-md-6 col-xl-3" key={project.id}>
                <CaseStudyCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}

export default Home;
