import React, { useContext } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { ThemeContext } from "./contexts/ThemeStore";

const themes = {
  dark: {
    background: "#242020",
    title: "#6495ed",
    text: "#e8b1ac",
  },
  light: {
    background: "#fffcfa",
    title: "#ff6347",
    text: "#1c1f19",
  },
};

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');  
    
    body {
        margin:0;
        padding:0;
        transition: all 0.5s;
        font-family: 'Playfair Display', serif;
        background-color: ${(props) => props.theme.background};
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
