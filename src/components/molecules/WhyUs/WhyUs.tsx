import Info from "@/components/atoms/Info/Info";

const WhyUs = () => {
  return (
    <div className="flex flex-col gap-5">
      <span className="text-[13px] uppercase tracking-[1.95px] text-primary">
        About us
      </span>
      <h1 className="text-[35px] font-black leading-[40px] text-c-title sm:leading-[60px]">
        We Are Best Choicing Laundry Services For You
      </h1>
      <p className="text-c-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
      <Info>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </Info>
    </div>
  );
};

export default WhyUs;
