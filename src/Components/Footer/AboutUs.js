import React from "react";
import { Typography, Card, CardContent, TextField } from "@mui/material";

import Grid from "@mui/material/Grid";
const AboutUs = () => {
  return (
    <Typography>
      <Card style={{ maxWidth: 450, margin: "0 auto", padding: "30px 5px" }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Who We Are
          </Typography>
          <Grid xs={12} item>
            <TextField
              label="Your Messgae"
              multiline
              rows={4}
              placeholder="Write your Message"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </CardContent>
      </Card>
    </Typography>
  );
};

export default AboutUs;
