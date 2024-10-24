import React, { useEffect, useRef } from 'react';

const ZigzagTimelineWithDots = () => {
  const Journey = [
    {
      "year":"2019",
      "desc":"sdfsdfsfsdfsdffsdfsd"
    },
    {
      "year":"2020",
      "desc":"sdfsdfsfsdfsdffsdfsd"
    },
    {
      "year":"2021",
      "desc":"sdfsdfsfsdfsdffsdfsd"
    },
    {
      "year":"2022",
      "desc":"sdfsdfsfsdfsdffsdfsd"
    },
  ]
  const timelineItemsRef = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.6, // Trigger animation when 50% of the item is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          entry.target.classList.remove('fade-out');
        } else {
          entry.target.classList.add('fade-out');
          entry.target.classList.remove('fade-in');
        }
      });
    }, options);

    timelineItemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      if (timelineItemsRef.current.length > 0) {
        timelineItemsRef.current.forEach((item) => observer.unobserve(item));
      }
    };
  }, []);

  return (
    <div className="timeline md:px-6">
      {Journey.map((journey, index) => (
        <div
          key={index}
          ref={(el) => (timelineItemsRef.current[index] = el)}
          className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} fade-out`} // Alternating left and right
        >
          <div className="timeline-content">
            <h2>{journey.year}</h2>
            <p>{journey.desc}</p>
          </div>
          <div className="dot"></div> {/* Dot for each event */}
        </div>
      ))}
    </div>
  );
};

export default ZigzagTimelineWithDots;
