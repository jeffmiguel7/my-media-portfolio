import styled, { keyframes } from "styled-components";

const show = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}
`;

const CardFigure = styled.figure`
  z-index: 1;
  min-width: 300px;
  overflow: hidden;
  margin: 0 5px;
  animation: ${show} 0.8s ease;
`;

const CardImg = styled.img`
  width: 300px;
  height: 100%;
  left: 0;
  object-fit: cover;
  border-radius: 20px;
`;

export { CardFigure, CardImg };
