import React from "react";
import { VideoDiv, VideoFrame } from "./VideoCardsStyles";

const VideoCards = ({ videos }) => {
  return (
    <VideoDiv>
      {videos.map((video, i) => (
        <VideoFrame
          key={i}
          width={video.width}
          src={video.src}
          allowFullScreen={video.allowFullScreen}
        />
      ))}
    </VideoDiv>
  );
};

export default VideoCards;
