import React, { useEffect, useRef, useState } from 'react';

const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(domRef.current);
        }
      });
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => domRef.current && observer.unobserve(domRef.current);
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate-y-0 translate-x-0';
    switch (direction) {
      case 'up': return 'translate-y-12';
      case 'down': return '-translate-y-12';
      case 'left': return 'translate-x-12';
      case 'right': return '-translate-x-12';
      default: return 'translate-y-12';
    }
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-[1200ms] ease-out transform ${className} ${
        isVisible ? `opacity-100 ${getTransform()}` : `opacity-0 ${getTransform()}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeIn;