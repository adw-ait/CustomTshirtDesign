import React, { useContext } from "react";
import { Home } from "./App";
import { HexColorPicker } from "react-colorful";
import "react-colorful/dist/index.css";
function ColorPicker() {
  const { changeColor, tshirtProps } = useContext(Home);
  return (
    <div>
      <HexColorPicker color={tshirtProps} onChange={changeColor} />
    </div>
  );
}

export default ColorPicker;
