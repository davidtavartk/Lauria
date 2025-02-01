import React from 'react'
import OurBusinessCard from '../atoms/OurBusinessCard'

const OurBusinessBox = () => {
    return (
        <div className="flex bg-[#000000A6] my-12 lg:my-24 px-4 py-12 flex-col gap-6 sm:px-6 lg:flex-row lg:items-center lg:py-16 lg:px-24 lg:w-full">
            <div className=" flex flex-col gap-4 lg:w-1/2">
                <p className="text-[13px] text-primary uppercase tracking-[1.95px]">Our Stats</p>
                <h1 className="text-[35px] text-white font-black" >Our Business Number</h1>
                <p className="text-white text-[17px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-6 lg:flex-row lg:w-1/2">
            <OurBusinessCard text='30 +' title='Our Branch' children='Lorem ipsum dolor sit amet consectetur.'></OurBusinessCard>
            <OurBusinessCard text='150 + ' title='Team Member' children='Lorem ipsum dolor sit amet consectetur.'></OurBusinessCard>


            </div>




        </div>
    )
}

export default OurBusinessBox