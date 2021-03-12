import React, { useState } from "react";
import { CardImg, CardDiv } from "./PhotoCardsStyles";
import ImgModal from "../ImgModal/ImgModal";

const PhotoCards = ({ imgs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currSrc, setCurrSrc] = useState("");

  const handleModal = (e) => {
    e.preventDefault();
    setCurrSrc(e.target.getAttribute("src"));
    setIsOpen(true);
  };

  return (
    <>
      <CardDiv>
        {imgs.map((img, i) => (
          <CardImg
            key={i}
            src={img.src}
            alt={img.author}
            onClick={(e) => handleModal(e)}
          />
        ))}
      </CardDiv>
      <ImgModal isOpen={isOpen} setIsOpen={setIsOpen} src={currSrc} />
    </>
  );
};

export default PhotoCards;
