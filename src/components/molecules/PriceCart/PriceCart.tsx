import { PriceCartProps } from "@/types/propTypes";
import CheckItem from "@/components/atoms/CheckItem/CheckItem";
import Button from "@/components//atoms/Button/Button";
import { featureNames } from "@/data";

const PriceCart = ({ title, price, features, className, isRecommended}: PriceCartProps) => {
  return (
    <div
      className={`group flex w-full cursor-pointer flex-col gap-[25px] border-2 border-primary px-[35px] py-[32px] transition-all duration-700 active:bg-slate-200 xl:w-[390px] relative xl:hover:bg-primary xl:hover:py-[91px] ${className}`}
    >
        {isRecommended && (
        <div className="w-[180px] h-[68px] flex justify-center items-center bg-[#FFB830] text-[17px] text-white font-semibold absolute top-0 right-0 opacity-0 xl:group-hover:opacity-100 transition-opacity duration-700">
              Recommended
            </div>
        )}
      <div className="flex flex-col gap-[5px] transition duration-300">
        <div className="text-[35px] font-black leading-[35px] text-c-title transition duration-300 xl:group-hover:text-white transation-all">
          {title}
        </div>
        <div className="text-[17px] leading-[30px] text-[#6E6E6E] transition duration-300 xl:group-hover:text-white">
          Price For / 5 Kg
        </div>
      </div>
      <div className="text-[60px] font-black leading-[80px] text-primary transition duration-300 xl:group-hover:text-white">
        {price}
      </div>
      <div className="w-full border-[1px] border-[#DADADA]"></div>
      <div className="flex flex-col gap-[15px]">
        {featureNames.map((name, index) => (
          <div key={index} className="flex items-center gap-[15px]">
            <CheckItem isChecked={features[index]}>{name}</CheckItem>
          </div>
        ))}
      </div>
      <div className="w-full border-[1px] border-[#DADADA]"></div>
      <Button
        filled
        textClassName="xl:group-hover:text-[#3DB2FF]"
        className="w-[180px] xl:group-hover:bg-white"
      >
        Lets Talk Us
      </Button>
    </div>
  );
};

export default PriceCart;
