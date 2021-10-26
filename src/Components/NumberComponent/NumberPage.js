import React, { useState, useEffect } from "react";
import axios from "axios";
import Number from "./Number";

const NumberPage = () => {
  const [numbers, setNumbers] = useState([]);

  const NumbersEndpoint = "http://localhost:3001/wholenumbers";

  useEffect(() => {
    fetchNumbersData();
  }, []);

  const fetchNumbersData = async () => {
    await axios.get(NumbersEndpoint).then((response) => {
      console.log(response);
      setNumbers(response.data);
    });
  };

  return (
    <div>
      {numbers.map((number) => {
        return (
          <div>
            <Number
              MarathiNumber={number.MarathiNumber}
              EnglishNumber={number.EnglishNumber}
              GermanNumber={number.GermanNumber}
              MarathiPronunciation={number.MarathiPronunciation}
              EnglishPronunciation={number.EnglishPronunciation}
              GermanPronunciation={number.GermanPronunciation}
            />
          </div>
        );
      })}
    </div>
  );
};

export default NumberPage;
