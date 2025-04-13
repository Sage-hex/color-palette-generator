import React from "react";

const ExportButton = ({ colors }) => {
  const downloadPalette = () => {
    const json = JSON.stringify(colors, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "palette.json";
    link.click();
  };

  return (
    <button
      onClick={downloadPalette}
      className="px-4 py-2 bg-green-600 text-white rounded font-medium transition hover:bg-green-700"
    >
      Download Palette
    </button>
  );
};

export default ExportButton;