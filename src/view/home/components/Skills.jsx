import React, { useState, useRef } from 'react';
import { FiPlus } from "react-icons/fi";
import { GoDot } from "react-icons/go";

const FrontendSkills = ({ content }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const contentRefs = useRef([]);

    const toggleExpand = (index) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    return (
        <div>
            {content.map((data, index) => (
                <div
                    key={index}
                    className="py-4 border-b border-gray-800"
                >
                    {/* Title that toggles the description */}
                    <div className="flex justify-between items-center">
                        <div className='flex gap-4 items-center'>
                        <div
                            className="text-xl font-bold cursor-pointer"
                            onClick={() => toggleExpand(index)}
                        >
                            {data.title}
                        </div>
                        {/* <div className=' text-sm hidden md:block px-4 py-0 border border-yellow-200 text-yellow-200 rounded-full '>{data.exp} {data.exp == 1 ? "Year Exp" : "Years Exp"}</div> */}
                        </div>
                        <div
                            className={`cursor-pointer transition-transform duration-300 ${
                                expandedIndex === index ? "rotate-45" : ""
                            }`}
                            onClick={() => toggleExpand(index)}
                        >
                            <FiPlus />
                        </div>
                    </div>
                    {/* Description with smooth transition */}
                    <div
                        ref={(el) => (contentRefs.current[index] = el)}
                        className="overflow-hidden transition-all duration-500 ease-in-out"
                        style={{
                            maxHeight:
                                expandedIndex === index
                                    ? `${contentRefs.current[index]?.scrollHeight}px`
                                    : "0",
                        }}
                    >
                        <div className="font-thin text-gray-400 mt-2">
                            {data.desc.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex gap-4 items-start py-2"
                                >
                                    <span className="py-1">
                                        <GoDot />
                                    </span>
                                    <div className='flex flex-col'>
                                    <div className='font-bold text-gray-300'>{item.descTitle}</div>
                                    {item.descContent}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FrontendSkills;
