import CleanCard from '../atoms/CleanCard';
import HandClean from '../../../public/svgs/HandClean';
import SanitizeIcon from '../../../public/svgs/SanitizeIcon';

const CleanCardSection = () => {
    return (
        <div className="m-auto flex w-full flex-col justify-around gap-6 sm:flex-row md:mt-[260px] px-4 lg-plus:w-1/2 lg-plus:mt-8 lg-plus:mr-auto lg-plus:m-0 lg:px-24">
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