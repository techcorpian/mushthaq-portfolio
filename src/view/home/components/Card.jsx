import React, { useState } from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";


const Card = ({ title, description }) => {
    const [mousePos, setMousePos] = useState({ x: 100, y: 100 });

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setMousePos({ x, y });
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            className='relative bg-gradient-to-tr from-gray-900 to-white/20 py-4 px-6 rounded-2xl shadow-lg backdrop-filter backdrop-blur-lg w-full h-full cursor-pointer'
            style={{
                background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 255, 255, 0.6), transparent 50%)`,
            }}
        >
            {/* Overlay with black color and opacity */}
            <div className="absolute inset-0 bg-black/80 opacity-100 rounded-2xl pointer-events-none m-[2px]"></div>

            {/* Card content */}
            <div className='flex flex-col gap-4'>
                <div className='flex justify-between items-start'>
                    <h1 className='relative text-white text-xl'>{title}</h1>
                    <div className='relative text-gray-600 text-2xl hover:text-white'><MdOutlineArrowOutward /></div>
                </div>
                <p className='relative text-white text-sm font-thin'>{description}</p>
            </div>
        </div>
    );
};

export default Card;
