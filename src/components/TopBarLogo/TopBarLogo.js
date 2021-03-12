import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeStore";
import { StyledLink, StyledLogo } from "./TopBarStyles";
import MyLogo from "../../mm/mylogo.svg";
import MyDarkLogo from "../../mm/mylogo_dark.svg";

const LogoWrapper = ({ logo }) => {
  return (
    <StyledLink to="/">
      <StyledLogo src={logo} alt="Kiwi standing on oval" />
    </StyledLink>
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
