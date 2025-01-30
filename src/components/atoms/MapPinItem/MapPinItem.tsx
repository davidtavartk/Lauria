import { MapPinItemProps } from "@/types/propTypes";
import MapIcon from "../../../../public/svgs/MapIcon";

const MapPinItem = ({ className }: MapPinItemProps) => {
  return (
    <div
      className={`absolute flex items-center justify-center rounded-full bg-primary p-1 sm:p-2 lg:p-[12px] ${className}`}
    >
      <MapIcon />
    </div>
  );
};

export default MapPinItem;
