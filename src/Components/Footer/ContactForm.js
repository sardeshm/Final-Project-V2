import React, { useState } from "react";
import { Typography, Card, CardContent, TextField } from "@mui/material";

import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./contactform.css";

const ContactForm = () => {
  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ mailerState });
    console.log("mailer", mailerState);

    const response = await fetch("https://langageapp.herokuapp.com/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err))
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
      .then(() => {
        setMailerState({
          email: "",
          name: "",
          message: "",
        });
      });
  };

  const handleStateChange = (e) => {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="wrapper-contactpage">
      <div className="contact-card">
        <Typography>
          <Card
            style={{
              maxWidth: 600,
              margin: "0 auto",
              padding: "20px 5px",
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5">
                Contact Us
              </Typography>

              <form onSubmit={submitEmail}>
                <Grid container spacing={1}>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      label="First Name"
                      placeholder="Enter first name"
                      variant="outlined"
                      fullWidth
                      required
                      name
                      onChange={handleStateChange}
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      label="Last Name"
                      placeholder="Enter last name"
                      variant="outlined"
                      fullWidth
                      required
                      name="name"
                      onChange={handleStateChange}
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      type="email"
                      label="Email"
                      placeholder="Enter Email"
                      variant="outlined"
                      fullWidth
                      name="email"
                      onChange={handleStateChange}
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
                      name="message"
                      onChange={handleStateChange}
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
    </div>
  );
};

export default ContactForm;
