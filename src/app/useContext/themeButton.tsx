"use client";
import React from "react";
import { useTheme } from "./themeProvider"; 

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`p-4 ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
      <h2 className="text-xl mb-2">Current Theme: {theme}</h2>
      <button onClick={toggleTheme} className="px-4 py-2 bg-blue-500 text-dark rounded">
        Toggle Theme
      </button>
    </div>
  );
}
