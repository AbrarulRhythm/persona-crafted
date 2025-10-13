import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { BsBriefcase, BsTrophy } from 'react-icons/bs';
import { PiCrownThin } from 'react-icons/pi';
import { IoHappyOutline } from 'react-icons/io5';
import { useLoaderData } from 'react-router';
import Skill from '../Skill/Skill';

const Home = () => {

    const skillsData = useLoaderData();

    return (
        <div className='about-me'>
            <SectionTitle title='About Me'></SectionTitle>

            <h1 className='text-4xl xxl:text-5xl leading-[1.4] font-medium mb-4'>Hello, I’m <span className='border-b-2 border-primary'>Olivia Randhawa</span>, a web developer that solves development releted problems.</h1>
            <p className='text-base md:text-lg'>Hi! I'm Olivia, a passionate web developer with a strong background in front-end and back-end technologies. I love turning ideas into interactive and user-friendly websites.</p>

            <div className='funfact-area overflow-hidden mt-8'>
                <div className='flex flex-wrap -mx-3'>
                    <div className='funfact-item w-6/12 lg:w-3/12 px-3'>
                        <BsBriefcase className='text-xl mb-3 text-primary' />
                        <h1 className='text-4xl font-medium mb-1'>40+</h1>
                        <p>Years of Experience</p>
                    </div>
                    <div className='funfact-item w-6/12 lg:w-3/12 px-3'>
                        <BsTrophy className='text-xl mb-3 text-primary' />
                        <h1 className='text-4xl font-medium mb-1'>20%</h1>
                        <p>Job Cchievements</p>
                    </div>
                    <div className='funfact-item w-6/12 lg:w-3/12 px-3'>
                        <PiCrownThin className='text-xl mb-3 text-primary' />
                        <h1 className='text-4xl font-medium mb-1'>14+</h1>
                        <p>Project Completed</p>
                    </div>
                    <div className='funfact-item w-6/12 lg:w-3/12 px-3'>
                        <IoHappyOutline className='text-xl mb-3 text-primary' />
                        <h1 className='text-4xl font-medium mb-1'>1.9K</h1>
                        <p>Happy Clients</p>
                    </div>
                </div>
            </div>

            {/* My Skills */}
            <h2 className='text-xl font-semibold mt-8 mb-6'>My Skills</h2>
            <div className='flex flex-wrap -mx-3'>
                {
                    skillsData.map((skill) => {
                        return (
                            <Skill Skill key={skill.id} skill={skill} ></Skill>
                        )
                    })
                }
            </div>
        </div >
    );
};

export default Home;