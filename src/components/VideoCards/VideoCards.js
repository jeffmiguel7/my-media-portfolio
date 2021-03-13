import React from "react";
import { VideoDiv, VideoFrame } from "./VideoCardsStyles";

const VideoCards = ({ videos }) => {
  const numOfVideos = videos.length;
  return (
    <VideoDiv numOfVideos={numOfVideos}>
      {videos.map((video, i) => (
        <VideoFrame
          key={i}
          src={video.src}
          allowFullScreen={video.allowFullScreen}
        />
      ))}
    </VideoDiv>
  );
};

export default VideoCards;
