import React, { useContext } from "react";
import { Home } from "./App";
import { colors } from "./Colors";
import { images } from "./images";

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
        <ul className="addImage">
          {images.map((img) => {
            return (
              <li className="imageList" key={img.url}>
                <img
                  className="definedImages"
                  onClick={() => {
                    addImage(canvas, img.url);
                  }}
                  src={img.url}
                  alt=""
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="deleteImage">
        <button
          className="deleteBtn"
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
