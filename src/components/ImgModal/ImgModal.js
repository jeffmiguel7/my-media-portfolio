import React from "react";
import { Image, StyledModal } from "./ImgModalStyles";
import "react-modal-overlay/dist/index.css";

export default function ImgModal({ isOpen, setIsOpen, src, dimensions }) {
  return (
    <StyledModal
      show={isOpen}
      closeModal={() => setIsOpen(false)}
      dimensions={dimensions}
    >
      <Image src={src} dimensions={dimensions} />
    </StyledModal>
  );
}
