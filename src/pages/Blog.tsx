import React from "react";
import { useTheme } from "../ThemeContext";

export function Blog() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="container">
      <div
        className="row justify-content-center align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <div className="col-12 text-center">
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: 700,
              color: isDark ? "#fff" : "#111",
            }}
          >
            Coming Soon
          </h1>
          <p
            style={{
              color: isDark ? "#aaa" : "#666",
              fontSize: "1.1rem",
              marginTop: "12px",
            }}
          >
            This page is under construction. Check back later!
          </p>
        </div>
      </div>
    </div>
  );
}
