// Component Imports
import Header from "@/components/organisms/Header/Header";
import CleanCardSection from "@/components/organisms/CleanCardSection/CleanCardSection";
import ContentSection from "@/components/organisms/ContentSection/ContentSection";
import MapSection from "@/components/molecules/MapSection/MapSection";
import OurPricing from "@/components/organisms/OurPricing/OurPricing";
import SwiperSection from "@/components/organisms/SwiperSection/SwiperSection";
import Footer from "@/components/organisms/Footer/Footer";
import ContactSection from "@/components/organisms/ContactSection.tsx/ContactSection";
import ChoiceUs from "@/components/organisms/ChoiceUs/ChoiceUs";
import TeamSkillSection from "@/components/organisms/TeamSkillSection/TeamSkillSection";
import BusinessSection from "@/components/organisms/BusinessSection/BusinessSection";
import ServiceBox from "@/components/organisms/ServiceBox/ServiceBox";

import { ToastContainer } from "react-toastify";


export default function Home() {
  return (
    <div className="h-full w-full relative  max-w-[2340px] m-auto">
        <Header />
        <CleanCardSection />
        <ContentSection />
        <BusinessSection/>
        <ServiceBox/>
        <MapSection />
        <ChoiceUs />
        <OurPricing />
        <TeamSkillSection />
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
