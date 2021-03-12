import styled from "styled-components";

const makeBorder = (theme) => {
  if (theme.themeName === "dark") return `2px dashed #403939`;
};

const makeShadow = (theme) => {
  if (theme.themeName === "dark") return `5px 20px 35px #00000060`;
};

const VideoDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin: 10px;
`;

const VideoFrame = styled.iframe`
  width: 40w;
  height: 30vh;
  border: none;
  border-radius: 15px;
  box-shadow: ${(props) => makeShadow(props.theme)};
  border: ${(props) => makeBorder(props.theme)};
  margin: 20px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export { VideoDiv, VideoFrame };
