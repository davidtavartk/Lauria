import Button from "@/components/atoms/Button/Button";
import CheckItem from "@/components/atoms/CheckItem/CheckItem";
import React from "react";
import VideoIcon from "../../../../public/svgs/video_icon/VideoIcon";
import OfferBox from "@/components/molecules/OfferBox/OfferBox";
import StarIcon from "../../../../public/svgs/StarIcon";
import UmbrellaIcon from "../../../../public/svgs/UmbrellaIcon";
import TimeIcon from "../../../../public/svgs/TimeIcon";

const ChoiceUs = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-4 py-6 lg:px-24 xl:flex-row xl:py-[50px]">
      <div className="flex w-full flex-col items-start justify-center gap-6 xl:gap-8">
        <div className="items-strat flex flex-col justify-center gap-4">
          <div className="text-[13px] uppercase leading-[30px] tracking-[1.9px] text-primary">
            Why CHoice Us
          </div>
          <h1 className="text-left text-[35px] font-black capitalize leading-[45px] text-c-title md:text-[45px]">
            We Can Be Best Solution For Your Laundry Service
          </h1>
          <div className="w-full max-w-[660px] text-left text-c-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-4">
          <CheckItem isChecked={true}>Best Worker Services</CheckItem>
          <CheckItem isChecked={true}>Best Worker Services</CheckItem>
          <CheckItem isChecked={true}>Best Worker Services</CheckItem>
        </div>
        <div className="flex items-start justify-center gap-6">
          <Button filled>Contact Us</Button>
          <div className="cursor-pointer">
            <VideoIcon />
          </div>
          <div className="hidden px-7 py-5 text-[17px] font-semibold text-c-text md:block">
            Play Video
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-6 xl:gap-7">
        <OfferBox IconComponent={StarIcon} title="The Best Laundry" />
        <OfferBox IconComponent={UmbrellaIcon} title="Rain Free" />
        <OfferBox IconComponent={TimeIcon} title="One Day Services" />
      </div>
    </div>
  );
};

export default ChoiceUs;
