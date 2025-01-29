import { PriceCartProps } from '@/types/propTypes';
import React from 'react';
import CheckItem from '../atoms/CheckItem';
import { featureNames } from '@/data';
import Button from '../atoms/Button';



const PriceCart = ({ title, price, features, className }: PriceCartProps) => {
  return (
    <div className={`group active:bg-slate-200 cursor-pointer max-w-[345px] xl:w-[390px] w-full h-[665px] border-2 border-primary py-[32px] px-[35px] flex flex-col gap-[25px] xl:hover:bg-primary xl:hover:h-[723px] xl:hover:py-[61px] transition-all duration-700 ${className}`}>
      <div className='transition duration-300 flex flex-col gap-[5px]'>
        <div className='xl:group-hover:text-white transition duration-300 text-[35px] text-c-title font-black leading-[35px]'>{title}</div>
        <div className='xl:group-hover:text-white transition duration-300 text-[#6E6E6E] text-[17px] leading-[30px]'>Price For / 5 Kg</div>
      </div>
      <div className='xl:group-hover:text-white transition duration-300 text-primary text-[60px] leading-[80px] font-black'>{price}</div>
      <div className='w-full border-[1px] border-[#DADADA]'></div>
      <div className='flex flex-col gap-[15px]'>
        {featureNames.map((name, index) => (
          <div key={index} className='flex gap-[15px] items-center'>
            <CheckItem isChecked={features[index]}>{name}</CheckItem>
          </div>
      ))}
      </div>
      <div className='w-full border-[1px] border-[#DADADA]'></div>
      <Button filled textClassName='xl:group-hover:text-[#3DB2FF]' className='w-[180px] xl:group-hover:bg-white'>Lets Talk Us</Button>
    </div>
  );
};

export default PriceCart;