import CustomForm from "@/components/molecules/CustomForm";
import React from "react";
import Header from "@/components/organisms/Header";
import OurPricing from "@/components/organisms/OurPricing";
import VideoSection from "@/components/organisms/VideoSection";
import WhyUs from "@/components/molecules/WhyUs";
import CleanCardSection from "@/components/organisms/CleanCardSection";
import Footer from "@/components/organisms/Footer";
import MapSection from "@/components/molecules/MapSection";

import { ToastContainer } from "react-toastify";
import OurServiceBox from "@/components/organisms/OurServiceBox";
import OurBusinessBox from "@/components/organisms/OurBusinessBox";

export default function Home() {
  return (
    <div className="relative h-full w-full">
      <Header />

      <CustomForm />
      <CleanCardSection />
      <div className="mt-8 flex flex-col justify-between md:flex-row">
        <VideoSection />
        <WhyUs />
      </div>
        <OurBusinessBox/>
      <OurServiceBox/>
      <MapSection />

      <OurPricing />
      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  );
}
