import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import ProjectPlaceholder from './pages/ProjectPlaceholder.jsx';

function App() {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:projectId" element={<ProjectPlaceholder />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
