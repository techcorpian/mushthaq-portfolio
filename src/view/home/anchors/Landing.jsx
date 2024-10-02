import React from 'react'
import AnimationButton from '../components/AnimationButton';
import Card from '../components/Card';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";


const Landing = () => {
    return (
        <div id='home' className='flex flex-col justify-start items-center md:h-screen md:gap-2 gap-12
         md:px-20 p-6'>
            <div className='flex flex-col justify-center items-center gap-8 md:py-32'>
                <div className='text-white text-center md:py-0 pt-20'>
                    <h1 className='md:text-6xl text-4xl font-bold'>Welcome to Zen Portal</h1>
                    <p className='text-xl font-light text-gray-500'>Your one-stop solution for all your needs.</p>
                </div>
                <AnimationButton />
            </div>
            <div className='flex md:flex-row flex-col gap-6 w-full'>
                <Card title="Improve your skills" description="We provide a wide range of courses to help you improve your skills." />
                <Card title="Various Courses" description="We provide a wide range of courses to help you improve your skills." />
                <Card title="Custom Software Development" description="We provide a wide range of courses to help you improve your skills." />
            </div>
            <button
                // onClick={handleScroll}
                className=" text-white py-6 my-6 px-4 animate-bounce transition-all duration-300 text-4xl flex flex-col items-center"
            >   <div className='text-sm font-thin'>Scroll Down</div>
                <MdKeyboardDoubleArrowDown />
            </button>
        </div>
    )
}

export default Landing