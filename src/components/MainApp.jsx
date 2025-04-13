import React, { useState, useEffect } from "react";
import ColorPicker from "./ColorPicker";
import ColorPalette from "./ColorPalette";
import ThemeToggle from "./ThemeToggle";
import GradientGenerator from "./GradientGenerator";
import HistoryPanel from "./HistoryPanel";
import ExportButton from "./ExportButton";

const MainApp = () => {
  const [colors, setColors] = useState(JSON.parse(localStorage.getItem("colors")) || {});
  const [history, setHistory] = useState(JSON.parse(localStorage.getItem("history")) || []);

  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colors));
    localStorage.setItem("history", JSON.stringify(history));
  }, [colors, history]);

  const handleGenerate = (newColors) => {
    setColors(newColors);

    const newPaletteSignature = JSON.stringify(newColors);

    const isDuplicate = history.some((entry) => JSON.stringify(entry) === newPaletteSignature);

    if (!isDuplicate) {
      setHistory((prev) => [...prev, newColors]);
    }
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("history");
  };

  const handleRestore = (palette) => {
    setColors(palette);
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-center my-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 font-inter">
          🎨 Generate Your Palette :)
        </h2>
        <ThemeToggle />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Pick a Base Color</h3>
          <ColorPicker onGenerate={handleGenerate} />
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Generated Palette</h3>
          <ColorPalette colors={colors} />
        </div>
      </div>

      <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4 font-inter">Gradient Generator</h3>
        <GradientGenerator />
      </div>

      <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <HistoryPanel history={history} onRestore={handleRestore} onClear={clearHistory} />
      </div>

      <div className="mt-8 flex justify-center">
        <ExportButton colors={colors} />
      </div>
    </div>
  );
};

export default MainApp;
