import React, { useState } from 'react';
import './BackToTopButton.css'; // Import your CSS file

function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  // Function to handle scrolling to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to handle showing/hiding the button based on scroll position
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Add scroll event listener when the component mounts
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {showButton && (
        <button className="back-to-top-btn" onClick={scrollToTop}>
          Back to Top
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;
