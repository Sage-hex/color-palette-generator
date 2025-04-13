import React from "react";

const HistoryPanel = ({ history = [], onRestore = () => {}, onClear = () => {} }) => {
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">History</h3>
        {history.length > 0 && (
          <button
            onClick={onClear}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Clear History
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {history.map((palette, index) => (
          <button
            key={index}
            onClick={() => onRestore(palette)}
            className="p-2 rounded shadow-md transition-all hover:scale-105"
            style={{
              background: `linear-gradient(90deg, ${Object.values(palette).flat().slice(0, 3).join(", ")})`,
              color: "#fff",
            }}
            aria-label={`Restore palette ${index + 1}`}
          >
            <div className="text-sm font-medium">Restore</div>
            <div className="flex gap-1 mt-1">
              {Object.values(palette).flat().slice(0, 3).map((color, i) => (
                <span
                  key={i}
                  className="w-4 h-4 rounded-full border"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HistoryPanel;
