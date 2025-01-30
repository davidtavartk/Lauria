import { CheckItemProps } from "@/types/propTypes";
import True from "../../../../public/svgs/price_checkbox/True";
import False from "../../../../public/svgs/price_checkbox/False";

const CheckItem = ({ isChecked = false, children }: CheckItemProps) => {
  return (
    <div className="flex gap-[15px] text-primary transition duration-300 xl:group-hover:text-white">
      {isChecked ? (
        <True className="duration-200 xl:group-hover:text-white" />
      ) : (
        <False className="text-[#DADADA] duration-200 xl:group-hover:text-[#c2c2c289]" />
      )}
      <span
        className={`${isChecked ? "text-[17px] text-c-text transition duration-300 xl:group-hover:text-white" : "text-[#DADADA] transition duration-300 xl:group-hover:text-[#dadada84]"}`}
      >
        {children}
      </span>
    </div>
  );
};

export default CheckItem;
