import React, { useContext } from "react";
import { Home } from "./App";
import "./stylesheet/textSettings.scss";

function TextSettings() {
  const { textStyles } = useContext(Home);

  return (
    <div>
      <h2 style={{ fontFamily: "monospace" }}>Text Styles</h2>
      <div className="text-style-container">
        <button className="btn-bold" id="bold-text" onClick={textStyles}>
          Bold
        </button>
        <br />
        <button className="btn-italic" id="italic-text" onClick={textStyles}>
          Italic
        </button>
        <br />
        <button
          className="btn-underline"
          id="underline-text"
          onClick={textStyles}
        >
          underline
        </button>
        <br />
        <button
          className="btn-overline"
          id="overline-text"
          onClick={textStyles}
        >
          overline
        </button>
      </div>
    </div>
  );
}

export default TextSettings;
