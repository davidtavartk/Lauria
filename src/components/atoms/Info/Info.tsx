import { InfoProps } from '@/types/propTypes';
import React from 'react';

const Info = ({children}:InfoProps) => {
    return (
        <div className='text-center bg-[#F3F3F3] border-l-8 border-[#3DB2FF] flex justify-center items-center h-[170px] px-4 mt-3'>
            <span className='font-semibold text-c-text text-[17px] leading-6'>{children}</span>
        </div>
    );
};

export default Info;