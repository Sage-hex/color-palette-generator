import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { motion } from "framer-motion";

const ColorPalette = ({ colors }) => {
  const [copiedColors, setCopiedColors] = useState({});

  const handleCopy = (color) => {
    setCopiedColors((prev) => ({
      ...prev,
      [color]: true, // Mark this specific color as copied
    }));

    // Reset the "Copied!" message after 2 seconds
    setTimeout(() => {
      setCopiedColors((prev) => ({
        ...prev,
        [color]: false, // Reset the copied state for this color
      }));
    }, 2000);
  };

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
      {Object.entries(colors).map(([scheme, palette]) => (
        <div key={scheme} className="flex flex-col items-center">
          {/* Palette Name in Italics */}
          <h3 className="text-sm font-bold mb-2 text-center capitalize">{scheme}</h3>
          <div className="grid grid-cols-2 gap-2 w-full">
            {palette.map((color, index) => (
              <motion.div
                key={index}
                className="relative w-full"
                style={{ paddingTop: "100%" }} // Creates a 1:1 aspect ratio
              >
                <div
                  className="absolute inset-0 rounded-lg shadow-md overflow-hidden flex justify-center items-center"
                  style={{ backgroundColor: color }}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Copy Button */}
                  <CopyToClipboard text={color} onCopy={() => handleCopy(color)}>
                    <button className="absolute inset-0 w-full h-full text-white opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-50 flex justify-center items-center">
                      Copy
                    </button>
                  </CopyToClipboard>

                  {/* Copied Message */}
                  {copiedColors[color] && (
                    <div className="absolute inset-0 flex justify-center items-center text-white bg-black bg-opacity-75">
                      Copied!
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;