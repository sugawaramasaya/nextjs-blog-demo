import React, { useState, useEffect, useRef } from 'react';
import './fadeIn.css';

const FadeIn = ({ ...props }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  const options = {
    rootMargin: '-5% 0% -5% 0%',
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.unobserve(domRef.current);
      }
    }, options);
    observer.observe(domRef.current);
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};

export default FadeIn;
