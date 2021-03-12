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
import Tooltip from "@material-ui/core/Tooltip";

const InstaIcon = ({ size, onClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {theme === "dark" ? (
        <Tooltip title="Instagram" placement="bottom">
          <StyledDarkInsta size={size} onClick={onClick} />
        </Tooltip>
      ) : (
        <Tooltip title="Instagram" placement="bottom">
          <StyledLightInsta size={size} onClick={onClick} />
        </Tooltip>
      )}
    </>
  );
};

const PhotoIcon = ({ size }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {theme === "dark" ? (
        <Tooltip title="Photography" placement="bottom">
          <StyledLink to="/">
            <StyledDarkPhotos size={size} />
          </StyledLink>
        </Tooltip>
      ) : (
        <Tooltip title="Photography" placement="bottom">
          <StyledLink to="/">
            <StyledLightPhotos size={size} />
          </StyledLink>
        </Tooltip>
      )}
    </>
  );
};

const VideoIcon = ({ size }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {theme === "dark" ? (
        <Tooltip title="Videography" placement="bottom">
          <StyledLink to="/videos">
            <StyledDarkVideos size={size} />
          </StyledLink>
        </Tooltip>
      ) : (
        <Tooltip title="Videography" placement="bottom">
          <StyledLink to="/videos">
            <StyledLightVideos size={size} />
          </StyledLink>
        </Tooltip>
      )}
    </>
  );
};

export { InstaIcon, PhotoIcon, VideoIcon };
