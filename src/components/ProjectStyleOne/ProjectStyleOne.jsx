import React from 'react';
import { Link } from 'react-router';

import re from '../../assets/re.png';

const ProjectStyleOne = ({ project }) => {

    const { name, tags } = project;

    return (
        <div className='w-full px-3 mb-8'>
            <div className='pt-10 px-6 rounded-md bg-bg-2 relative group mb-5'>
                <div className='overflow-hidden w-fit mx-auto rounded-t-md'>
                    <img className='block rounded-t-md group-hover:scale-110 duration-300' src={re} alt="" />

                    {/* Tags */}
                    <div className='absolute bottom-0 left-0 mb-6 mx-6 flex flex-wrap gap-2'>
                        {
                            tags.map((tag, index) => {
                                return (
                                    <Link to='/' className='bg-primary hover:bg-primary-hover-dark duration-300 text-white text-sm py-2 px-6 rounded-4xl' key={index}>{tag}</Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <h2 className='text-2xl font-medium inline group'>
                <Link className='group-hover:underline duration-300'>{name}</Link>
            </h2>
        </div>
    );
};

export default ProjectStyleOne;