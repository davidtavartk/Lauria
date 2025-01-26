import React, { useRef, useState } from "react";
import PlayIcon from "../../../public/svgs/PlayIcon";

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
    <div className="relative m-auto w-full">
      <div className="h-[250px] max-h-[350px] w-4/5 max-w-[500px] bg-[#C4C4C4] sm:h-[390px] sm:w-[500px] md:w-4/6 md:h-[300px]" />
      <div className="shadow-custom absolute right-0 top-[150px] h-[250px] w-4/5 max-sm:max-w-[500px] border-[15px] border-white bg-[#F3F3F3] sm:h-[390px] sm:w-[500px] md:w-4/6 md:h-[300px]">
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
            className="shadow-custom absolute inset-0 m-auto flex size-[100px] cursor-pointer items-center justify-center rounded-full bg-primary"
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
