import VideoSection from "@/components/organisms/VideoSection/VideoSection";
import WhyUs from "@/components/molecules/WhyUs/WhyUs";
import ContentChecks from "@/components/molecules/ContentChecks/ContentChecks";

const ContentSection = () => {
  return (
    <div className="mt-24 flex flex-col gap-28 px-4 sm:gap-24 md:gap-14 lg:px-24 lg-plus:flex-row lg-plus:gap-10">
      <div className="relative flex flex-1">
        <VideoSection />
      </div>
      <div className="flex flex-1 flex-col gap-7">
        <div className="gap-5">
          <WhyUs />
        </div>
        <div className="flex flex-1 flex-col gap-4 sm:flex-row">
          <ContentChecks />
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
