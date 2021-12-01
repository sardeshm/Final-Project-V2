import React from "react";
import { useHistory } from "react-router-dom";
import "./NavBar.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const NavBar = () => {
  let history = useHistory();

  const redirect = (path, param) => {
    history.push(path, { params: param });
  };

  return (
    <div className="flexContainer">
      <Grid item xs={6}>
        <div style={{ height: "100%" }}>
          <Grid>
            <Box
              sx={{
                p: 1,
                border: 0,
                boxShadow: 0,
                display: "grid",
                gridTemplateColumns: { md: "1fr 1fr" },
                gap: 3,
                width: 600,
              }}
            >
              <div
                className="flexContainer flexItem"
                elevation={16}
                color="black"
                onClick={() => {}}
              >
                <div
                  onClick={() => redirect("/alphabets", "alphabet")}
                  className="flexContainer"
                >
                  <img
                    src="/ImagesForPractice/abc.jpeg"
                    alt="alphabet"
                    className="img-home"
                  />
                  <div className="p3">Alphabet</div>
                </div>
              </div>
              <div
                className="flexContainer flexItem"
                elevation={16}
                color="black"
                onClick={() => {}}
              >
                <div
                  onClick={() => redirect("/numbers")}
                  className="flexContainer"
                >
                  <img
                    src="/ImagesForPractice/number.jpeg"
                    alt="number"
                    className="img-home"
                  />
                  <div className="p3">Number</div>
                </div>
              </div>
              <div
                className="flexContainer flexItem"
                elevation={16}
                color="black"
                onClick={() => {}}
              >
                <div
                  onClick={() => redirect("/words")}
                  className="flexContainer"
                >
                  <img
                    src="/ImagesForPractice/words_1.jpeg"
                    alt="word"
                    className="img-home"
                  />
                  <div className="p4">Words</div>
                </div>
              </div>
              <div
                className=" flexContainer flexItem"
                elevation={16}
                color="black"
                onClick={() => {}}
              >
                <div
                  onClick={() => redirect("/alphabets", "canvas")}
                  className="flexContainer"
                >
                  <img
                    src="/ImagesForPractice/sketch.jpeg"
                    alt="word"
                    className="img-home"
                  />
                </div>
                <div className="p4">Draw Alphabets</div>
              </div>
            </Box>
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default NavBar;
