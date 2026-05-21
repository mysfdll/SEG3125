import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'How I Work', id: 'how-i-work' },
  { label: 'Case Studies', id: 'case-studies' },
  { label: 'Contact', id: 'contact' }
];

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavClick = (event, sectionId) => {
    event.preventDefault();

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      setIsMenuOpen(false);
      return;
    }

    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top portfolio-navbar">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/" aria-label="Mohamed Yassine Fadil home">
          Mohamed Yassine Fadil
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="portfolioNavbar"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
          id="portfolioNavbar"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.id}>
                <a
                  className="nav-link"
                  href={`/#${link.id}`}
                  onClick={(event) => handleNavClick(event, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
