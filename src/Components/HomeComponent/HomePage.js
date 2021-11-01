import React, { useState } from "react";
import { useHistory } from "react-router-dom";
//import { Button } from "@mui/material";
import NavBar from "../NavBar/NavBar";
import "./Homepage.css";
import logo from "../NavBar/logo.png";

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
      <SearchBar onChange={(value) => updateSearchTerm(value)} />
      <NavBar />
      <div>
        {/* <Button color="inherit" > */}

        {/* </Button> */}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
