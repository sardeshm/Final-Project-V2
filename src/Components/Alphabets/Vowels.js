import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Vowels.css";

const Vowels = () => {
  const [vowels, setVowels] = useState([]);

  const AlphabetVowelsEndpoint = "http://localhost:3001/alphabets/vowels";

  useEffect(() => {
    fetchVowelsData();
  }, []);

  const fetchVowelsData = async () => {
    await axios.get(AlphabetVowelsEndpoint).then((response) => {
      console.log(response);
      setVowels(response.data);
    });
  };

  return (
    <div>
      <div className="heading">Alphabets</div>

      <div className="marathialphabet">{vowels.MarathiAlphabet}</div>
      <div className="englishalphabet">{vowels.EnglishAlphabet}</div>
      <div className="germanalphabet">{vowels.GermanAlphabet}</div>
      <img src={vowels.Image} alt="" />
      <div className="marathiname">{vowels.Marathiname}</div>
      <div className="englishname">{vowels.Englishname} </div>
      <div className="germanname">{vowels.Germanname}</div>
    </div>
  );
};

export default Vowels;
