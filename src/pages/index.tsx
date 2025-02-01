// Component Imports
import Header from "@/components/organisms/Header/Header";
import CleanCardSection from "@/components/organisms/CleanCardSection/CleanCardSection";
import ContentSection from "@/components/organisms/ContentSection/ContentSection";
import VideoSection from "@/components/organisms/VideoSection/VideoSection";
import WhyUs from "@/components/molecules/WhyUs/WhyUs";
import MapSection from "@/components/molecules/MapSection/MapSection";
import ContactSection from "@/components/organisms/ContactSection.tsx/ContactSection";
import ChoiceUs from "@/components/organisms/ChoiceUs/ChoiceUs";
import OurPricing from "@/components/organisms/OurPricing/OurPricing";
import SwiperSection from "@/components/organisms/SwiperSection/SwiperSection";
import Footer from "@/components/organisms/Footer/Footer";

import { ToastContainer } from "react-toastify";
import LaundrySection from "@/components/organisms/LaundrySection/LaundrySection";
import BusinessSection from "@/components/organisms/BusinessSection/BusinessSection";

export default function Home() {
  return (
    <div className="relative h-full w-full">
      <Header />
      <CleanCardSection />
      <VideoSection />
      <WhyUs />
      <BusinessSection />
      <LaundrySection />
      <ContentSection />
      <MapSection />
      <ChoiceUs />
      <OurPricing />
      <SwiperSection />
      <ContactSection />
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
