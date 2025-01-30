import CleanCard from '@/components/atoms/CleanCard/CleanCard';
import HandClean from '../../../../public/svgs/HandClean';
import SanitizeIcon from '../../../../public/svgs/SanitizeIcon';

const CleanCardSection = () => {
    return (
        <div className="m-auto flex w-full flex-col justify-around gap-6 sm:flex-row mt-[260px] px-4 xl:w-1/2 xl:mt-8 xl:mr-auto xl:m-0 lg:px-24">
        <CleanCard icon={<HandClean />} title="Fullhand Clean">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </CleanCard>
        <CleanCard icon={<SanitizeIcon />} title="Sanitizer Sterils">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </CleanCard>
      </div>
    );
};

export default CleanCardSection;