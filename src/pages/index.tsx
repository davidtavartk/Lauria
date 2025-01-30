// Component Imports
import Header from "@/components/organisms/Header/Header";
import CleanCardSection from "@/components/organisms/CleanCardSection/CleanCardSection";
import ContentSection from "@/components/organisms/ContentSection/ContentSection";
import MapSection from "@/components/molecules/MapSection/MapSection";
import OurPricing from "@/components/organisms/OurPricing/OurPricing";
import SwiperSection from "@/components/organisms/SwiperSection/SwiperSection";
import Footer from "@/components/organisms/Footer/Footer";

import { ToastContainer } from "react-toastify";


export default function Home() {
  return (
    <div className="relative h-full w-full">
      <Header />
      <CleanCardSection />
      <ContentSection />
      <MapSection />
      <OurPricing />
      <SwiperSection />
      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  );
}
