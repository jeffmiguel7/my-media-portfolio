import React, { useState, useEffect } from "react";

const ThemeContext = React.createContext();

const ThemeStore = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = (theme) => {
    setTheme(theme);
    setMode(theme);
  };

  const setMode = (theme) => {
    window.localStorage.setItem("theme", theme);
    setTheme(theme);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeStore, ThemeContext };
