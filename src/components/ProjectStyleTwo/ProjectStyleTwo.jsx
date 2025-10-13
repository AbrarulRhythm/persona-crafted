import React from 'react';

import re from '../../assets/re.png';
import { Link } from 'react-router';

const ProjectStyleTwo = ({ project }) => {

    const { name, tags } = project;
    const slicesTag = tags.slice(0, 2)

    return (
        <div className='w-full md:w-6/12 px-3 mb-8'>
            <div className='px-11 pt-14 rounded-md bg-bg-2 relative group mb-5'>
                <div className='overflow-hidden w-fit mx-auto rounded-t-md'>
                    <img className='block rounded-t-md group-hover:scale-110 duration-300' src={re} alt="" />

                    {/* Tags */}
                    <div className='absolute bottom-0 left-0 mb-6 mx-6 flex flex-wrap gap-2'>
                        {
                            slicesTag.map((tag, index) => {
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

export default ProjectStyleTwo;