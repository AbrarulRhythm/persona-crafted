import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiDownload } from 'react-icons/fi';
import { HiBars2 } from 'react-icons/hi2';
import { Link, NavLink } from 'react-router';
import { navigationData } from '../../data/navigationData';
import Typewriter from 'typewriter-effect';

const Header = () => {

    const [openSideMenu, setOpenSideMenu] = useState(false);

    return (
        <header className='header py-4 md:py-6'>
            <div className='container'>
                <nav className='primary-menu'>
                    <div className='flex flex-wrap -mx-3 items-center'>
                        <div className='w-8/12 md:w-6/12 px-3'>
                            {/* Logo */}
                            <Link to='/' className='hover:opacity-65 duration-300' title='Persona Crafted.'>
                                <h4 className='text-xl md:text-2xl font-semibold mb-0 md:mb-1'>Persona Crafted.</h4>
                                <span className='block text-sm'>
                                    <Typewriter options={{
                                        strings: [
                                            "I am Olivia Randhawa :)",
                                            "I'm a Freelancer.",
                                            "I'm a Photographer.",
                                            "I'm a Designer."
                                        ],
                                        autoStart: true,
                                        loop: true,
                                    }} />
                                </span>
                            </Link>
                            {/* Logo end */}
                        </div>
                        <div className='w-4/12 md:w-6/12 px-3 flex justify-end items-center'>

                            {/* Nav Toggle Button */}
                            <div onClick={() => setOpenSideMenu(!openSideMenu)} className='z-40 flex w-[42px] h-[42px] lg:hidden justify-center items-center rounded-full text-base text-white bg-primary hover:bg-primary-hover-dark duration-300'>
                                {openSideMenu ? <AiOutlineClose /> : <HiBars2 className='text-lg' />}
                            </div>
                            {/* Nav Toggler End */}

                            <div className={`w-[65%] md:w-[50%] z-30 duration-700 lg:w-auto h-screen lg:h-auto fixed lg:static right-0 top-0 bottom-0 bg-white lg:bg-transparent p-6 lg:p-0 shadow-lg lg:shadow-none ${openSideMenu ? '' : 'translate-x-full lg:translate-none'}`}>
                                <ul className='header-menu block lg:hidden mt-11'>
                                    {
                                        navigationData.map((data) => {
                                            return (
                                                <li key={data.id} className='header-menu-items py-3 border-b border-dashed border-border'>
                                                    <NavLink className='header-menu-links block' to={data.path}>{data.name}</NavLink>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>

                                <div className='lg:flex items-center mt-6 lg:mt-0'>
                                    <div className='flex items-center gap-3'>
                                        <a href='/' target='_blank' className='w-[40px] h-[40px] flex justify-center items-center rounded-full text-sm text-white bg-primary hover:bg-primary-hover-dark duration-300'>
                                            <FaFacebookF />
                                        </a>
                                        <a href='/' target='_blank' className='w-[40px] h-[40px] flex justify-center items-center rounded-full text-sm text-white bg-primary hover:bg-primary-hover-dark duration-300'>
                                            <FaXTwitter />
                                        </a>
                                        <a href='/' target='_blank' className='w-[40px] h-[40px] flex justify-center items-center rounded-full text-base text-white bg-primary hover:bg-primary-hover-dark duration-300'>
                                            <FaGithub />
                                        </a>
                                    </div>
                                    <button className='mt-5 lg:mt-0 ml-0 lg:ml-4 h-fit flex items-center gap-2 font-medium bg-primary hover:bg-primary-hover-dark duration-300 py-4 px-6 text-white text-sm rounded-md'>Download CV <FiDownload className='text-lg' /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;