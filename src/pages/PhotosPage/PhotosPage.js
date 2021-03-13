import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import { ThemeStore } from "../../contexts/ThemeStore";
import Theme from "../../Theme";
import PhotosGallery from "../../components/PhotosGallery/PhotosGallery";
import { Container } from "../MainStyles";

const PhotosPage = () => {
  return (
    <>
      <ThemeStore>
        <Theme>
          <TopBar />
          <Container>
            <PhotosGallery />
          </Container>
        </Theme>
      </ThemeStore>
    </>
  );
};

export default PhotosPage;
