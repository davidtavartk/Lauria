import CustomForm from "@/components/molecules/CustomForm";
import React from "react";
import Header from "@/components/organisms/Header";
import OurPricing from "@/components/organisms/OurPricing";

const MainPage = () => {
  return <>
    <Header />
    <div className="m-auto px-4 relative">
      <CustomForm />
    </div>
    <OurPricing />
  </>
};

export default MainPage;
