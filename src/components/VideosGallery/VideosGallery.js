import React from "react";
import Gallery from "../../components/Gallery/Gallery";
import VideoCards from "../../components/VideoCards/VideoCards";

const videos = [
  {
    src: "https://www.youtube.com/embed/mnPI9NaCygI",
    allowFullScreen: "true",
  },
  {
    src: "https://www.youtube.com/embed/IvazAJiTu3k",
    allowFullScreen: "true",
  },
];

const VideosGallery = () => {
  return (
    <Gallery title={"VIDEO GALLERY"}>
      <VideoCards videos={videos} />
    </Gallery>
  );
};

export default VideosGallery;
