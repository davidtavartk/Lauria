import React from 'react'
import CleanCard from '../atoms/ServiceCard'
import HandClean from '../../../public/svgs/HandClean';
import ServiceCard from '../atoms/ServiceCard';
import OneDay from '../../../public/svgs/OneDay';
import LaundryImg from '../../../public/svgs/LaundryImg';


const OurServiceBox = () => {
    return (
        <div className=" px-4 lg:px-24">
            <div className="flex w-full flex-col text-center py-10 gap-4 justify-center">
                <p className="text-primary text-[13px] tracking-[1.95px] uppercase">Our Services</p>
                <h1 className="text-c-title text-[35px] font-black">We Do Laundry Services</h1>
                <p className="text-c-text font-[17px]  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>

            <div  className="flex-col flex gap-[25px] lg:flex-row ">
                <div className="flex flex-col gap-[25px] sm:flex-row ">
                    <ServiceCard icon={<HandClean />} title={'Dry Clean'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </ServiceCard>

                    <ServiceCard icon={<OneDay />} title={'One Day Fast'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </ServiceCard>


                </div>

                <div className="  lg:w-auto">
                    <ServiceCard icon={<LaundryImg />} title={'All In Laundry'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </ServiceCard>
                </div>
            </div>


        </div>
    )
}

export default OurServiceBox