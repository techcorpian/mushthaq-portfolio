import React from 'react';
import '../../../App.css';

const AutoMarquee = ({ images }) => {
  const classAttr = "inline-block h-28 px-6 py-3 rounded-xl mx-4 bg-white/40 border border-white/30 backdrop-filter backdrop-blur"
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-marquee">
        {images.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`marquee-${index}`} 
            className={classAttr} // Adjust height as needed
          />
        ))}
        {/* Duplicate images for continuous effect */}
        {images.map((image, index) => (
          <img 
            key={`duplicate-${index}`} 
            src={image} 
            alt={`marquee-duplicate-${index}`} 
            className={classAttr} // Adjust height as needed
          />
        ))}
      </div>
    </div>
  );
};

export default AutoMarquee;
