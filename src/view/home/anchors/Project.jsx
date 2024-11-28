import React, { useState } from 'react';
import { IoIosCloseCircle } from "react-icons/io";

const Project1 = ({projectTitle, projectTag, children, Image1, Image2, Image3, Image4, bgColor, stickyH}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  return (
    <>
       {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative">
            <img
              src={currentImage}
              alt="Modal"
              className="rounded-lg max-w-[90vw] max-h-[90vh]"
            />
            <button
              className="absolute top-1 right-1 md:top-2 md:right-2 text-red-700 py-2 px-4 rounded-full"
              onClick={closeModal}
            >
              <IoIosCloseCircle/>
            </button>
          </div>
        </div>
      )}
    <div id="project" className={`${bgColor} border border-white/20 backdrop-filter backdrop-blur-xl sticky ${stickyH} h-screen rounded-3xl px-6 py-3`}>
      <div className="flex justify-center md:justify-start items-center gap-6 text-xl md:text-4xl text-gray-300 font-bold">
        {projectTitle}
        <span className="text-sm mx-2 px-4 py-1 border hidden md:flex border-yellow-200 text-yellow-200 rounded-full">
          {projectTag}
        </span>
      </div>

      <div className="flex md:flex-row flex-col justify-between items-start gap-6 mt-9 text-white">
        <div className='w-full md:w-1/2 text-sm'>{children}</div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-6">
            <div>
              <img
                src={Image1}
                width="400"
                className="rounded-lg cursor-pointer"
                onClick={() => openModal(Image1)}
                alt="Image1"
              />
            </div>
            <div>
              <img
                src={Image2}
                width="400"
                className="rounded-lg cursor-pointer"
                onClick={() => openModal(Image2)}
                alt="Image2"
              />
            </div>
          </div>
          <div className="flex gap-6">
            <div>
              <img
                src={Image3}
                width="400"
                className="rounded-lg cursor-pointer"
                onClick={() => openModal(Image3)}
                alt="Image3"
              />
            </div>
            <div>
              <img
                src={Image4}
                width="400"
                className="rounded-lg cursor-pointer"
                onClick={() => openModal(Image4)}
                alt="Image4"
              />
            </div>
          </div>
        </div>
      </div>


    </div>
    </>
  );
};

export default Project1;
