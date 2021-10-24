import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import "./CardGrid.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

const CardGrid = ({ dataList }) => {
  const [selectedData, setSelectedData] = useState({});

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Item style={{ height: "100%" }}>
          <Grid>
            <Grid item>
              <Box
                sx={{
                  p: 2,
                  bgcolor: "background.default",
                  display: "grid",
                  gridTemplateColumns: { md: "1fr 1fr" },
                  gap: 2,
                }}
              >
                {dataList.map((data) => (
                  <Item
                    className="mousePointer"
                    key={data._id}
                    elevation={16}
                    onClick={() => setSelectedData(data)}
                  >
                    {data.Marathi}
                  </Item>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Item>
      </Grid>
      <Grid item xs={9}>
        <Item style={{ height: "100%" }}>
          <div>
            <img
              style={{ position: "relative" }}
              src={selectedData.Image}
              width="400"
              height="400"
              alt=""
            />
            <div>
              <Typography gutterBottom variant="h5" component="div">
                Vowls/Conso
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedData.Marathi}
                {selectedData.MarathiName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedData.English}
                {selectedData.EnglishName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedData.German}
                {selectedData.GermanName}
              </Typography>
            </div>
          </div>
        </Item>
      </Grid>
    </Grid>
  );
};

export default CardGrid;
