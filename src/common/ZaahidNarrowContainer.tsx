import React from "react";
import { useTheme } from "../ThemeContext";

interface ZaahidNarrowContainerProps {
  children: React.ReactNode;
}

export function ZaahidNarrowContainer({
  children,
}: ZaahidNarrowContainerProps) {
  const { theme } = useTheme();
  const containerClass = `col-md-4 ${theme === "light" ? "bg-light text-dark" : "bg-dark text-white"}`;
  return <div className={containerClass}>{children}</div>;
}
