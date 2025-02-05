import SliderCard from '@/components/atoms/SliderCard.tsx/SliderCard';
import React from 'react';

const SliderContent = () => {
    return (
        <div className="flex flex-col lg-plus:pt-20 lg:flex lg-plus:w-1/2 lg:justify-center gap-4">
          <p className="text-[13px] uppercase tracking-[1.95px] text-primary">
            Our Team Skill
          </p>
          <h1 className="text-[35px] font-black text-white sm:text-[45px]">
            We Have Great Team Skill With Certification
          </h1>
          <h2 className="w-full text-[17px] text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </h2>
          <SliderCard label="Hand Cleaning" percentage={92} />
          <SliderCard label="Fast Services" percentage={98} />
        </div>
    );
};

export default SliderContent;