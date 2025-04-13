import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const GradientGenerator = () => {
  const [color1, setColor1] = useState("#ff7f50");
  const [color2, setColor2] = useState("#6a5acd");
  const [copied, setCopied] = useState(false);

  const gradientStyle = {
    background: `linear-gradient(to right, ${color1}, ${color2})`,
  };

  const gradientCode = `background: linear-gradient(to right, ${color1}, ${color2});`;

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      {/* <h3 className="text-2xl font-semibold mb-4">Gradient Generator</h3> */}
      <div className="flex gap-4 mb-4">
        <input
          type="color"
          value={color1}
          onChange={(e) => setColor1(e.target.value)}
          className="w-16 h-16 rounded-full cursor-pointer shadow-md"
        />
        <input
          type="color"
          value={color2}
          onChange={(e) => setColor2(e.target.value)}
          className="w-16 h-16 rounded-full cursor-pointer shadow-md"
        />
      </div>
      <div
        style={gradientStyle}
        className="w-full h-20 rounded-lg shadow-md mb-4"
      ></div>
      <div className="flex items-center gap-4">
        <CopyToClipboard text={gradientCode} onCopy={() => setCopied(true)}>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium transition hover:bg-blue-700">
            Copy Gradient Code
          </button>
        </CopyToClipboard>
        {copied && <span className="text-green-500">Copied!</span>}
      </div>
    </div>
  );
};

export default GradientGenerator;