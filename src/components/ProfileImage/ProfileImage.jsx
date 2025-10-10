import React from 'react';
import profileImage from '../../assets/profile.png';

const ProfileImage = () => {
    return (
        <div className='profileImage w-auto md:w-[50%] lg:w-auto md:mx-auto ml-[58px] lg:ml-[34px] mr-6 lg:mr-6 mb-10 lg:mb-0'>
            <div className='bg-primary rounded-4xl group'>
                <div className='-translate-y-6 -translate-x-6 -rotate-3 group-hover:rotate-0 duration-300'>
                    <img className='w-full bg-primary border-8 border-primary rounded-4xl' src={profileImage} alt='Profile Image' />
                </div>
            </div>
        </div>
    );
};

export default ProfileImage;