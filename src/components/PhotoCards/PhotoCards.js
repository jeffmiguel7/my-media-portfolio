import React, { useState } from "react";
import { CardImg, CardDiv, ConstructionZone } from "./PhotoCardsStyles";
import ImgModal from "../ImgModal/ImgModal";
import Footer from "../../components/Footer/Footer";

const PhotoCards = ({ imgs, numOfFiltered }) => {
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

          <Footer numOfFiltered={numOfFiltered} />
          <ImgModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            src={currSrc}
            dimensions={dimensions}
          />
        </>
      ) : (
        <ConstructionZone>
          Oof, these will be uploaded soon. ;)
        </ConstructionZone>
      )}
    </>
  );
};

export default PhotoCards;
