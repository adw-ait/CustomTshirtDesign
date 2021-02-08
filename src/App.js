import React, { createContext, useEffect, useState } from "react";
import "./stylesheet/style.css";
import TshirtContainer from "./TshirtContainer";
import { fabric } from "fabric";
import Settings from "./Settings";

export const Home = createContext();

function App() {
  const [tshirtProps, settshirtProps] = useState("#62959c");
  const [canvas, setCanvas] = useState();
  const [ObjectSelected, setObjectSelected] = useState(false);
  const [selectedObjectProps, setselectedObjectProps] = useState({});
  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  /**TOGGLE DELETE BUTTON ON OBJECT SELECTION  */
  useEffect(() => {
    if (!canvas) {
      return;
    }

    canvas.on("selection:created", (e) => {
      setObjectSelected(true);
      if (canvas.getActiveObject().get("type") === "i-text") {
        setselectedObjectProps(e.target);
      }
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

  /**ADD TEXT TO CANVAS */
  const addTextToTshirt = (text) => {
    const addText = new fabric.IText(text, {
      textBackgroundColor: "",
      underline: "",
      overline: "",
      fill: "#000000",
      fontFamily: "monospace",
    });
    canvas.add(addText);
    canvas.renderAll();
  };

  /**EDIT TEXT STYLES */
  const textStyles = (whichStyle) => {
    const activeObject = canvas.getActiveObject();
    switch (whichStyle.target.id) {
      //  BOLD
      case "bold-text":
        activeObject.set(
          "fontWeight",
          selectedObjectProps.fontWeight === "normal" ? "bold" : "normal"
        );
        canvas.renderAll();
        break;

      // ITALIC
      case "italic-text":
        activeObject.set(
          "fontStyle",
          selectedObjectProps.fontStyle === "normal" ? "italic" : "normal"
        );
        canvas.renderAll();
        break;

      // UNDERLINE
      case "underline-text":
        activeObject.set("underline", !selectedObjectProps.underline);
        canvas.renderAll();
        break;

      // OVERLINE
      case "overline-text":
        activeObject.set("overline", !selectedObjectProps.overline);
        canvas.renderAll();
        break;

      // TEXT COLOR

      //DEFAULT
      default:
        return null;
    }
  };

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
          addTextToTshirt,
          textStyles,
        }}
      >
        <Settings />
        <TshirtContainer />
      </Home.Provider>
    </div>
  );
}

export default App;
