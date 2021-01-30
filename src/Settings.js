import React, { useContext } from "react";
import { Home } from "./App";
import { colors } from "./Colors";
import "./style.css";
function Settings() {
  const { canvas, addImage, changeColor, removeImage } = useContext(Home);
  return (
    <div className="colorPicker">
      <ul>
        {colors.map((c) => {
          return (
            <li
              key={c.id}
              className="color"
              onClick={(e) => changeColor({ color: c.color })}
              style={{ backgroundColor: c.color }}
            ></li>
          );
        })}
      </ul>
      <div className="addImage">
        <button
          onClick={() => {
            addImage(canvas);
          }}
        >
          Add image
        </button>
      </div>
      <div className="deleteImage">
        <button
          onClick={() => {
            removeImage(canvas);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Settings;
