import Image from "next/image";
import { mapBackground } from "../../../../public/images";
import MapPinItem from "@/components/atoms/MapPinItem/MapPinItem";

const MapSection = () => {
  return (
    <div className="m-auto w-full px-4 relative mt-32 lg:px-24">
      <Image
        src={mapBackground}
        alt="mapHero"
        style={{ objectFit: "cover" }}
        width={1600}
        height={800}
      />
      <MapPinItem className="left-[15%] top-[15%] lg:left-[20%]"/>
      <MapPinItem className="left-[25%] bottom-[28%] lg:left-[28%]"/>
      <MapPinItem className="left-[44%] bottom-[48%] lg:left-[47%]"/>
      <MapPinItem className="right-[30%] top-[15%] lg:right-[33%]"/>
      <MapPinItem className="right-[12%] bottom-[17%] lg:right-[16%]"/>
    </div>
  );
};

export default MapSection;
