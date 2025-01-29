import React from 'react';
import { CheckItemProps } from '@/types/propTypes';
import True from '../../../public/svgs/price_checkbox/True';
import False from '../../../public/svgs/price_checkbox/False';


const CheckItem = ({ isChecked, children }: CheckItemProps) => {
    return (
        <div className='xl:group-hover:text-white text-primary transition duration-300 flex gap-[15px]'>
            {isChecked ? <True className='xl:group-hover:text-white duration-200' /> : <False className='xl:group-hover:text-[#c2c2c289] text-[#DADADA]  duration-200' />}
            <span className={`${isChecked ? 'text-[#6E6E6E] xl:group-hover:text-white transition duration-300' : 'text-[#DADADA] xl:group-hover:text-[#dadada84] transition duration-300'}`}>
                {children}
            </span>
        </div>
    )
}

export default CheckItem