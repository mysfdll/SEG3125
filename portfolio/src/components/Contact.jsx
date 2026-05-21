import React from 'react';

function Contact() {
  return (
    <section id="contact" className="content-section contact-section section-offset">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <p className="section-kicker">Contact</p>
            <h2 className="section-title">Let&apos;s connect</h2>

            <div className="row g-3 mt-3">
              <div className="col-md-4">
                <a className="contact-link" href="mailto:mfadi023@uottawa.ca">
                  <span>Email</span>
                  <strong>mfadi023@uottawa.ca</strong>
                </a>
              </div>
              <div className="col-md-4">
                <a
                  className="contact-link"
                  href="https://github.com/mysfdll"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit Mohamed Yassine Fadil on GitHub"
                >
                  <span>GitHub</span>
                  <strong>View my GitHub projects</strong>
                </a>
              </div>
              <div className="col-md-4">
                <a
                  className="contact-link"
                  href="https://www.linkedin.com/in/mohamed-yassine-fadil-80a93824b"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit Mohamed Yassine Fadil on LinkedIn"
                >
                  <span>LinkedIn</span>
                  <strong>Let&apos;s connect on LinkedIn</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
