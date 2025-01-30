import React from 'react'
import { OurBusinessCardProps } from '@/types/propTypes'

const OurBusinessCard = ({text, title, children}: OurBusinessCardProps) => {
  return (
    <div className="flex flex-col gap-4">
        <p className="text-[45px] text-primary font-black">{text}</p>
        <h1 className="text-[25px] font-black text-white " >{title}</h1>
        <p className="text-[17px]  text-white">{children}</p>
    </div>
  )
}

export default OurBusinessCard;
