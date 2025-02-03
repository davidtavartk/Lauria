import React from 'react'
import VideoSection2 from '../VideoSection2/VideoSection2'
import SliderCard from '@/components/atoms/SliderCard/SliderCard'

const OurTeamSkill = () => {
    return (

        <div className="h-[840px] sm:h-auto lg:h-[800px] lg:items-center w-full relative my-12 lg:my-52">
            <div className="w-full h-[10%] bg-white relative"></div>
            <div className="flex flex-col lg:flex-row h-[90%]  gap-[25px] lg:gap-[5px]relative w-full bg-[#000000A6]   px-4 lg:px-24">
                <div className="relative w-full lg:w-1/2 flex justify-center ">
                    <VideoSection2 />
                </div>
                <div className=" flex flex-col  sm:py-52  lg:w-1/2  lg:flex lg:justify-center">
                    <p className="text-primary text-[13px] tracking-[1.95px] uppercase">Our Team Skill</p>
                    <h1 className=" text-[35px] sm:text-[45px] text-white font-black">We Have Great Team Skill With Certification</h1>
                    <h2 className="text-[17px] w-full text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h2>
                    <SliderCard label="Hand Cleaning" percentage={92} />
                    <SliderCard label="Fast Services" percentage={98} />

                </div>
            </div>
        </div>
    )
}

export default OurTeamSkill