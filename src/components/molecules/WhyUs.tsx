import React from 'react';
import Info from '../atoms/Info';

const WhyUs = () => {
    return (
        <div className='flex flex-col px-4 md:mt-12 gap-5 md:w-1/2 mt-60'>
            <span className='text-primary uppercase tracking-[1.95px]'>About us</span>
            <h1 className='text-[35px] font-black leading-10 text-c-title'>We Are Best Choicing Laundry Services For You</h1>
            <p className='text-c-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <Info>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Info>
        </div>
    );
};

export default WhyUs;