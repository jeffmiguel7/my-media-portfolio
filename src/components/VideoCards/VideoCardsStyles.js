import styled from "styled-components";

const VideoDiv = styled.div`
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

const VideoFrame = styled.iframe`
  width: 25%;
  margin: 20px;
  border-radius: 15px;
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export { VideoDiv, VideoFrame };
