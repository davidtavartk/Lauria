import { useRef, useState } from "react";
import PlayIcon from "../../../../public/svgs/PlayIcon";

const VideoCardNoBackground = () => {
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
    <div className="m-auto size-full relative">
      <div className="size-full border-[16px] border-white shadow-custom ">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          controls={false}
          onEnded={handleVideoEnd}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
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

export default VideoCardNoBackground;
