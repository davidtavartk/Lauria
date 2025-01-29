import React from 'react';
import PriceCart from '../molecules/PriceCart';

const OurPricing = () => {
    const first_cart = [true, true, true, false, false, false];
    const second_cart = [true, true, true, true, true, true];
    const third_cart = [true, true, true, true, false, false];

    return (
        <div className='py-[25px] px-4 flex flex-col items-center justify-center gap-[25px] mt-14 lg:px-10'>
            <div className='flex flex-col items-center justify-center gap-[15px]'>
                <div className='uppercase text-primary text-[13px] leading-[30px] tracking-[1.9px]'>Our Pricing</div>
                <h1 className='capitalize text-c-title text-[35px] font-black text-center leading-[45px] md:text-[60px]'>Best Price For Best Services</h1>
                <div className='text-center text-c-text max-w-[660px] w-[100%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
            </div>
            <div className='min-h-[748px] grid grid-cols-1 gap-[25px] md:grid-cols-2 xl:grid-cols-3 xl:gap-[25px] xl:h-[826px] justify-center items-center'>
                <PriceCart title="Dry Clean" price="$15" features={first_cart} className='special-style1' />
                <PriceCart title="One Day Fast" price="$35" features={second_cart} className='special-style1' />
                <PriceCart title="All In Laundry" price="$19" features={third_cart} className="special-style  xl:col-span-1" />
            </div>
        </div>
    );
};

export default OurPricing;