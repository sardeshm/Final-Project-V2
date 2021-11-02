import { display } from "@mui/system";
import React, { useState } from "react";
//import "./numbercard.css";

const Number = ({
  MarathiNumber,
  EnglishNumber,
  GermanNumber,
  MarathiPronunciation,
  EnglishPronunciation,
  GermanPronunciation,
}) => {
  //create a state called display,setDisplay, defaults to false
  // when we clic on the marathi card, setDisplay to true
  // /when the display is true we show the 2 other cards
  const [isDisplay, setDisplay] = useState(false);

  return (
    <div>
      
      <div class="row">
        <div class="column">
          <div class="card1" onClick={() => setDisplay(true)}>
            <h3>{MarathiPronunciation}</h3>
            <p>{MarathiNumber}</p>
          </div>
        </div>

        {isDisplay && (
          <>
            <div class="column">
              <div class="card2">
                <h3>{EnglishPronunciation}</h3>
                <p>{EnglishNumber}</p>
              </div>
            </div>

            <div class="column">
              <div class="card3">
                <h3>{GermanPronunciation}</h3>
                <p>{GermanNumber}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Number;
