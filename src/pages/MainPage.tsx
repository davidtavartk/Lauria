import CustomForm from "@/components/molecules/CustomForm";
import React from "react";
import Header from "@/components/organisms/Header";

const MainPage = () => {
  return <>
    <Header />
    <div className="m-auto px-4">
      <CustomForm />
    </div>
  </>
};

export default MainPage;
