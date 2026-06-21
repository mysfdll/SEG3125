import React from 'react';

function Hero() {
  const handleScroll = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section id="home" className="hero-section section-offset">
      <div className="container">
        <div className="row align-items-center g-5 min-vh-75">
          <div className="col-lg-7">
            <h1 className="hero-title">Hi, I&apos;m Yassine</h1>
            <p className="hero-subtitle mt-4">
              Computer Engineering student interested in UI design, full-stack
              development, and building clear user experiences.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 mt-5">
              <button
                className="btn btn-primary btn-lg"
                type="button"
                onClick={() => handleScroll('case-studies')}
              >
                View Case Studies
              </button>
              <button
                className="btn btn-outline-light btn-lg"
                type="button"
                onClick={() => handleScroll('contact')}
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hero-portrait-frame">
              <img
                className="hero-portrait"
                src="/images/profile-photo.jpeg"
                alt="Portrait of Mohamed Yassine Fadil"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
