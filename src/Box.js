import React, { useState } from "react";
import "./Box.css";
const allColors = [
  "#FC0FC0",
  "#E0115F",
  "#FF6FFF",
  "#FDE6FA1",
  "#FF0090",
  "#FF66CC",
  "#FBAED2",
  "#FF69B4",
  "#FF00FF",
  "#F64A8A",
  "#DE3163",
  "#FFA6C9",
  "#FB607F",
  "#F19CBB",
  "#F987C5",
  "#FE5BAC",
  "#F81894",
  "#EC5578",
  "#FDB9C8",
  "#FCA3B7",
];
function Box() {
  let [color, setColor] = useState(
    () => allColors[Math.floor(Math.random() * allColors.length)]
  );
  const handleClick = () => {
    do {
      var newColor = allColors[Math.floor(Math.random() * allColors.length)];
    } while (newColor === color);
    setColor(newColor);
  };

  return (
    <div
      className="Box"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    ></div>
  );
}

export default Box;
