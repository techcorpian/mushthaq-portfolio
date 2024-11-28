import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link as ScrollLink } from 'react-scroll';
import Logo from '../components/Logo';

const Menu = () => {
    const MenuTitles = [{
        "title": 'Home',
        "link": 'home'
    },
    {
        "title": 'My Journey',
        "link": 'journey'
    },
    {
        "title": 'Tech Stacks',
        "link": 'stack'
    },
    {
        "title": 'Projects',
        "link": 'project'
    }
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);
    return (
        <div className="sticky top-4 w-full inset-0 z-50">
            <div className='md:flex justify-between px-2 py-1 items-center gap-4 bg-white/20 border border-white/10 backdrop-filter backdrop-blur-lg mx-9 my-4 rounded-full hidden'>
                <div className='flex'>
                    <Logo spanClass='md:text-lg text-xl' divClass='md:text-lg text-xl' />
                    <div className='flex '>
                        {
                            MenuTitles.map((data, index) => (
                                <ScrollLink
                                    to={data.link}
                                    key={index}
                                    activeClass="active"
                                    className={
                                        `block py-2 px-3 font-light hover:text-gray-100 text-gray-400 hover:text-black/80 text-base rounded-full active:bg-black/80 cursor-pointer`
                                    }
                                    smooth={true}
                                    duration={500}
                                >
                                    {data.title}
                                </ScrollLink>

                            ))
                        }
                    </div>
                </div>
                {/* <button className='bg-white p-2 px-5 rounded-full text-sm text-white uppercase hover:text-sky-700 bg-sky-800'>Client Portal</button> */}
                <ScrollLink to='contact' smooth={true} duration={500} className='text-gray-700 rounded-full px-6 py-1 md:block hidden hover:bg-gray-300 bg-white hover:text-black/80 cursor-pointer transition-all duration-300'>Contact Us</ScrollLink>
            </div>
            <div className='flex justify-between items-center w-full fixed px-4 py-3 z-10 '>

                <div className='gap-1 uppercase font-medium text-gray-300 items-center hidden md:flex bg-black'>

                </div>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <HiOutlineMenuAlt3 className='text-xl' />
                    </button>
                </div>
            </div>
            <div ref={menuRef} className={`fixed top-0 z-20 inset-x-0 p-2 transition transform origin-top-right md:hidden ${isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}>
                <div className="rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5 ">
                {
                            MenuTitles.map((data, index) => (
                                <ScrollLink
                                    to={data.link}
                                    key={index}
                                    activeClass="active"
                                    className={
                                        `block py-2 px-3 font-light hover:text-gray-100 text-gray-400 hover:text-black/80 text-base rounded-full active:bg-black/80 cursor-pointer`
                                    }
                                    smooth={true}
                                    duration={500}
                                >
                                    {data.title}
                                </ScrollLink>

                            ))
                        }
                </div>
                <ScrollLink to="contact" className='border border-[#EEB708] text-sm py-1 px-4 rounded-full float-right bg-[#EEB708] text-black my-2'>Get in touch</ScrollLink>
            </div>
        </div>
    )
}

export default Menu