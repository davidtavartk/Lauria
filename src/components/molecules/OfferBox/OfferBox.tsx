import React from 'react';
import StarIcon from '../../../../public/svgs/StarIcon';

interface OfferBoxProps {
  IconComponent?: React.FC<{ fill?: string }>;
  title?: string;
}

const OfferBox: React.FC<OfferBoxProps> = ({
  IconComponent = StarIcon,
  title = "The Best Laundry",
  
}) => {

  return (
    <div className='flex flex-col items-start justify-center gap-6 bg-primary p-6 w-full md:flex-row md:justify-start md:p-9 xl:cursor-pointer'>
      <IconComponent/>
      <div>
        <div className="text-[25px] font-black text-white leading-[35px]">{title}</div>
        <div className="text-[17px] text-white leading-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </div>
    </div>
  );
};

export default OfferBox;