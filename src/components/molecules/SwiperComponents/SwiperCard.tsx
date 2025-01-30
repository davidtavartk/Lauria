import { SwiperCardProps } from "@/types/propTypes";
import RatingBox from "./RatingBox";


const SwiperCard = ({text, name, honorific}: SwiperCardProps) => {
    return (
        <div className="bg-[#F3F3F3] w-full p-9 flex flex-col gap-4">
            <RatingBox />
            <p className="text-c-text text-[17px]">{text}</p>
            <div className="bg-[#C4C4C4] size-20" />
            <span className="text-xl font-black text-c-title">{honorific}. {name}</span>
            <span className="text-[13px] font-black text-primary uppercase tracking-[1.95px] ">Reviews on google</span>
        </div>
    );
};

export default SwiperCard;