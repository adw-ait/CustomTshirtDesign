import React, { useContext } from "react";
import { Home } from "./App";

function DeleteObject() {
  const { canvas, removeImage } = useContext(Home);
  return (
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
  );
}

export default DeleteObject;
