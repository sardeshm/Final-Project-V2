import React from "react";
import { useHistory } from "react-router-dom";

import home from "./home.jpeg";
import abc from "./abc.jpeg";
import number from "./number.jpeg";
import words from "./words_1.jpeg";
import "./NavBar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AlphabetPage from "../Alphabets/AlphabetPage";
import { Grid } from "@mui/material";

const NavBar = () => {
  let history = useHistory();

  const redirect = (path) => {
    history.push(path);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          className=" appbar"
          style={{ background: "green" }}
          position="static"
        >
          <Toolbar>
            <Grid
              justify="space-between"
              container
              spacing={6}
              display="flex"
              alignItems="flex-ba"
            >
              {/* <Box m={3} pt={4} sx={{ flexGrow: 1, alignSelf: "flex-end" }}> */}
              <Grid item>
                <Button
                  className="home-btn"
                  color="secondary"
                  size="large"
                  onClick={() => redirect("/")}
                >
                  <img src={home} alt="home" className="img-home" />
                  <p className="p1"> Home</p>
                </Button>
              </Grid>
              <Grid item>
                <Button color="inherit" onClick={() => redirect("/alphabets")}>
                  <img src={abc} alt="alphabet" className="img-home" />
                  <p className="p2"> Alphabet</p>
                </Button>
              </Grid>
              <Grid item>
                <Button color="secondary" onClick={() => redirect("/numbers")}>
                  <img src={number} alt="number" className="img-home" />
                  <p className="p3"> Number</p>
                </Button>
              </Grid>
              <Grid item>
                <Button color="inherit" onClick={() => redirect("/words")}>
                  <img src={words} alt="word" className="img-home" />
                  <p className="p4"> Words</p>
                </Button>
              </Grid>
              {/* </Box> */}
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default NavBar;
