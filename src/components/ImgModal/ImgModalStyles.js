import styled from "styled-components";
import { Modal } from "react-modal-overlay";

const Image = styled.img`
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 -65px 0 -50px;
  }
`;

const ModalStyle = styled(Modal)`
  padding-top: 140vw;
  @media (max-width: 768px) {
    padding-top: 350vh;
  }
`;

export { Image, ModalStyle };
