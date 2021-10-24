import React, { useState, useEffect } from "react";
import axios from "axios";

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
      {/* <div className="heading">Number</div>

      <div className="marathinumber">{number.Marathinumber}</div>
      <div className="englishnumber">{number.EnglishNumber}</div>
      <div className="germannumber">{number.GermanNumber}</div>
      {/* <img src={consonants.Image} alt="" /> */}
      {/* <div className="marathiname">{number.Marathiname}</div>
      <div className="englishname">{number.Englishname} </div>
      <div className="germanname">{number.Germanname}</div> */}{" "}
      */}
    </div>
  );
};

export default NumberPage;
