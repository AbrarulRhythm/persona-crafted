import React from 'react';

const Skill = ({ skill }) => {

    const { name, percentage, image, alt } = skill

    return (
        <div className='w-full md:w-6/12 px-3 mb-6'>
            <div className='p-6 rounded-md border border-border hover:border-primary duration-300 group'>
                <div className='flex items-center gap-4'>
                    <div>
                        <img className='w-[48px] group-hover:scale-110 duration-300' src={image} alt={alt} />
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold mb-0.5'>{name}</h3>
                        <p className='text-base font-medium text-body'>{percentage}%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;