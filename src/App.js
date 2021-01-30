import React, { createContext, useEffect, useState } from "react";
import "./style.css";
import TshirtContainer from "./TshirtContainer";
import { fabric } from "fabric";
import Settings from "./Settings";

export const Home = createContext();

function App() {
  const [tshirtProps, settshirtProps] = useState("#62959c");

  const [canvas, setCanvas] = useState();

  const [objectSelected, setobjectSelected] = useState(false);

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  /** INITIALIZE CANVAS */
  const initCanvas = () =>
    new fabric.Canvas("tcanvas", {
      height: 400,
      width: 200,
    });

  /** ADD IMAGE TO CANVAS */
  const addImage = (url) => {
    new fabric.Image.fromURL(url, (img) => {
      img.scaleToHeight(200);
      img.scaleToWidth(200);
      canvas.add(img);

      canvas.renderAll();
    });
  };

  /** CHANGE TSHIRT COLOR */
  const changeColor = (e) => {
    let temp = e;
    settshirtProps(temp);
  };

  /** REMOVE SELECTED IMAGE FROM CANVAS */
  const removeImage = (canvi) => {
    canvi.remove(canvi.getActiveObject());
  };

  /** HANDLE SELECTION */

  if (canvas) {
    canvas.on({
      "selection:created": () => setobjectSelected(!objectSelected),
      "selection:cleared": () => setobjectSelected(!objectSelected),
    });
  }

  return (
    <div className="container">
      <Home.Provider
        value={{
          tshirtProps,
          canvas,
          addImage,
          changeColor,
          removeImage,
          objectSelected,
        }}
      >
        <TshirtContainer />
        <Settings />
      </Home.Provider>
    </div>
  );
}

export default App;
