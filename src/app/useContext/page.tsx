"use client";
import React from "react";
import { ThemeProvider } from "./themeProvider";
import ThemeButton from "./themeButton";

export default function Page() {
  return (
    <ThemeProvider>
      <ThemeButton />
    </ThemeProvider>
  );
}
