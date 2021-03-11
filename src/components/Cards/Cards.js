import React, { useState, useContext } from "react";
import { FilterUl, FilterLi } from "./../Gallery/GalleryStyles";
import { CardFigure, CardImg } from "./CardsStyles";
import { ThemeContext } from "../../contexts/ThemeStore";

const Cards = ({ imgs }) => (
  <FilterUl>
    {imgs.map((img, i) => (
      <FilterLi key={i}>
        <CardFigure>
          <CardImg src={img.src} alt={img.author} />
        </CardFigure>
      </FilterLi>
    ))}
  </FilterUl>
);

export default Cards;
