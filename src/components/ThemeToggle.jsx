import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" || prefersDarkMode
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className="fixed top-4 left-4 p-2 bg-gray-200 dark:bg-gray-800 rounded-full shadow-md transition-all hover:scale-110 z-50"
    >
      <span className="text-xl">
        {darkMode ? "🌙" : "🌞"}
      </span>
    </button>
  );
};

export default ThemeToggle;