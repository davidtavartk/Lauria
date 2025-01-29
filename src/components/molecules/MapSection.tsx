import Image from "next/image";
import { mapBackground } from "../../../public/images";
import MapPinItem from "../atoms/MapPinItem";

const MapSection = () => {
  return (
    <div className="m-auto w-full px-4 relative mt-[25px]">
      <Image
        src={mapBackground}
        alt="mapHero"
        layout="responsive"
        objectFit="cover"
        width={1600}
        height={800}
      />
      <MapPinItem className="left-[15%] top-[15%]"/>
      <MapPinItem className="left-[25%] bottom-[28%]"/>
      <MapPinItem className="left-[44%] bottom-[48%]"/>
      <MapPinItem className="right-[30%] top-[15%]"/>
      <MapPinItem className="right-[12%] bottom-[17%]"/>
    </div>
  );
};

export default MapSection;
