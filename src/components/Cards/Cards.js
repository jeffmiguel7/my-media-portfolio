import React from "react";
import { CardImg, CardDiv } from "./CardsStyles";

const Cards = ({ imgs }) => (
  <CardDiv>
    {imgs.map((img, i) => (
      <CardImg key={i} src={img.src} alt={img.author} />
    ))}
  </CardDiv>
);

export default Cards;
