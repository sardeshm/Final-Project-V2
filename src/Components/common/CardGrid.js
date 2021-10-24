import React from "react";
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
  return (
    <Box
      sx={{
        p: 2,
        bgcolor: "background.default",
        display: "grid",
        gridTemplateColumns: { md: "1fr 1fr" },
        gap: 2,
      }}
    >
      <Grid style={{ border: "1px solid blue" }}>
        <Grid item xs={2}>
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
                key={data._id}
                elevation={16}
                onClick={() => console.log("My data : ", data.MarathiName)}
              >
                {data.Marathi}
              </Item>
            ))}
          </Box>
        </Grid>
      </Grid>
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={data.Image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Vowls/Conso
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.MarathiName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.EnglishName}
              {data.GermanName}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Box>
  );
};

export default CardGrid;
