import OurBusinessCard from "../../atoms/OurBusinessCard";

const OurBusinessBox = () => {
  return (
    <>
      <div className="flex flex-col gap-4 lg:w-1/2">
        <p className="text-[13px] uppercase tracking-[1.95px] text-primary">
          Our Stats
        </p>
        <h1 className="text-[35px] font-black text-white">
          Our Business Number
        </h1>
        <p className="text-[17px] text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:gap-6 lg:w-1/2 lg:flex-row">
        <OurBusinessCard text="30 +" title="Our Branch">
          Lorem ipsum dolor sit amet consectetur.
        </OurBusinessCard>
        <OurBusinessCard text="150 + " title="Team Member">
          Lorem ipsum dolor sit amet consectetur.
        </OurBusinessCard>
      </div>
    </>
  );
};

export default OurBusinessBox;
