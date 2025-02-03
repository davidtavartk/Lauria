import { SliderCardProps } from '@/types/propTypes';
import React from 'react'

const SliderCard: React.FC<SliderCardProps> = ({ label, percentage }) => {
    return (
      <div>
        <div className="flex justify-between text-primary ">
          <span className="text-[17px]">{label}</span>
          <span className="text-[13px] tracking-[1.95px] uppercase">{percentage}%</span>
        </div>
        <progress
          className="w-full h-16 bg-white mt-2  border-white border-[15px] [&::-webkit-progress-bar]:bg-white [&::-webkit-progress-value]:bg-primary [&::-moz-progress-bar]:bg-primary"
          value={percentage}
          max={100}
        ></progress>
      </div>
    );
  };
  
  export default SliderCard;