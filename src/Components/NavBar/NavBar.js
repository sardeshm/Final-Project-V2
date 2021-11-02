import React from "react";
import { useHistory } from "react-router-dom";
import { styled } from "@mui/material/styles";
import abc from "./abc.jpeg";
import number from "./number.jpeg";
import words from "./words_1.jpeg";

import "./NavBar.css";

import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const NavBar = () => {
  let history = useHistory();

  const redirect = (path, param) => {
    history.push(path, { params: param });
  };

  const Item = styled(Paper)(({ theme }) => ({
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 220,
    lineHeight: "60px",
    borderRadius: 10,
  }));

  return (
    <div className="flexContainer">
      <Grid item xs={6}>
        <Item style={{ height: "100%" }}>
          <Grid>
            <Grid>
              <Box
                sx={{
                  p: 0,
                  border: "none",
                  backgroundColor: "transparent",
                  boxShadow: "none !important",
                  display: "grid",
                  gridTemplateColumns: { md: "1fr 1fr" },
                  gap: 10,
                  width: "500px",
                }}
              >
                <Item
                  className="flexContainer mousePointer"
                  elevation={16}
                  color="black"
                  onClick={() => {}}
                >
                  <div
                    onClick={() => redirect("/alphabets", "alphabet")}
                    className="flexContainer"
                  >
                    <img src={abc} alt="alphabet" className="img-home" />
                    <div className="p3"> Alphabet</div>
                  </div>
                </Item>
                <Item
                  className="flexContainer mousePointer"
                  elevation={16}
                  color="black"
                  onClick={() => {}}
                >
                  <div
                    onClick={() => redirect("/numbers")}
                    className="flexContainer"
                  >
                    <img src={number} alt="number" className="img-home" />
                    <div className="p3"> Number</div>
                  </div>
                </Item>
                <Item
                  className=" flexContainer mousePointer"
                  elevation={16}
                  color="black"
                  onClick={() => {}}
                >
                  <div
                    onClick={() => redirect("/words")}
                    className="flexContainer"
                  >
                    <img src={words} alt="word" className="img-home" />
                    <div className="p4"> Words</div>
                  </div>
                </Item>
                <Item
                  className=" flexContainer mousePointer"
                  elevation={16}
                  color="black"
                  onClick={() => {}}
                >
                  <div
                    onClick={() => redirect("/alphabets", "canvas")}
                    className="flexContainer"
                  >
                    <img
                      src="/images/common/sketch.jpeg"
                      alt="word"
                      className="img-home"
                    />
                  </div>
                  <div className="p4">Draw Alphabets</div>
                </Item>
              </Box>
            </Grid>
          </Grid>
        </Item>
      </Grid>
    </div>
  );
};

export default NavBar;
