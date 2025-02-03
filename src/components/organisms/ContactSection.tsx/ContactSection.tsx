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
    <div className="flex flex-col relative">
      <div className="flex flex-col gap-7 px-4 lg:flex-row lg:px-24">
        <div className="flex flex-col gap-8 sm:flex-1">
          <div className="flex flex-col gap-10">
            <span className="text-[13px] uppercase tracking-[1.95px] text-primary">
              Stay Tuned
            </span>
            <h1 className="text-[35px] md:text-[45px] font-black leading-10 text-c-title">
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

        <div className="sm:flex-1 relative">
          <div className="relative top-[70px] xs:top-[100px]">

          <CustomForm messageForm />
          </div>
        </div>
      </div>

        <div className="w-full">
          <Image
            src={banner}
            alt="contact-banner"
            style={{ objectFit: "cover" }}
            width={1600}
            height={800}
          />
        </div>
    </div>
  );
};

export default ContactSection;
