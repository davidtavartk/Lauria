import { ContactBoxProps } from "@/types/propTypes";
import React from "react";

const ContactBox = ({ icon, title, children }: ContactBoxProps) => {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
      <span>{icon}</span>
      <div className="flex flex-col gap-1">
        <h2 className="text-[25px] font-black leading-8 text-c-title">
          {title}
        </h2>
        <p className="text-[17px] leading-7 text-c-text">{children}</p>
      </div>
    </div>
  );
};

export default ContactBox;
