import OurBusinessBox from "@/components/molecules/OurBusinessBox/OurBusinessBox";
import React from "react";

const BusinessSection = () => {
  return (
    <div className="my-12 flex flex-col gap-6 bg-background-overlay px-4 py-12 sm:px-6 lg:my-24 lg:w-full lg:flex-row lg:items-center lg:px-24 lg:py-16">
      <OurBusinessBox />
    </div>
  );
};

export default BusinessSection;
