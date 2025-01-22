import React from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

const CustomForm = () => {
  return (
    <form className="flex h-[515px] w-full flex-col items-center justify-between bg-primary p-[35px] sm:h-auto sm:flex-row sm:flex-wrap sm:gap-[30px] md:w-[600px]">
      <Input placeholder="Your Name" />
      <Input placeholder="Your Address" />
      <Input type="number" placeholder="Telephone" />
      <Input type="text" placeholder="Choose Services" />
      <div className="mr-auto">
        <Button>Get Reservation</Button>
      </div>
    </form>
  );
};

export default CustomForm;
