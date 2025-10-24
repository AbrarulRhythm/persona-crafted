import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProfileImage from '../components/ProfileImage/ProfileImage';
import SideNav from '../components/SideNav/SideNav';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='main-wrapper'>
            <Header></Header>
            <SideNav></SideNav>
            <main id='content' className='site-main pt-20 md:pt-[104px] lg:pt-0'>
                <section className='content-area mt-12 lg:mt-20'>
                    <div className='container'>
                        <div className='flex flex-wrap -mx-3'>
                            {/* Profile Image */}
                            <div className='w-full lg:w-4/12 px-3'>
                                <ProfileImage></ProfileImage>
                            </div>
                            {/* Profile Image End */}
                            <div className='w-full lg:w-8/12 px-3'>
                                <Outlet></Outlet>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Root;