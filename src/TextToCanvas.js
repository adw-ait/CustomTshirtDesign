import React, { useContext, useState } from "react";
import { Home } from "./App";

function TextToCanvas() {
  const { addTextToTshirt } = useContext(Home);
  const [text, settext] = useState("");
  return (
    <div style={{ marginTop: "20px" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          settext(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addTextToTshirt(text);
        }}
      >
        Add text
      </button>
    </div>
  );
}

export default TextToCanvas;
