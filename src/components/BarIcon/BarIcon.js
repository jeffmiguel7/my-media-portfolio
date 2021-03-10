import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { SocialInstagram } from "styled-icons/typicons";
import { ThemeContext } from "../../contexts/ThemeStore";
import { iconStyle } from "./BarIconStyles";

const instaLightHover = css`
  &:hover {
    transform: scale(1.1);
    color: #db075f;
  }
`;
const instaDarkHover = css`
  color: #c8ccdb;
  &:visited {
      #c8ccdb;
    }
  &:hover {
    transform: scale(1.1);
    color: #ff618e;
  }
`;

const StyledLightInsta = styled(SocialInstagram)`
  ${iconStyle}
  ${instaLightHover}
`;

const StyledDarkInsta = styled(SocialInstagram)`
  ${iconStyle}
  ${instaDarkHover}
`;

const BarIcon = ({ size, onClick }) => {
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

export default BarIcon;
