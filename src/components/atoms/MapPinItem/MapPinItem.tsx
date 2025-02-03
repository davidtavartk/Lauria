import { MapPinItemProps } from "@/types/propTypes";
import MapIcon from "../../../../public/svgs/MapIcon";

const MapPinItem = ({ className }: MapPinItemProps) => {
  return (
    <div
      className={`absolute flex items-center justify-center rounded-full bg-primary p-1 xs:p-2 sm:p-3 md:p-4 lg:p-[12px] xl:p-[16px] ${className}`}
    >
      <MapIcon />
    </div>
  );
};

export default MapPinItem;
