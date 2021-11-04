import React from "react";
import { Typography, Card, CardContent, TextField } from "@mui/material";
import "./aboutus.css";
import Grid from "@mui/material/Grid";
const AboutUs = () => {
  return (
    <div className="wrapper-aboutpage">
      <Typography>
        <Card
          style={{
            maxWidth: 900,
            margin: "2em",
            marginBottom: "2em",
            padding: "30px 5px",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h4" className="about-heading">
              About MultiLinguee (MuTi-Li)
            </Typography>
            <Typography gutterBottom variant="h6" className="subheading-about">
              What is MultiLinguee (MuTi-Li)
            </Typography>
            <Grid xs={12} item spacing={2} style={{ background: "#D5CED6" }}>
              <Typography
                variant="body1"
                className="para-about"
                fontSize="15px"
              >
                MultiLinguee is a language learning application, focusing on
                individuals who have multilingual background or who wanted to
                learn more than one language. Its proven that, language plays an
                important role in cognitive development. The many cognitive
                benefits of learning languages are undeniable. People who speak
                more than one language have improved memory, problem-solving and
                critical-thinking skills, enhanced concentration, ability to
                multitask, and better listening skills. 
              </Typography>
            </Grid>
          </CardContent>
        </Card>
        <Card
          style={{
            maxWidth: 900,
            margin: "2em",
            marginBottom: "2em",
            padding: "30px 5px",
          }}
        >
          <CardContent>
            <Grid spacing={2} style={{ background: "#D5CED6" }}>
              <Typography
                gutterBottom
                variant="h6"
                className="subheading-about"
              >
                Why MultiLinguee (MuTi-Li)
              </Typography>
              <Typography
                variant="body1"
                className="para-about"
                fontSize="15px"
              >
                The child learns the first language from the mother even being
                born. This is most obviously is the mothertounge. Mother tongue
                is vital in framing the thinking and emotions of people.
                Learning to speak in the mother tongue is very necessary for a
                child's comprehensive development. Being fluent in the mother
                tongue, which is also known as the native language, benefits the
                child in numerous ways. It associates him to his culture,
                ensures enhanced cognitive development, and supports in the
                learning of other languages (Rajathurai Nishanthi"Understanding
                of the Importance of Mother Tongue Learning" International
                Journal of Trend in Scientific Research and Development, 2020;
                2456-6470)
              </Typography>
            </Grid>
          </CardContent>
        </Card>
        <Card
          style={{
            maxWidth: 900,
            margin: "2em",
            marginBottom: "2em",
            padding: "30px 5px",
          }}
        >
          <Grid spacing={2} style={{ background: "#D5CED6" }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                className="subheading-about"
              >
                The problem
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                className="para-about"
                fontSize="15px"
              >
                In Globalisation migration become a part of lifestyle. To learn
                the language from the place where you are living is necessary to
                get to know the culture and for the integration. Kids who have
                different mothertounge than their country,where they are living,
                always face the difficulty to learn to write and read the
                mothertounge. 
              </Typography>
            </CardContent>
          </Grid>
        </Card>
        <Card
          style={{
            maxWidth: 900,
            margin: "2em",
            marginBottom: "2em",
            padding: "30px 5px",
          }}
        >
          <Grid spacing={2} style={{ background: "#D5CED6" }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                className="subheading-about"
              >
                And The Solution
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                className="para-about"
                fontSize="15px"
              >
                MultiLinguee is offering a platform to learn to read and write
                the languages. It is connecting the languages, which are
                different in scripts. Different languages on one platform can
                give an opportunity to understand vocablury with the help of
                other language, which is mainly English. and get And connected
                to the roots.  In the first phase MultiLinguee is supporting one
                of the Indian regional language Marathi and Latin based English
                and German.
              </Typography>
            </CardContent>
          </Grid>
        </Card>
      </Typography>
    </div>
  );
};

export default AboutUs;
