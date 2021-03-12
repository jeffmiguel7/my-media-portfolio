import React from "react";
import { StyledContainer, Title } from "./GalleryStyles";

const Gallery = ({ title, children }) => {
  return (
    <StyledContainer>
      <Title>{title}</Title>
      {children}
    </StyledContainer>
  );
};

export default Gallery;
