import React, { createContext, useEffect, useState } from "react";
import "./style.css";
import TshirtContainer from "./TshirtContainer";
import { fabric } from "fabric";
import Settings from "./Settings";

export const Home = createContext();

function App() {
  const [tshirtProps, settshirtProps] = useState("#62959c");
  const [canvas, setCanvas] = useState();
  const [ObjectSelected, setObjectSelected] = useState(false);

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  /**TOGGLE DELETE BUTTON ON OBJECT SELECTION  */
  useEffect(() => {
    if (!canvas) {
      return;
    }

    canvas.on("selection:created", () => {
      setObjectSelected(true);
    });
    canvas.on("selection:cleared", () => {
      setObjectSelected(false);
    });
  }, [canvas]);

  /** CHANGE COLOR VIA INPUT */
  const changeColorText = (e) => {
    const temp = e;
    settshirtProps(temp);
  };
  /** INITIALIZE CANVAS */
  const initCanvas = () => {
    return new fabric.Canvas("tcanvas", {
      height: 400,
      width: 200,
    });
  };

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

  //TODO: ADD TEXT TO CANVAS
  // const addTextToTshirt = (text) => {
  //   console.log(text);
  //   const addText = new fabric.Text(text);
  //   canvas.add(addText);
  //   canvas.renderAll();
  // };

  return (
    <div className="container">
      <Home.Provider
        value={{
          tshirtProps,
          canvas,
          addImage,
          changeColor,
          removeImage,
          changeColorText,
          ObjectSelected,
        }}
      >
        <TshirtContainer />
        <Settings />
      </Home.Provider>
    </div>
  );
}

export default App;
