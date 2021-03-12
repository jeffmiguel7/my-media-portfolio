import React from "react";
import { Image, ModalStyle } from "./ImgModalStyles";
import "react-modal-overlay/dist/index.css";

export default function ImgModal({ isOpen, setIsOpen, src }) {
  return (
    <ModalStyle
      show={isOpen}
      closeModal={() => setIsOpen(false)}
      className="modal"
    >
      <Image src={src} />
    </ModalStyle>
  );
}
