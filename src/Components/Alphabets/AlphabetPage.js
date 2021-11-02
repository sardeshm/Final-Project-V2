import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Vowels from "./Vowels";
import Consonants from "./Consonants";
import "./AlphabetPage.css";
import Button from "@mui/material/Button";
//import ButtonGroup from "@mui/material/ButtonGroup";
import vowelbackground from "./vowelbackground.jpeg";
//import { makeStyles } from "@mui/material";
import { useLocation } from "react-router-dom";

const AlphabetPage = () => {
  const [isVowelsComponent, setVowelsComponent] = useState(true);
  const location = useLocation();
  const param = location.state.params;
  // const useStyles = makeStyles({
  //   root: {
  //     width: "150px",
  //     height: "150px",
  //     backgroundImage: "./vowelbackground.jpeg",
  //   },
  // });

  // const ButtonStyled = () => {
  //   const classes = useStyles();

  //   return <Button className={classes.root}></Button>;
  // };

  return (
    <div>
      <div className="alphabet-page-container">
        <Stack direction="row" spacing={7}>
          <Button
            className="vowel-btn"
            variant="contained"
            color="primary"
            size="large"
            onClick={() => setVowelsComponent(true)}
          >
            {" "}
            Vowels
          </Button>
          <Button
            className="consonent-btn"
            variant="contained"
            color="primary"
            size="large"
            onClick={() => setVowelsComponent(false)}
          >
            Consonents
          </Button>
        </Stack>
      </div>

      {isVowelsComponent ? (
        <Vowels type={param} />
      ) : (
        <Consonants type={param} />
      )}
    </div>
  );
};

export default AlphabetPage;
