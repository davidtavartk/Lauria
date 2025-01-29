import React from 'react';
import Image from 'next/image';

const OurServicesBox = () => {
  return (
    <div>
        <Image
            src="/svgs/DryClean.svg" 
            alt="Dry Clean"
            width={50} 
            height={300} 
            layout="intrinsic" 
        />
        <div>
            <h1>Dry Clean</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
        <div></div>
        <div></div>
    </div>
  )
}

export default OurServicesBox;
