import React, { useContext } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { ThemeContext } from "./contexts/ThemeStore";

const themes = {
  dark: {
    themeName: "dark",
    background: "#202024",
    title: "#6495ed",
    text: "#e3caaa",
  },
  light: {
    themeName: "light",
    background: "#fffcfa",
    title: "#ff6347",
    text: "#1c1f19",
  },
};

const GlobalStyles = createGlobalStyle`
  body {
      background-color: ${(props) => props.theme.background};
      overflow-y: scroll;
      scroll-behavior: smooth;
  }
`;
const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
