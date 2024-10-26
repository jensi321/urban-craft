import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const scrollProgress = (scrollTop / scrollHeight) * 100;

      setProgress(scrollProgress);
      setVisible(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`progress-wrap ${visible ? 'active-progress' : ''}`} onClick={scrollToTop}>
      <svg className="progress-circle" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={{
            strokeDasharray: '314', // Set this to the total length of the path
            strokeDashoffset: `${314 - (progress / 100) * 314}` // Adjust dashoffset based on progress
          }}
        />
      </svg>
      <div className="icon">
        <FaArrowUp />
      </div>
    </div>
  );
};

export default ScrollTop;