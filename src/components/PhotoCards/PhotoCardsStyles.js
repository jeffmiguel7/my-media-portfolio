import styled, { keyframes } from "styled-components";

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 80vw;
  max-height: 500vh;
  align-content: center;
  margin-top: 2vw;
  transition: opacity 0.4s ease-in-out;

  &:hover img {
    opacity: 0.4;
  }

  &:hover img:hover {
    opacity: 1;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    height: 100vw;
    align-content: inherit;
    max-height: 800px;
    justify-content: center;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
}`;

const CardImg = styled.img`
  width: 25%;
  margin: 20px;
  border-radius: 15px;
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
  animation: ${fadeIn} 1s;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export { CardImg, CardDiv };
