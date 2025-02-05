import PriceCart from "@/components/molecules/PriceCart/PriceCart";

const OurPricing = () => {
  const first_cart = [true, true, true, false, false, false];
  const second_cart = [true, true, true, true, true, true];
  const third_cart = [true, true, true, true, false, false];

  return (
    <div className="mt-14 flex flex-col items-center justify-center gap-[25px] px-4 py-[25px] lg:px-24">
      <div className="flex flex-col items-center justify-center gap-[15px]">
        <div className="text-[13px] uppercase leading-[30px] tracking-[1.9px] text-primary">
          Our Pricing
        </div>
        <h1 className="text-center text-[35px] font-black capitalize leading-[40px] text-c-title sm:leading-[60px] md:text-[45px]">
          Best Price For Best Services
        </h1>
        <div className="w-[100%] max-w-[660px] text-center text-c-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </div>
      </div>
      <div className="grid min-h-[748px] w-full grid-cols-1 items-center justify-center gap-[25px] md:grid-cols-2 xl:flex xl:justify-between xl:gap-[25px]">
        <PriceCart
          title="Dry Clean"
          price="$15"
          features={first_cart}
          className="special-style1"
        />
        <PriceCart
          title="One Day Fast"
          price="$35"
          features={second_cart}
          className="special-style1"
          isRecommended={true}
        />
        <PriceCart
          title="All In Laundry"
          price="$19"
          features={third_cart}
          className="special-style xl:col-span-1"
        />
      </div>
    </div>
  );
};

export default OurPricing;
