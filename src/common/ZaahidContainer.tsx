import React from "react";
import { useTheme } from "../ThemeContext";

interface ZaahidContainerProps {
  children: React.ReactNode;
}

export function ZaahidContainer({ children }: ZaahidContainerProps) {
  const { theme } = useTheme();
  const containerClass = `container shadow-sm Zaahid-container bg-${theme} text-${theme === "light" ? "dark" : "white"}`;
  return <div className={containerClass}>{children}</div>;
}
