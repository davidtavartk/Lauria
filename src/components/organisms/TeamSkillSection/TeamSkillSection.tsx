import SliderContent from "@/components/molecules/SliderContent/SliderContent";
import VideoElement from "@/components/molecules/VideoElement/VideoElement";

const TeamSkillSection = () => {
  return (
    <div className="bg-background-overlay  max-h-[80%] pb-10 lg-plus:pb-10">
      <div className="mt-36 flex flex-col px-4 gap-0 lg:px-24 lg-plus:flex-row lg-plus:gap-10">
        <div className="relative flex  h-[750px] flex-1 top-[-100px]">
          <VideoElement />
        </div>
        <SliderContent />
      </div>
    </div>
  );
};

export default TeamSkillSection;
