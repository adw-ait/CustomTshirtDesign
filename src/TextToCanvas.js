import React, { useContext, useState } from "react";
import { Home } from "./App";
import DeleteObject from "./DeleteObject";
import TextSettings from "./TextSettings";
import "./stylesheet/CanvasTextStyle.scss";

function TextToCanvas() {
  const { addTextToTshirt, ObjectSelected } = useContext(Home);
  const [text, settext] = useState("");

  return (
    <div className="addTextInput">
      <input
        className="input-box"
        type="text"
        value={text}
        onChange={(e) => {
          settext(e.target.value);
        }}
      />
      <button
        className="addTextBtn"
        onClick={() => {
          addTextToTshirt(text);
          settext("");
        }}
      >
        Add text
      </button>
      {<TextSettings />}
      {ObjectSelected && <DeleteObject />}
    </div>
  );
}

export default TextToCanvas;
