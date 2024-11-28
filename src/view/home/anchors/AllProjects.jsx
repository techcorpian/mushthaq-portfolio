import React, { useEffect, useState, useRef } from 'react';
import ImageRef1 from "../../../assets/projects/other1.png"
import ImageRef2 from "../../../assets/projects/other2.png"

const AllProjects = () => {
  const boxes = Array(64).fill(0); // Adjust the number of boxes as needed
  const [isVisible, setIsVisible] = useState(false);
  const aboutSectionRef = useRef(null);

  useEffect(() => {
      const observer = new IntersectionObserver(
          (entries) => {
              if (entries[0].isIntersecting) {
                  setIsVisible(true); // Trigger animation when scrolled down to the page
              } else if (window.scrollY < aboutSectionRef.current.offsetTop) {
                  setIsVisible(false); // Hide when scrolling up past the section
              }
          },
          {
              threshold: 0.8, // Trigger when 20% of the section is in view
          }
      );

      if (aboutSectionRef.current) {
          observer.observe(aboutSectionRef.current);
      }

      return () => {
          if (aboutSectionRef.current) {
              observer.unobserve(aboutSectionRef.current);
          }
      };
  }, []);
  return (
    <div className='bg-blitter-black h-screen sticky top-0'>
              <div ref={aboutSectionRef} className="min-h-screen relative ">
            <div className='grid grid-cols-8 gap-1 h-screen'>
                {boxes.map((_, index) => (
                    <div
                        key={index}
                        className='w-full h-full hover:bg-white/10 hover:border hover:border-white/10 rounded-2xl cursor-pointer transition-all duration-200'
                    ></div>
                ))}
                <div className='flex md:flex-col flex-row absolute top-20 left-6 text-4xl md:text-7xl font-semibold text-white/20'>
                    <div>My</div>
                    <div>Other</div>
                    <div>Works.</div>
                </div>

                {/* Animated Section */}
                <div
                    className={`absolute flex items-center bottom-0 right-0 text-6xl font h-5/6 w-full md:w-2/5 flex flex-col gap-4 ${
                        isVisible
                            ? 'transform translate-x-0 shadow-black bg-bitter-black' 
                            : 'transform '
                    }`}
                >
                    {/* Hover animated text */}
                    <img 
                        src={ImageRef1} className={` text-white/20 transition-opacity duration-700 ease-in-out transform translate-x-0 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                    />
                                        <img 
                        src={ImageRef2} className={` text-white/20 transition-opacity duration-700 ease-in-out transform translate-x-0 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                    />
                        
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllProjects