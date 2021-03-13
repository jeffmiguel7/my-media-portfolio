import React, { useState } from "react";
import { CardImg, CardDiv, ConstructionZone } from "./PhotoCardsStyles";
import ImgModal from "../ImgModal/ImgModal";

const PhotoCards = ({ imgs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currSrc, setCurrSrc] = useState("");
  const [dimensions, setDimensions] = useState({});
  const imgCount = imgs.length;

  const handleModal = (e) => {
    e.preventDefault();
    setCurrSrc(e.target.getAttribute("src"));
    setIsOpen(true);
  };

  const handleImgLoad = ({ target: img }) => {
    setDimensions({
      height: img.offsetHeight,
      width: img.offsetWidth,
    });
  };

  return (
    <>
      {imgCount ? (
        <>
          <CardDiv imgCount={imgCount}>
            {imgs.map((img, i) => (
              <CardImg
                key={i}
                src={img.src}
                onClick={(e) => handleModal(e)}
                onMouseUp={handleImgLoad}
              />
            ))}
          </CardDiv>
          <ImgModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            src={currSrc}
            dimensions={dimensions}
          />
        </>
      ) : (
        <ConstructionZone>
          This section is still under construction.
        </ConstructionZone>
      )}
    </>
  );
};

export default PhotoCards;
