import React, { useState, useEffect } from "react";
import axios from "axios";
import CardGrid from "../common/CardGrid";

const Vowels = ({ type }) => {
  const [vowels, setVowels] = useState([]);

  const AlphabetVowelsEndpoint =
    "https://langageapp.herokuapp.com/alphabets/vowels";
  //"http://localhost:3001/alphabets/vowels";

  useEffect(() => {
    fetchVowelsData();
  }, []);

  const fetchVowelsData = async () => {
    await axios.get(AlphabetVowelsEndpoint).then((response) => {
      console.log(response);
      setVowels(response.data);
    });
  };

  return <CardGrid type={type} dataList={vowels} />;
};

export default Vowels;
