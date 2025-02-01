import HandClean from "../../../../public/svgs/HandClean";
import ServiceCard from "../../atoms/ServiceCard";
import OneDay from "../../../../public/svgs/OneDay";
import LaundryImg from "../../../../public/svgs/LaundryImg";

const OurServiceBox = () => {
  return (
    <>
      <div className="flex w-full flex-col justify-center gap-4 py-10 text-center">
        <p className="text-[13px] uppercase tracking-[1.95px] text-primary">
          Our Services
        </p>
        <h1 className="text-[35px] font-black text-c-title">
          We Do Laundry Services
        </h1>
        <p className="font-[17px] text-c-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>

      <div className="flex flex-col gap-[25px] lg:flex-row">
        <div className="flex flex-col gap-[25px] sm:flex-row">
          <ServiceCard icon={<HandClean />} title={"Dry Clean"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </ServiceCard>

          <ServiceCard icon={<OneDay />} title={"One Day Fast"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </ServiceCard>
        </div>

        <div className="lg:w-auto">
          <ServiceCard icon={<LaundryImg />} title={"All In Laundry"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </ServiceCard>
        </div>
      </div>
    </>
  );
};

export default OurServiceBox;
