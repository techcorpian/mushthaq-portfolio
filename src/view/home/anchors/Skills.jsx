import React, { useEffect, useState, useRef } from 'react';

const Skills = () => {
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
        <div ref={aboutSectionRef} className="min-h-screen relative">
            <div className='grid grid-cols-8 gap-1 h-screen z-10'>
                {boxes.map((_, index) => (
                    <div
                        key={index}
                        className='w-full h-full hover:bg-white/10 hover:border hover:border-white/10 rounded-2xl cursor-pointer transition-all duration-100'
                    ></div>
                ))}
                <div className='absolute top-6 left-6 text-6xl font text-white'>
                    <div>Industry</div>
                    <div>Meets</div>
                    <div>Technology.</div>
                </div>

                {/* Animated Section */}
                <div
                    className={`absolute bottom-0 right-0 text-6xl font h-2/3 w-1/2 bg-bitter-black rounded-l-3xl transition-all duration-700 ease-in-out ${
                        isVisible
                            ? 'transform translate-x-0 shadow-2xl hover:shadow-2xl hover:shadow-black shadow-black bg-bitter-black' 
                            : 'transform '
                    }`}
                >
                    {/* Animated content goes here */}
                </div>
            </div>
        </div>
    );
};

export default Skills;
