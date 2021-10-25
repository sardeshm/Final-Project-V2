import React from "react";
import { useHistory } from "react-router-dom";
import logo from "./logo.png";
import home from "./home.jpeg";
import abc from "./abc.jpeg";
import number from "./number.jpeg";
import words from "./words.jpeg";
import "./NavBar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AlphabetPage from "../Alphabets/AlphabetPage";

const NavBar = () => {
  let history = useHistory();

  const redirect = (path) => {
    history.push(path);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className=" appbar" position="relative">
          <Toolbar>
            <img src={logo} alt="logo" className="logo" />

            <Box m={3} pt={4} sx={{ flexGrow: 1, alignSelf: "flex-start" }}>
              <Button
                className="home-btn"
                color="secondary"
                size="large"
                onClick={() => redirect("/")}
              >
                <img src={home} alt="home" className="img-home" />
                Home
              </Button>
              <Button color="secondary" onClick={() => redirect("/alphabets")}>
                <img src={abc} alt="alphabet" className="img-home" />
                Alphabet
              </Button>
              <Button color="inherit" onClick={() => redirect("/numbers")}>
                <img src={number} alt="number" className="img-home" />
                Number
              </Button>
              <Button color="inherit" onClick={() => redirect("/words")}>
                <img src={words} alt="word" className="img-home" />
                Words
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default NavBar;
