import StarFull from "../../../../public/svgs/StarFull";
import StarHalf from "../../../../public/svgs/StarHalf";

const RatingBox = () => {
    return (
        <div className="flex gap-4">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
        </div>
    );
};

export default RatingBox;