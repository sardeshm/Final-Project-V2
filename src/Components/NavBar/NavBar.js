import React from "react";
import { useHistory } from "react-router-dom";
import logo from "./logo.png";
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
    <nav className="NavBar">
      <img src={logo} alt="logo" />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" onClick={() => redirect("/")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => redirect("/alphabets")}>
              Alphabet
            </Button>
            <Button color="inherit" onClick={() => redirect("/numbers")}>
              Number
            </Button>
            <Button color="inherit" onClick={() => redirect("/words")}>
              Words
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </nav>
  );
};

export default NavBar;
