import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import "./CardGridWords.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
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

const CardGrid = ({ dataList }) => {
  const [selectedData, setSelectedData] = useState({});

  return (
    <Grid container spacing={4} style={{ margin: "0" }}>
      <Grid item xs={3}>
        <Item style={{ height: "100%" }}>
          <Grid>
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
                      fontSize: "2rem",
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedData(data)}
                  >
                    {data.MarathiName}
                  </InnerItem>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Item>
      </Grid>
      <Grid item xs={9}>
        <Item style={{ height: "100%", backgroundColor: "white !important" }}>
          <div>
            <img
              style={{ position: "relative", padding: 50 }}
              src={selectedData.Image}
              width="400"
              height="400"
              alt=""
            />
            <div>
              <Typography gutterBottom variant="h4" component="div">
                MarathiName: {selectedData.MarathiPronunciation}
              </Typography>
              <Typography gutterBottom variant="h4" component="div">
                EnglishName: {selectedData.EnglishName}
              </Typography>
              <Typography gutterBottom variant="h4" component="div">
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
