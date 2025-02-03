import ContactBox from "@/components/atoms/ContactBox/ContactBox";
import React from "react";
import LocationIcon from "../../../../public/svgs/LocationIcon";
import MailIcon from "../../../../public/svgs/MailIcon";
import PhoneIcon from "../../../../public/svgs/PhoneIcon";
import CustomForm from "@/components/molecules/CustomForm/CustomForm";
import Image from "next/image";
import banner from "../../../../public/images/greyBanner.jpg";

const ContactSection = () => {
  return (
    <div className="relative flex flex-col">
      <div className="flex flex-col gap-7 px-4 lg:flex-row lg:px-24">
        <div className="flex flex-col gap-8 sm:flex-1">
          <div className="flex flex-col gap-10">
            <span className="text-[13px] uppercase tracking-[1.95px] text-primary">
              Stay Tuned
            </span>
            <h1 className="text-[35px] font-black leading-10 text-c-title md:text-[45px]">
              Keep Connected & Lets Get In Touch With Us
            </h1>
            <p className="text-[17px] leading-7 text-c-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <ContactBox icon={<LocationIcon />} title="Head Office Address">
              Head Office Address
            </ContactBox>
            <ContactBox icon={<MailIcon />} title="Head Office Address">
              Hello@Lauria.com
            </ContactBox>
            <ContactBox icon={<PhoneIcon />} title="Office Telephone">
              ( +62 ) 123 456 789
            </ContactBox>
          </div>
        </div>

        <div className="relative sm:flex-1 z-10">
            <CustomForm messageForm />
        </div>
      </div>

      <div className="w-full -mt-[100px]">
        <Image
          src={banner}
          alt="contact-banner"
          style={{ objectFit: "cover" }}
          height={800}
        />
      </div>
    </div>
  );
};

export default ContactSection;
