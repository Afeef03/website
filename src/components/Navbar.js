import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const navbarClasses = `navbar navbar-expand-lg fixed-top ${isScrolled ? 'scrolled' : ''}`;

  return (
    <div>
      <nav className={navbarClasses}>
        <div className="container-fluid">
          <Link to='/' className='navbar-brand'>Web <span>Hub</span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/' className='nav-link'>Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/about' className='nav-link'>About</Link>
              </li>
              <li className="nav-item">
                <Link to='/projects' className='nav-link'>Projects</Link>
              </li>
              <li className="nav-item">
                <Link to='/contact' className='nav-link'>Contact</Link>
              </li>
            </ul>
            <button className="ms-auto btn-nav">
              Get started
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
