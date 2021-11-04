import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

//import Card from "@mui/material/Card";
//import CardActions from "@mui/material/CardActions";
//import CardContent from "@mui/material/CardContent";
//import CardMedia from "@mui/material/CardMedia";
//import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./CardGridWords.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
  backgroundColor: "orange",
}));

const CardGrid = ({ dataList }) => {
  const [selectedData, setSelectedData] = useState({});

  return (
    <Grid container spacing={4} style={{ background: "#AFB7F7", margin: "0" }}>
      <Grid item xs={3}>
        <Item style={{ height: "100%" }}>
          <Grid>
            <Grid style={{ backgroundColor: "#f7f771" }}>
              <Box
                sx={{
                  p: 6,

                  display: "grid",
                  gridTemplateColumns: { md: "1fr 1fr" },
                  gap: 4,
                }}
              >
                {dataList.map((data) => (
                  <Item
                    className="mousePointer"
                    key={data._id}
                    elevation={16}
                    color="black"
                    onClick={() => setSelectedData(data)}
                  >
                    {data.MarathiName}
                  </Item>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Item>
      </Grid>
      <Grid item xs={9}>
        <Item style={{ height: "100%" }} className="card">
          <div className="title"> Click the Button, I will appear here!</div>

          <div>
            <img
              src="/images/common/language-composition.jpeg"
              alt="placeholder"
              className="placeholder-img"
            />
            <img
              style={{ position: "relative", padding: 50 }}
              src={selectedData.Image}
              width="400"
              height="400"
              alt=""
            />
            <div>
              <Typography gutterBottom variant="h6" component="div">
                MarathiName: {selectedData.MarathiPronunciation}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                EnglishName: {selectedData.EnglishName}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                GermanName: {selectedData.GermanName}
              </Typography>
            </div>
          </div>
        </Item>
      </Grid>
    </Grid>
  );
};

export default CardGrid;
