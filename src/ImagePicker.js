import React, { useContext } from "react";
import { Home } from "./App";
import DeleteObject from "./DeleteObject";
import { images } from "./images";
function ImagePicker() {
  const { addImage, ObjectSelected } = useContext(Home);
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
      {ObjectSelected && <DeleteObject />}
    </div>
  );
}

export default ImagePicker;
