import CustomSwiper from "@/components/molecules/SwiperComponents/CustomSwiper";

const SwiperSection = () => {
  return (
    <div className="my-24 flex gap-6 flex-col px-4 lg:px-24">
      <div className="flex flex-col gap-4 text-center">
        <span className="text-[13px] uppercase tracking-[1.95px] text-primary">
          Testimonial
        </span>
        <h1 className="text-[35px] font-black leading-10 text-c-title">
          Best Feedback From Clients
        </h1>
        <p className="text-c-text text-[17px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>

      <div>
        <CustomSwiper />
      </div>
    </div>
  );
};

export default SwiperSection;
