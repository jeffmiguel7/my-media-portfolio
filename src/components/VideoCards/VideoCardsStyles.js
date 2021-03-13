import styled from "styled-components";

const makeBorder = (theme) => {
  if (theme.themeName === "dark") return `2px dashed #403939`;
};

const makeShadow = (theme) => {
  if (theme.themeName === "dark") return `5px 20px 35px #00000060`;
};

const VideoDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
`;

const VideoFrame = styled.iframe`
  width: 25vw;
  height: 40vh;
  border: none;
  border-radius: 10px;
  box-shadow: ${(props) => makeShadow(props.theme)};
  border: ${(props) => makeBorder(props.theme)};
  margin: 15px;

  @media (max-width: 1500px) {
    width: 30vw;
    height: 30vh;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export { VideoDiv, VideoFrame };
