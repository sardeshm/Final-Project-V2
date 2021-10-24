import React, { useState } from "react";
import Vowels from "./Vowels";
import Consonants from "./Consonants";
import "./AlphabetPage.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const AlphabetPage = () => {
  const [isVowelsComponent, setVowelsComponent] = useState(true);

  return (
    <div>
      <div>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => setVowelsComponent(true)}
          >
            Vowels
          </Button>

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => setVowelsComponent(false)}
          >
            Consonents
          </Button>
        </ButtonGroup>
      </div>

      {isVowelsComponent ? <Vowels /> : <Consonants />}
    </div>
  );
};

export default AlphabetPage;
