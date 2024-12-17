import React, { useState } from 'react';
import pic from '../../public/public/mypic.png';
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { Link } from 'react-scroll';

function Navbar() {
    const [menu, setMenu] = useState(false);

    const navItems = [
        { id: 1, text: "Home" },
        { id: 2, text: "About" },
        { id: 3, text: "Portfolio" },
        { id: 4, text: "Experience" },
        { id: 5, text: "Contact" },
    ];

    return (
        <>
            {/* Body content wrapper */}
            <div className={`${menu ? 'overflow-hidden' : ''}`}>
                {/* Navbar */}
                <div className='bg-white w-full fixed px-4 md:px-64 md:py-2 shadow-md shadow-slate-700 z-50'>
                    <div className="flex justify-between items-center font-semibold h-16">
                        <div className="flex space-x-2">
                            <img src={pic} className="md:h-16 md:w-20 h-12 w-12 rounded-full" alt="Logo" />
                            <h1 className='font-semibold text-xl cursor-pointer hover:scale-105 duration-200'>
                                Panka<span className="text-green-500 text-xl">J</span>
                                <p className="text-sm">Web developer</p>
                            </h1>
                        </div>

                        {/* Desktop navbar */}
                        <div>
                            <ul className='hidden md:flex space-x-8'>
                                {navItems.map(({ id, text }) => (
                                    <li className="hover:scale-110 duration-200 cursor-pointer hover:text-green-500" key={id}>
                                        <Link to={text} smooth={true} duration={500} offset={-70} activeClass='active'>
                                            {text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            {/* Mobile menu toggle button */}
                            <div onClick={() => setMenu(!menu)} className="cursor-pointer md:hidden">
                                {menu ? <GrClose size={24} /> : <BsFillMenuButtonWideFill size={24} />}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile navbar with red background */}
                {menu && (
                    <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-slate-50 z-50 flex justify-center items-center">
                        <ul className="flex flex-col items-center justify-center h-full font-semibold space-y-4 text-xl text-black">
                            {navItems.map(({ id, text }) => (
                                <li className="hover:scale-110 duration-200" key={id}>
                                    <Link 
                                        onClick={() => setMenu(!menu)} 
                                        to={text} 
                                        smooth={true} 
                                        duration={500} 
                                        offset={-70} 
                                        activeClass='active'>
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Close the menu when cross button is clicked */}
                        <div 
                            onClick={() => setMenu(false)} 
                            className="absolute top-4 right-4 cursor-pointer">
                            <GrClose size={30} />
                        </div>
                    </div>
                )}
            </div>

            {/* Content section, adding padding to avoid overlap with navbar */}
            <div className="pt-16 md:pt-20">
                {/* Your body content goes here */}
            </div>
        </>
    );
}

export default Navbar;
