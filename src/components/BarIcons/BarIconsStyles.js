import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { SocialInstagram } from "styled-icons/typicons";
import { PhotoLibrary } from "styled-icons/material";
import { CameraMovie } from "styled-icons/boxicons-solid";

const iconStyle = css`
  color: ${(props) => props.theme.text};
  transition: all 0.3s ease-in-out;
  padding-right: 1vw;
  cursor: pointer;

  @media (max-width: 768px) {
    padding-right: 5vw;
    &:focus {
      -webkit-tap-highlight-color: transparent;
    }
  }
`;

const instaLightHover = css`
  &:hover {
    transform: scale(1.1);
    color: #db075f;
  }
`;

const StyledLightInsta = styled(SocialInstagram)`
  ${iconStyle}
  ${instaLightHover}
`;

const instaDarkHover = css`
  &:hover {
    transform: scale(1.1);
    color: #ff618e;
  }
`;

const StyledDarkInsta = styled(SocialInstagram)`
  ${iconStyle}
  ${instaDarkHover}
`;

const StyledLink = styled(Link)`
  &:focus {
    -webkit-tap-highlight-color: transparent;
  }
`;

const photosLightHover = css`
  &:hover {
    transform: scale(1.1);
    color: #309cc7;
  }
`;

const StyledLightPhotos = styled(PhotoLibrary)`
  ${iconStyle}
  ${photosLightHover}
`;

const photosDarkHover = css`
  &:hover {
    transform: scale(1.1);
    color: #3ec5fa;
  }
`;

const StyledDarkPhotos = styled(PhotoLibrary)`
  ${iconStyle}
  ${photosDarkHover}
`;

const videosLightHover = css`
  &:hover {
    transform: scale(1.1);
    color: #d1621d;
  }
`;

const StyledLightVideos = styled(CameraMovie)`
  ${iconStyle}
  ${videosLightHover}
`;

const videosDarkHover = css`
  &:hover {
    transform: scale(1.1);
    color: #d1621d;
  }
`;

const StyledDarkVideos = styled(CameraMovie)`
  ${iconStyle}
  ${videosDarkHover}
`;

export {
  StyledLightInsta,
  StyledDarkInsta,
  StyledLink,
  StyledLightPhotos,
  StyledDarkPhotos,
  StyledLightVideos,
  StyledDarkVideos,
};
