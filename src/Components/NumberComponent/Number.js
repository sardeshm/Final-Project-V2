import React from "react";
import "./numbercard.css";

const Number = ({
  MarathiNumber,
  EnglishNumber,
  GermanNumber,
  MarathiPronunciation,
  EnglishPronunciation,
  GermanPronunciation,
}) => {
  return (
    <div class="row">
      <div class="column">
        <div class="card1">
          <h3>{MarathiPronunciation}</h3>
          <p>{MarathiNumber}</p>
        </div>
      </div>

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
    </div>
  );
};

export default Number;
