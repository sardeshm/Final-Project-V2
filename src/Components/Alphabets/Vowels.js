import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Vowels.css";
import CardGrid from "../common/CardGrid";

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

  return <CardGrid dataList={vowels} />;
};

export default Vowels;
