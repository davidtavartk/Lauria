import React from "react";
import VideoCard from "../molecules/VideoCard";

const VideoSection = () => {
  return (
    <div className="relative px-4 md:w-1/2">

      <div className="m-auto mt-[50px] px-4">
        <VideoCard />
      </div>
    </div>
  );
};

export default VideoSection;
