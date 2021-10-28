import React, { useState } from "react";
import Vegetables from "./Vegetables";
import Fruits from "./Fruits";
import Animals from "./Animals";
import Colors from "./Colors";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const WordsPage = () => {
  const [isComponent, setComponent] = useState();

  function handleOnClick(event) {
    window.scrollTo(0, 0);
    setComponent(event.target.id);
    return;
  }

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
      </div>

      {isComponent === "Vegetables" && <Vegetables />}
      {isComponent === "Fruits" && <Fruits />}
      {isComponent === "Animals" && <Animals />}
      {isComponent === "Colors" && <Colors />}
      {!isComponent && (
        <h1>
          More Words सुंदर सुंदर शब्दांचे सुंदर सुंदर घर त्यांतून काही हळवे हळवे
          राहत होते स्वर
        </h1>
      )}
    </div>
  );
};

export default WordsPage;
