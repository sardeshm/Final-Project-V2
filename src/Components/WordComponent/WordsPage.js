import React, { useState } from "react";
import Vegetables from "./Vegetables";
import Fruits from "./Fruits";
import Animals from "./Animals";
import Colors from "./Colors";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const WordsPage = () => {
  const [isComponent, setComponent] = useState();

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
            onClick={() => setComponent()}
          >
            Vegetables
          </Button>

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => setComponent()}
          >
            Fruits
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => setComponent()}
          >
            Animals
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => setComponent()}
          >
            Colors
          </Button>
        </ButtonGroup>
      </div>

      {isComponent === Vegetables ? (
        <Vegetables />
      ) : isComponent === Fruits ? (
        <Fruits />
      ) : isComponent === Animals ? (
        <Animals />
      ) : isComponent === Colors ? (
        <Colors />
      ) : (
        <h1>More Words</h1>
      )}
    </div>
  );
};

export default WordsPage;
