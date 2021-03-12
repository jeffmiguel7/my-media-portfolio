import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeStore";
import {
  StyledLightInsta,
  StyledDarkInsta,
  StyledLink,
  StyledLightPhotos,
  StyledDarkPhotos,
  StyledLightVideos,
  StyledDarkVideos,
} from "./BarIconsStyles";

const InstaIcon = ({ size, onClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {theme === "dark" ? (
        <StyledDarkInsta size={size} onClick={onClick} />
      ) : (
        <StyledLightInsta size={size} onClick={onClick} />
      )}
    </>
  );
};

const PhotoIcon = ({ size }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {theme === "dark" ? (
        <StyledLink to="/">
          <StyledDarkPhotos size={size} />
        </StyledLink>
      ) : (
        <StyledLink to="/">
          <StyledLightPhotos size={size} />
        </StyledLink>
      )}
    </>
  );
};

const VideoIcon = ({ size }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {theme === "dark" ? (
        <StyledLink to="/videos">
          <StyledDarkVideos size={size} />
        </StyledLink>
      ) : (
        <StyledLink to="/videos">
          <StyledLightVideos size={size} />
        </StyledLink>
      )}
    </>
  );
};

export { InstaIcon, PhotoIcon, VideoIcon };
