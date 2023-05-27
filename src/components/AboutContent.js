import React from 'react';
import './About.css';
import { useLocation } from 'react-router-dom'; // Import the useLocation hook

const AboutContent = () => {
  const location = useLocation(); // Get the current location using the useLocation hook
  const currentPage = location.pathname.split('/').pop(); // Extract the current page name from the URL

  return (
    <div className='bg-1'>
      <div className="container" id='text'>
        <h1 className='text-light'>{currentPage}</h1>
        <h6 className='text-light mt-2'>Home / {currentPage}</h6>
      </div>
    </div>
  );
}

export default AboutContent;
