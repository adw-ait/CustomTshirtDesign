import React, { useState } from "react";

import ColorPicker from "./ColorPicker";
import ImagePicker from "./ImagePicker";
import TextToCanvas from "./TextToCanvas";

function Settings() {
  const tabs = { colorPicker: true, imagePicker: false, text: false };
  const [display, setdisplay] = useState(tabs);
  const toggleDisplay = (e) => {
    let tempDisplay = { ...display };
    switch (e) {
      case "color":
        tempDisplay = {
          ...tempDisplay,
          colorPicker: true,
          imagePicker: false,
          text: false,
        };
        return setdisplay(tempDisplay);
      case "image":
        tempDisplay = {
          ...tempDisplay,
          colorPicker: false,
          imagePicker: true,
          text: false,
        };
        return setdisplay(tempDisplay);
      case "text":
        tempDisplay = {
          ...tempDisplay,
          colorPicker: false,
          imagePicker: false,
          text: true,
        };
        return setdisplay(tempDisplay);
      default:
        return tempDisplay;
    }
  };
  return (
    <div className="tabSettings">
      <div className="buttons">
        <button
          className="tabButtons"
          id="color"
          onClick={(e) => {
            toggleDisplay(e.target.id);
          }}
        >
          Color
        </button>
        <button
          className="tabButtons"
          id="image"
          onClick={(e) => {
            toggleDisplay(e.target.id);
          }}
        >
          Add Image
        </button>
        <button
          className="tabButtons"
          id="text"
          onClick={(e) => {
            toggleDisplay(e.target.id);
          }}
        >
          Add Text
        </button>
      </div>
      {display.colorPicker && <ColorPicker />}
      {display.imagePicker && <ImagePicker />}
      {display.text && <TextToCanvas />}
    </div>
  );
}

export default Settings;
