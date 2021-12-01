import React, { useState, useRef } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

import CanvasDraw from "react-canvas-draw";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./CardGrid.css";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
  backgroundColor: "white !important",
}));

const InnerItem = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  color: "white",
  height: 60,
  lineHeight: "60px",
  backgroundColor: "#1976d2 !important",
}));

const CardGrid = ({ dataList, type }) => {
  const [selectedData, setSelectedData] = useState({});

  const canvas = useRef(null);

  const handleClick = () => {
    //   //const data = canvas.current.getSaveData();
    //   // const clear = canvas;
  };
  const clear = () => {
    canvas.current.clear();
  };
  const undo = () => {
    canvas.current.undo();
  };
  return (
    <Grid container spacing={4} style={{ margin: "0" }}>
      <Grid item xs={3}>
        <Item style={{ height: "100%" }}>
          <Grid>
            <Box
              sx={{
                p: 6,
                display: "grid",
                gridTemplateColumns: { md: "1fr 1fr" },
                gap: 4,
              }}
            >
              {dataList.map((data) => (
                <InnerItem
                  key={data._id}
                  elevation={16}
                  color="black"
                  style={{
                    backgroundColor: "white !important",
                    fontSize: "2rem",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedData(data)}
                >
                  {data.Marathi}
                </InnerItem>
              ))}
            </Box>
          </Grid>
        </Item>
      </Grid>
      <Grid item xs={9}>
        <Item style={{ height: "100%" }}>
          <div>
            {type === "alphabet" ? (
              <img
                style={{ position: "relative", paddingTop: 20 }}
                src={selectedData.Image}
                width="400"
                height="400"
                alt=""
              />
            ) : (
              <img
                style={{ position: "relative", padding: 100 }}
                src={"/ImagesForPractice/" + selectedData.canvasImage}
                alt=""
              />
            )}

            <div>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
              ></Typography>

              <Typography variant="h6" color="text.secondary" marginTop="auto">
                Marathi: {selectedData.Marathi} {selectedData.MarathiName}
              </Typography>
              <Typography variant="h6" color="text.secondary" marginTop="auto">
                English: {selectedData.English} {selectedData.EnglishName}
              </Typography>
              <Typography variant="h6" color="text.secondary" marginTop="auto">
                German: {selectedData.German} {selectedData.GermanName}
              </Typography>
            </div>
          </div>
          <div>
            {type === "canvas" && (
              <>
                <div className="canvas-draw">
                  <CanvasDraw
                    brushRadius={1}
                    brushColor="red"
                    hideGrid={true}
                    style={{
                      boxShadow:
                        "0 13px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)",
                    }}
                    ref={canvas}
                  />
                </div>
                <div className="canvas-btn">
                  <Button
                    size="large"
                    variant="contained"
                    color="success"
                    onClick={handleClick}
                  >
                    Save Drawing
                  </Button>
                  <Button
                    size="large"
                    variant="contained"
                    color="secondary"
                    onClick={clear}
                  >
                    Clear the canvas
                  </Button>
                  <Button
                    size="large"
                    color="error"
                    variant="contained"
                    onClick={undo}
                  >
                    Undo
                  </Button>
                </div>
              </>
            )}
          </div>
        </Item>
      </Grid>
    </Grid>
  );
};

export default CardGrid;
