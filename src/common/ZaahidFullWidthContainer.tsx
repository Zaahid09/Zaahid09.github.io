import React from "react";
import { useTheme } from "../ThemeContext";

interface ZaahidFullWidthContainerProps {
  children: React.ReactNode;
}

export function ZaahidFullWidthContainer({
  children,
}: ZaahidFullWidthContainerProps) {
  const { theme } = useTheme();
  const containerClass = `col-md-12 bg-${theme} text-${theme === "light" ? "dark" : "white"}`;
  return <div className={containerClass}>{children}</div>;
}
