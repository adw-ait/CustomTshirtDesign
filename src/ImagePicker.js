import React, { useContext } from "react";
import { Home } from "./App";
import { images } from "./images";
function ImagePicker() {
  const { canvas, addImage, removeImage, objectSelected } = useContext(Home);
  return (
    <div>
      <div className="addImage">
        <ul className="addImage">
          {images.map((img) => {
            return (
              <li className="imageList" key={img.url}>
                <img
                  className="definedImages"
                  onClick={() => {
                    addImage(img.url);
                  }}
                  src={img.url}
                  alt=""
                />
              </li>
            );
          })}
        </ul>
      </div>
      {objectSelected && (
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
      )}
    </div>
  );
}

export default ImagePicker;
