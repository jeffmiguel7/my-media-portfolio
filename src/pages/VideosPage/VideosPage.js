import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import { ThemeStore } from "../../contexts/ThemeStore";
import Theme from "../../Theme";
import { Container } from "../MainStyles";
import VideosGallery from "../../components/VideosGallery/VideosGallery";

const VideosPage = () => {
  return (
    <>
      <ThemeStore>
        <Theme>
          <TopBar />
          <Container>
            <VideosGallery />
          </Container>
        </Theme>
      </ThemeStore>
    </>
  );
};

export default VideosPage;
