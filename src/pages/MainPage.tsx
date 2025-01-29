import CustomForm from "@/components/molecules/CustomForm";
import React from "react";
import Header from "@/components/organisms/Header";
import OurPricing from "@/components/organisms/OurPricing";
import VideoSection from "@/components/organisms/VideoSection";
import WhyUs from "@/components/molecules/WhyUs";
import CleanCardSection from "@/components/organisms/CleanCardSection";
import OurStats from "@/components/organisms/OurStats";
import OurServices from "@/components/organisms/OurServices";
import OurServicesBox from "@/components/organisms/OurServicesBox";

const MainPage = () => {
  return (
    <>
      <Header />
      <div className="relative m-auto px-4">
        <CustomForm />
      </div>
      <CleanCardSection />
      <div className="flex flex-col justify-between md:flex-row mt-8">
        <VideoSection />
        <WhyUs />
      </div>
        <OurStats/>
      <OurServices/>
      <OurServicesBox/>
      <OurPricing />
    </>
  );
};

export default MainPage;
