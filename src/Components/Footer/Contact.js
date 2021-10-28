import React from "react";
import { Typography, Card, CardContent, TextField } from "@mui/material";
import { maxWidth } from "@mui/system";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";

const Contact = () => {
  return (
    <div>
      <Typography>
        <Card style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact Us
            </Typography>

            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="First Name"
                    placeholder="Enter first name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="Last Name"
                    placeholder="Enter last name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    type="email"
                    label="Email"
                    placeholder="Enter Email"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
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
                <Grid xs={12} sm={6} item>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Typography>
    </div>
  );
};

export default Contact;
