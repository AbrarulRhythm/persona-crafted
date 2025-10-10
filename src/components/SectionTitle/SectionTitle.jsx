import React from 'react';

const SectionTitle = ({ title }) => {
    return (
        <div className='section-title mb-10 md:mb-11 lg:mb-12 relative'>
            <h5 className='text-xl font-semibold'>{title}</h5>
            <div className='border-t border-border w-[65%] absolute top-[50%] left-[50px] translate-y-[-50%]'></div>
        </div>
    );
};

export default SectionTitle;