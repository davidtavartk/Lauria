import React from 'react'
import { ServiceCardProps } from '@/types/propTypes'

const ServiceCard = ({icon, title, children}: ServiceCardProps) => {
  return (
    <div className="group flex flex-col  h-72 px-4 gap-5 border-2 border-primary justify-center items-center hover:bg-primary transition duration-500 ease-in-out cursor-pointer">
        <span className="group-hover:fill-white">{icon}</span>
        <h1 className="text-[25px] font-black text-c-title  group-hover:text-white ">{title}</h1>
        <p className="text-[17px] text-center text-c-text group-hover:text-white ">{children}</p>
    </div>
  )
}

export default ServiceCard;
