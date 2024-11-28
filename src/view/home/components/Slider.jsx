import React from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";

const Slider = ({ isOpen, onClose, content }) => {
    return (
        <>
            {/* Background blur */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onClick={onClose} // Close slider when clicking on the background
            ></div>

            {/* Slider */}
            <div
                className={`fixed top-0 right-0 h-full w-full lg:w-3/4 rounded-l-3xl border-l border-white/20 bg-black/80 backdrop-blur-3xl text-white shadow-lg z-50 transform ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out`}
            >
                <div className="flex flex-row justify-between items-center py-4 px-6">
                    {/* Content */}
                    <div className="">
                        <h2 className="text-3xl font-bold">{content.title}</h2>
                    </div>
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="ml-auto text-white text-3xl hover:text-gray-400"
                    >
                        <IoCloseCircleOutline/>
                    </button>
                </div>

                {/* Content section with scrolling and hidden scrollbar */}
                <div
                    className="px-6 overflow-y-auto"
                    style={{
                        maxHeight: "calc(100vh - 120px)", // Adjust this value based on header height or desired max height
                    }}
                >
                    {content.myContent}
                </div>
            </div>

            <style jsx>{`
                /* Hide the scrollbar */
                .px-6::-webkit-scrollbar {
                    display: none;
                }
                .px-6 {
                    -ms-overflow-style: none;  /* Internet Explorer 10+ */
                    scrollbar-width: none;  /* Firefox */
                }
            `}</style>
        </>
    );
};

export default Slider;
