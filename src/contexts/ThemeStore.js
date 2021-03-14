import React, { useState, useEffect } from "react";

const ThemeContext = React.createContext();

const ThemeStore = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    global.window.__setPreferredTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    global.window.__onThemeChange = setTheme;
  }, []);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeStore, ThemeContext };
