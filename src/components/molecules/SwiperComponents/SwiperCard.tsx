import { SwiperCardProps } from "@/types/propTypes";
import RatingBox from "./RatingBox";

const SwiperCard = ({ text, name, honorific }: SwiperCardProps) => {
  return (
    <div className="flex w-full flex-col gap-4 bg-[#F3F3F3] p-9">
      <RatingBox />
      <p className="text-[17px] text-c-text">{text}</p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="size-20 bg-[#C4C4C4]" />
        <div className="justify-center items-centfer flex flex-col gap-2">
          <span className="text-xl font-black text-c-title">
            {honorific}. {name}
          </span>
          <span className="text-[13px] uppercase tracking-[1.95px] text-primary">
            Reviews on google
          </span>
        </div>
      </div>
    </div>
  );
};

export default SwiperCard;
