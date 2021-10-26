import { Button, Container } from "@mui/material";
import React from "react";

import CanvasDraw from "react-canvas-draw";

import "./canvas.css";
import { useIsMobileOrTablet } from "./isMobileOrTablet";

const Canvas = () => {
  const isMobOrTab = useIsMobileOrTablet();

  return (
    <div className="container">
      <div className="canvas">
        <h1>Try to draw..</h1>

        <p className="para">
          <span role="img" aria-label="fingers pointing down">
            👇👇👇👇
          </span>{" "}
          Use your {isMobOrTab ? "finger" : "mouse"} to draw{" "}
          <span role="img" aria-label="fingers pointing down">
            👇👇👇👇
          </span>
        </p>
        <CanvasDraw
          style={{
            boxShadow:
              "0 13px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)",
          }}
        />
      </div>

      <Button>Clear the canvas</Button>
    </div>
  );
};
export default Canvas;
