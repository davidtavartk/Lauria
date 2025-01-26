import React from 'react';
import False from "../../../public/price_checkbox/False";
import True from "../../../public/price_checkbox/True";

interface PriceCartProps {
  title: string;
  price: string;
  features: boolean[];
  className?: string; // Add className prop
}

const PriceCart: React.FC<PriceCartProps> = ({ title, price, features, className }) => {
  const featureNames = [
    'Clean Services',
    'Fragnant Bonuses',
    'Free Packaging',
    'Extra Delivery',
    'Iron Clothes',
    'Priority Services'
  ];

  return (
    <div className={`group max-w-[345px] xl:w-[390px]  w-[100%] h-[665px] border-2 border-primary py-[32px] px-[35px] flex flex-col gap-[25px] hover:bg-primary hover:h-[723px] hover:py-[61px] transition-all duration-700 ${className}`}>
      <div className='transition duration-300 flex flex-col gap-[5px]'>
        <div className='group-hover:text-white transition duration-300 text-[35px] text-c-title font-black leading-[35px]'>{title}</div>
        <div className='group-hover:text-white transition duration-300 text-[#6E6E6E] text-[17px] leading-[30px]'>Price For / 5 Kg</div>
      </div>
      <div className='group-hover:text-white transition duration-300 text-primary text-[60px] leading-[80px] font-black'>{price}</div>
      <div className='w-full border-[1px] border-[#DADADA]'></div>
      <div className='flex flex-col gap-[15px]'>
        {featureNames.map((name, index) => (
          <div key={index} className='flex gap-[15px] items-center'>
            <div className='group-hover:text-white text-primary transition duration-300'>
              {features[index] ? <True className='group-hover:text-white duration-200' /> : <False className='group-hover:text-[#c2c2c289] text-[#DADADA]  duration-200' />}
            </div>
            <div className={features[index] ? 'text-[#6E6E6E] group-hover:text-white transition duration-300' : 'text-[#DADADA] group-hover:text-[#dadada84] transition duration-300'}>{name}</div>
          </div>
        ))}
      </div>
      <div className='w-full border-[1px] border-[#DADADA]'></div>
      <button className='text-white bg-primary text-[17px] font-semibold flex items-center justify-center px-[18px] py-5 w-[180px] group-hover:bg-white group-hover:text-primary transition duration-300'>Lets Talk Us</button>
    </div>
  );
};

export default PriceCart;