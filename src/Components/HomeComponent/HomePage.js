import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import NavBar from "../NavBar/NavBar";
import "./Homepage.css";
import logo from "../NavBar/logo.png";
import Sketch from "/Users/imac/Documents/Sarika/Final project_2/learning-mothertounge/src/Components/common/sketch.jpeg";
import SearchBar from "./SearchBar";
import Footer from "../Footer/Footer";

const HomePage = () => {
  let history = useHistory();

  const redirect = (path) => {
    history.push(path);
  };
  const [searchTerm, setSearchTerm] = useState("");

  const updateSearchTerm = (value) => {
    setSearchTerm(value);
  };
  return (
    <div className="wrapper-homepage">
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <NavBar />
      <div>
        <Button color="inherit" onClick={() => redirect("../Canvas")}>
          <div>
            <img src={Sketch} alt="word" className="sketch-img" />
          </div>
          <p className="draw">Draw The Alphabets</p>
        </Button>
      </div>
      <SearchBar onChange={(value) => updateSearchTerm(value)} />

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
