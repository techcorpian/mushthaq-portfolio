import React, { useState, useEffect, useRef } from 'react';
import { FaArrowRight, FaSpinner } from 'react-icons/fa';

function AnimationButton() {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New loading state
  const menuRef = useRef(null);
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    setIsInputVisible(true);
    setIsMessageVisible(false); // Hide message when showing input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    console.log('Submitted:', inputValue);

    setIsLoading(true); // Set loading to true
    setTimeout(() => {
      setIsInputVisible(false);
      setIsLoading(false); // Reset loading after submission
      setIsMessageVisible(true); // Show the message after submission
    }, 400);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsAnimating(true); // Start the animation for input exit
        setTimeout(() => {
          setIsInputVisible(false);
          setIsAnimating(false);
        }, 400); // Match transition duration (400ms)
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="container z-10">
      {isMessageVisible && (
        <div className="message text-green-500 font-semibold transition-all duration-500 ease-in-out px-6 py-2 rounded-full border border-green-500">
          We will contact you soon!
        </div>
      )}

      {(isInputVisible || isAnimating) && !isMessageVisible ? (
        <form
          ref={menuRef}
          onSubmit={handleSubmit}
          className="relative transition-all duration-500 ease-in-out"
        >
          <input
            ref={inputRef}
            type="text"
            className={`input-box bg-white text-black px-6 py-2 rounded-full transition-all duration-500 ease-in-out pr-10 ${
              isAnimating ? 'opacity-0 w-0' : 'opacity-100 w-48'
            }`}
            placeholder="Enter your details..."
          />
          <button
            type="submit"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {isLoading ? (
              <FaSpinner className="animate-spin" size={20} /> // Loading spinner
            ) : (
              <FaArrowRight size={20} /> // Arrow Icon
            )}
          </button>
        </form>
      ) : (
        !isMessageVisible && (
          <button
            type="button"
            className="flex items-center gap-4 bg-white text-black px-6 py-2 rounded-full transition-all duration-500 ease-in-out"
            onClick={handleButtonClick}
          >
            Get in touch with us <FaArrowRight size={20} className='text-gray-500'/>
          </button>
        )
      )}
    </div>
  );
}

export default AnimationButton;
