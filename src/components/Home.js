import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MatrixEffect from './MatrixEffect';
import './styles/Grid.css'; // Assuming you have a CSS file for styling

function Home() {
  const [isMatrixActive, setIsMatrixActive] = useState(false);

  return (
    <div className="grid">
      <div className="box projects" id="projects">
        <Link to="/projects">
          <div className="project-bg"></div>
          <h2>Projects</h2>
        </Link>
      </div>
      <div className="box about" id="about">
        <Link to="/about">
          <div className="about-bg"></div>
          <h2>About</h2>
        </Link>
      </div>
      <div className="box contact" id="contact">
        <Link to="/contact">
          <div className="contact-bg"></div>
          <h2>Contact</h2>
        </Link>
      </div>
      <div className="box 1-min-interviews" id="interviews">
        <Link to="/perspectives">
          <div className="interview-bg"></div>
          <h2>Perspectives</h2>
        </Link>
      </div>
      <div 
        className="box unlock" 
        id="unlock" 
        onMouseEnter={() => setIsMatrixActive(true)}
        onMouseLeave={() => setIsMatrixActive(false)}
      >
        <Link to="/mint-page">
          <div className="unlock-bg"></div>
          <h2>Mint</h2>
        </Link>
        <div className="matrix-effect">
          {isMatrixActive && <MatrixEffect isActive={isMatrixActive} />}
        </div>
      </div>
    </div>
  );
}

export default Home;
