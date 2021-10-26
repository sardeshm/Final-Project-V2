import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import NavBar from "../NavBar/NavBar";
import "./Homepage.css";
import Canvas from "../common/Canvas";
import Sketch from "/Users/imac/Documents/Sarika/Final project_2/learning-mothertounge/src/Components/common/sketch.jpeg";

const HomePage = () => {
  let history = useHistory();

  const redirect = (path) => {
    history.push(path);
  };

  return (
    <div className="wrapper-homepage">
      <NavBar />

      <Button color="inherit" onClick={() => redirect("../Canvas")}>
        <img src={Sketch} alt="word" className="img-home" />
        <h6>Draw The Alphabets</h6>
      </Button>
    </div>
  );
};

export default HomePage;
