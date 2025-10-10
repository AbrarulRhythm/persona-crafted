import React from 'react';
import { navigationData } from '../../data/navigationData';
import { NavLink } from 'react-router';
import "bootstrap-icons/font/bootstrap-icons.css";

const SideNav = () => {
    return (
        <div className='hidden lg:block side-nav fixed right-[30px] top-[50%] translate-y-[-50%]'>
            <ul className='space-y-4'>
                {
                    navigationData.map((data) => {
                        return (
                            <li key={data.id} className='flex'>
                                <NavLink to={data.path} className='link-items'>
                                    <div className='flex items-center relative'>
                                        <span className='link-name bg-primary text-white uppercase font-medium h-[50px] leading-[50px] pl-6 pr-10 rounded-full absolute -right-0.5 duration-300 opacity-0 invisible'>{data.name}</span>
                                        <div className='link-icon relative w-[50px] h-[50px] flex justify-center items-center bg-bg-2 hover:bg-primary text-body hover:text-white duration-300 rounded-full text-xl'>
                                            <i className={`${data.icon}`}></i>
                                        </div>
                                    </div>
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default SideNav;