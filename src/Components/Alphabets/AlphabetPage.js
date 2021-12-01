import React, { useState } from "react";
import Stack from "@mui/material/Stack";

import Vowels from "./Vowels";
import Consonants from "./Consonants";
import "./AlphabetPage.css";
import Button from "@mui/material/Button";

import { useLocation } from "react-router-dom";

const AlphabetPage = () => {
  const [isVowelsComponent, setVowelsComponent] = useState(true);
  const location = useLocation();
  const param = location.state.params;

  return (
    <div className="alphabet-page">
      <div className="flexContainer">
        <Stack direction="row" spacing={2}>
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

      <div>
        {isVowelsComponent ? (
          <Vowels type={param} />
        ) : (
          <Consonants type={param} />
        )}
      </div>
    </div>
  );
};

export default AlphabetPage;
