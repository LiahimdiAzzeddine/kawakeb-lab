
import React from "react";

const Video = () => {
  return (
    <div className="w-full h-[940px]  absolute bg-cover flex flex-col overflow-hidden items-center justify-start px-[15px]">
    <div className="w-[1250px] h-full z-[-10] absolute top-[-280px] flex flex-row items-start justify-center opacity-90">
      <video
        className="w-full h-auto rotate-180  overlayed-video"
        loop
        playsInline
        src="/navvudio-low.mp4"
        type="video/webm"
        autoPlay
        muted
      ></video>
    </div>
  </div>
  );
};

export default Video;
