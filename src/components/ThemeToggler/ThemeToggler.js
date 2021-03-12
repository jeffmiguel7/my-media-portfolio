import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { Moon } from "styled-icons/heroicons-solid";
import { Sunny } from "styled-icons/ionicons-solid";
import { ThemeContext } from "../../contexts/ThemeStore";
import Tooltip from "@material-ui/core/Tooltip";

const icon = css`
  color: ${(props) => props.theme.text};
  transition: transform 0.3s ease-in-out, color 0.1s ease-in-out;
  cursor: pointer;
`;

const sunHover = css`
  &:hover {
    transform: scale(1.1);
    color: #ffbf00;
  }
`;

const moonHover = css`
  &:hover {
    transform: scale(1.2);
    color: #5e34bf;
  }
`;

const StyledSun = styled(Sunny)`
  ${icon}
  ${sunHover}
`;

const StyledMoon = styled(Moon)`
  ${icon}
  ${moonHover}
`;

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      {theme === "dark" ? (
        <Tooltip title="Light Mode" placement="bottom">
          <StyledSun size={28} onClick={() => toggleTheme("light")} />
        </Tooltip>
      ) : (
        <Tooltip title="Dark Mode" placement="bottom">
          <StyledMoon size={28} onClick={() => toggleTheme("dark")} />
        </Tooltip>
      )}
    </>
  );
};

export default ThemeToggler;
