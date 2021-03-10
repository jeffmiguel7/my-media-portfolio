import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../contexts/ThemeStore";

import MyLogo from "../../mm/mylogo.svg";
import MyDarkLogo from "../../mm/mylogo_dark.svg";

const LinkStyle = styled.a`
  height: 2em;
  width: 2em;

  @media (max-width: 768px) {
    height: 8vh;
    width: 8vw;

    &:focus {
      -webkit-tap-highlight-color: transparent;
    }
  }
`;

const LogoStyle = styled.img`
  height: 100%;
  width: 100%;
  opacity: 85%;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    padding-left: 7vw;
  }
`;

const LogoWrapper = ({ logo }) => {
  return (
    <LinkStyle href="./">
      <LogoStyle src={logo} alt="Kiwi standing on oval" />
    </LinkStyle>
  );
};

const TopBarLogo = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {theme === "dark" ? (
        <LogoWrapper logo={MyLogo} alt="Kiwi standing on oval" />
      ) : (
        <LogoWrapper logo={MyDarkLogo} alt="Kiwi standing on oval" />
      )}
    </>
  );
};

export default TopBarLogo;
