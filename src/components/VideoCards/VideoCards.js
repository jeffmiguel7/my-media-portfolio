import React from "react";
import { VideoDiv, VideoFrame } from "./VideoCardsStyles";
import Footer from "../../components/Footer/Footer";

const VideoCards = ({ videos }) => {
  const numOfVideos = videos.length;
  return (
    <>
      <VideoDiv numOfVideos={numOfVideos}>
        {videos.map((video, i) => (
          <VideoFrame key={i} src={video.src} allowFullScreen={true} />
        ))}
      </VideoDiv>
      <Footer />
    </>
  );
};

export default VideoCards;
