import React, { useState } from "react";
import { ChromePicker } from "react-color";
import { generateColors } from "../utils/generateColors";

const ColorPicker = ({ onGenerate }) => {
  const [color, setColor] = useState("#ffffff");

  const handleChange = (newColor) => {
    setColor(newColor.hex);
    onGenerate(generateColors(newColor.hex));
  };

  return (
    <div className="flex flex-col items-center p-4">
      <ChromePicker color={color} onChange={handleChange} />
    </div>
  );
};

export default ColorPicker;