import Image from "next/image";
import { mapBackground } from "../../../public/images";

const MapSection = () => {
  return (
    <div className="m-auto w-full px-4">
      <Image src={mapBackground} alt="mapHero" width={800} height={800} />
    </div>
  );
};

export default MapSection;
