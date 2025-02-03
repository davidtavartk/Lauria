import { useRef, useState } from "react";
import PlayIcon from "../../../../public/svgs/PlayIcon";

const VideoCard2 = () => {
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
    <div className="relative w-full flex justify-center">
      <div className="absolute top-[-200px] flex justify-center items-center w-[290px] h-[290px] sm:w-[718px] sm:h-[500px] xl:h-[710px] xl:w-[550px]  lg:h-[710px] lg:w-[420px] border-[15px] border-white bg-[#C4C4C4]">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          controls={false}
          onEnded={handleVideoEnd}
        >
          <source src="/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {!isPlaying && (
          <span
            className="absolute flex items-center justify-center size-[100px] cursor-pointer rounded-full shadow-custom bg-primary"
            onClick={handlePlay}
          >
            <PlayIcon />
          </span>
        )}
      </div>
    </div>
  );
};

export default VideoCard2;
