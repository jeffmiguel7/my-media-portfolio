import React from "react";
import { StyledContainer, Title } from "./GalleryStyles";
import ToTopBtn from "../../components/BackToTop/ToTop";
import Footer from "../../components/Footer/Footer";

const Gallery = ({ title, children }) => {
  return (
    <StyledContainer>
      <Title>{title}</Title>
      <ToTopBtn />
      {children}
      <Footer />
    </StyledContainer>
  );
};

export default Gallery;
