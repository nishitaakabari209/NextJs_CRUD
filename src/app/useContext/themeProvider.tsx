"use client";
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext<any>(null);
export function ThemeProvider({children}: {children: React.ReactNode}) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((p)=>(p ==="light"?"dark" :"light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export function useTheme() {
  return useContext(ThemeContext);
}
