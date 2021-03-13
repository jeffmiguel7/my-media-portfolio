import styled from "styled-components";
import { Modal } from "react-modal-overlay";

const addWidthCSS = (props) => {
  if (props.dimensions.width > props.dimensions.height)
    return `& > div {
    padding-right: 12.5vw;
    overflow: hidden;
  }`;
  else return null;
};

const Image = styled.img`
  width: ${(props) =>
    props.dimensions.width > props.dimensions.height ? "152%" : "100%"};
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 -65px 0 -50px;
  }
`;

const StyledModal = styled(Modal)`
  padding-top: 140vw;
  ${(props) => addWidthCSS(props)}

  @media (max-width: 1500px) {
    padding-top: 400vh;
    & > div {
      overflow: hidden;
    }
  }
  @media (max-width: 768px) {
    padding-top: 350vh;
    & > div {
      padding-right: 20px;
      overflow: none;
    }
  }
`;

export { Image, StyledModal };
