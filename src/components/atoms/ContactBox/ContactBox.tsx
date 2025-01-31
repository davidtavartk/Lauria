import { ContactBoxProps } from "@/types/propTypes";
import React from "react";

const ContactBox = ({ icon, title, children }: ContactBoxProps) => {
  return (
    <div className="gap-6 flex flex-col sm:flex-row sm:gap-12">
      <span>{icon}</span>
      <div className="gap-[5px]">
        <h2 className="text-[25px] font-black leading-8 text-c-title">{title}</h2>
        <p className="text-c-text text-[17px] leading-7">{children}</p>
      </div>
    </div>
  );
};

export default ContactBox;
