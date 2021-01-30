import React, { useState } from "react";

import ColorPicker from "./ColorPicker";
import ImagePicker from "./ImagePicker";

function Settings() {
  const tabs = { colorPicker: true, imagePicker: false };
  const [display, setdisplay] = useState(tabs);
  const toggleDisplay = (e) => {
    let tempDisplay = { ...display };
    switch (e) {
      case "color":
        tempDisplay = { ...tempDisplay, colorPicker: true, imagePicker: false };
        return setdisplay(tempDisplay);
      case "image":
        tempDisplay = { ...tempDisplay, colorPicker: false, imagePicker: true };
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
      </div>
      {display.colorPicker && <ColorPicker />}
      {display.imagePicker && <ImagePicker />}
    </div>
  );
}

export default Settings;
