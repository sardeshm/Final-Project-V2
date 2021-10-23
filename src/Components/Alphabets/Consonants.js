import React, { useState, useEffect } from "react";
import axios from "axios";

const Consonants = () => {
  const [consonants, setConsonants] = useState([]);

  const AlphabetConsonantsEndpoint =
    "http://localhost:3001/alphabets/consonants";

  useEffect(() => {
    fetchConsonantsData();
  }, []);

  const fetchConsonantsData = async () => {
    await axios.get(AlphabetConsonantsEndpoint).then((response) => {
      console.log(response);
      setConsonants(response.data);
    });
  };

  return (
    <div>
      <div className="heading">Alphabets</div>

      <div className="marathialphabet">{consonants.MarathiAlphabet}</div>
      <div className="englishalphabet">{consonants.EnglishAlphabet}</div>
      <div className="germanalphabet">{consonants.GermanAlphabet}</div>
      <img src={consonants.Image} alt="" />
      <div className="marathiname">{consonants.Marathiname}</div>
      <div className="englishname">{consonants.Englishname} </div>
      <div className="germanname">{consonants.Germanname}</div>
    </div>
  );
};

export default Consonants;
