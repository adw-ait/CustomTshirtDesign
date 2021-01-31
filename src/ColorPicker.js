import React, { useContext, useState } from "react";
import { Home } from "./App";
import { HexColorPicker } from "react-colorful";
import "react-colorful/dist/index.css";
import ClipboardJS from "clipboard";
function ColorPicker() {
  const { changeColor, tshirtProps, changeColorText } = useContext(Home);
  const [copyColor, setcopyColor] = useState("");
  const copyText = (e) => {
    new ClipboardJS(".copyBtn");
  };
  return (
    <div>
      <HexColorPicker color={tshirtProps} onChange={changeColor} />
      <h3>
        Current : <span id="copyThis">{tshirtProps}</span>
        <button
          className="copyBtn"
          data-clipboard-target="#copyThis"
          onClick={(e) => copyText(e)}
          style={{ marginLeft: "5px" }}
        >
          copy
        </button>
      </h3>
      <div>
        <input
          type="text"
          value={copyColor}
          onChange={(e) => {
            setcopyColor(e.target.value);
          }}
        />
        <button
          style={{ marginLeft: "-20%" }}
          onClick={() => {
            changeColorText(copyColor);
          }}
        >
          Change
        </button>
      </div>
    </div>
  );
}

export default ColorPicker;
