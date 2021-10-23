import React, { useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Vowels from "./Vowels";
import Consonants from "./Consonants";
import "./AlphabetPage.css";

const AlphabetPage = () => {
  const [isVowelsComponent, setVowelsComponent] = useState(true);

  return (
    <div>
      <div className="vowel-btn">
        <Link to="/alphabets/Vowels">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={setVowelsComponent(true)}
          >
            Vowels{" "}
          </Button>{" "}
        </Link>
      </div>

      <div className="consonent-btn">
        <Link to="/alphabets/Consonents">
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={setVowelsComponent(false)}
          >
            {" "}
            Consonents
          </Button>
        </Link>
      </div>

      {isVowelsComponent ? <Vowels /> : <Consonants />}
    </div>
  );
};

export default AlphabetPage;
