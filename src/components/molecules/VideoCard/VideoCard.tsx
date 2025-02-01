import { useRef, useState } from "react";
import PlayIcon from "../../../../public/svgs/PlayIcon";

const VideoCard = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handlePlay = () => {
    if (videoRef.current) {
      console.log("Play button clicked");
      videoRef.current.play().catch((error) => {
        console.log("Error playing video:", error);
      });
    }
    setIsPlaying(true);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div className="m-auto size-full">
      <div className="size-5/6 bg-[#C4C4C4] md:size-3/4 lg-plus:size-[75%] xl:size-3/4" />
      <div className="absolute right-0 top-[128px] size-5/6 border-[15px] border-white bg-[#F3F3F3] shadow-custom md:size-3/4 lg-plus:size-[75%] xl:size-3/4">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          controls={false}
          onEnded={handleVideoEnd}
        >
          <source src="/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {!isPlaying && (
          <span
            className="absolute inset-0 m-auto flex size-[100px] cursor-pointer items-center justify-center rounded-full bg-primary shadow-custom"
            onClick={handlePlay}
          >
            <PlayIcon />
          </span>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
