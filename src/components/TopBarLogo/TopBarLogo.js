import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeStore";
import { StyledLink, StyledLogo } from "./TopBarLogoStyles";
import MyLogo from "../../mm/mylogo.svg";
import MyDarkLogo from "../../mm/mylogo_dark.svg";
import Tooltip from "@material-ui/core/Tooltip";

const LogoWrapper = ({ logo }) => {
  return (
    <Tooltip title="Home" placement="bottom">
      <StyledLink to="/">
        <StyledLogo src={logo} alt="Kiwi standing on oval" />
      </StyledLink>
    </Tooltip>
  );
};

const TopBarLogo = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {theme === "dark" ? (
        <LogoWrapper logo={MyLogo} alt="JN Logo" />
      ) : (
        <LogoWrapper logo={MyDarkLogo} alt="JN Logo" />
      )}
    </>
  );
};

export default TopBarLogo;
