import React from "react";

const HistoryPanel = ({ history, onRestore, onClear }) => {
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
      <div className="grid grid-cols-2 gap-4">
        {history.map((palette, index) => (
          <button
            key={index}
            onClick={() => onRestore(palette)}
            className="p-2 rounded shadow-md text-white"
            style={{ backgroundColor: palette[0] }}
          >
            Restore
          </button>
        ))}
      </div>
    </div>
  );
};

export default HistoryPanel;