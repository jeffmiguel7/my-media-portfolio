import React from "react";
import { StyledContainer, Title } from "./GalleryStyles";
import ToTopBtn from "../../components/BackToTop/ToTop";

const Gallery = ({ title, children }) => {
  return (
    <StyledContainer>
      <Title>{title}</Title>
      <ToTopBtn />
      {children}
    </StyledContainer>
  );
};

export default Gallery;
