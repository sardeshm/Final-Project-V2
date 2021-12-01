import React, { useState } from "react";
import Vegetables from "./Vegetables";
import Fruits from "./Fruits";
import Animals from "./Animals";
import Colors from "./Colors";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./wordspage.css";
import { Stack } from "@mui/material";

const WordsPage = () => {
  const [isComponent, setComponent] = useState();

  function handleOnClick(event) {
    window.scrollTo(0, 0);
    setComponent(event.target.id);
    return;
  }

  return (
    <div className="wrapper-wordspage">
      <div className="words-page">
        <Stack direction="row" spacing={2}>
          <ButtonGroup className="button-grp">
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleOnClick}
              id="Vegetables"
            >
              Vegetables
            </Button>

            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleOnClick}
              id="Fruits"
            >
              Fruits
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleOnClick}
              id="Animals"
            >
              Animals
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleOnClick}
              id="Colors"
            >
              Colors
            </Button>
          </ButtonGroup>
        </Stack>
      </div>

      {isComponent === "Vegetables" && <Vegetables />}
      {isComponent === "Fruits" && <Fruits />}
      {isComponent === "Animals" && <Animals />}
      {isComponent === "Colors" && <Colors />}
      {!isComponent && (
        <div>
          <p className="header-word">
            सुंदर सुंदर शब्दांचे सुंदर सुंदर घर त्यांतून काही हळवे हळवे राहत
            होते स्वर <br />
            Open a book and you can share, wondrous words you find in there!
            <p className="para-word">pinterest</p>
          </p>

          <img
            src="/images/common/board-template.jpeg"
            alt="placeholder"
            className="bkg_wordsimg"
          />
        </div>
      )}
    </div>
  );
};

export default WordsPage;
