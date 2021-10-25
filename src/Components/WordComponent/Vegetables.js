import React, { useState, useEffect } from "react";
import axios from "axios";
import CardGrid from "../common/CardGrid";

const Vegetables = () => {
  const [vegetables, setVegetables] = useState([]);

  const WordsVegetablesEndpoint = "http://localhost:3001/words/vegetables";

  useEffect(() => {
    fetchVegetablesData();
  }, []);

  const fetchVegetablesData = async () => {
    await axios.get(WordsVegetablesEndpoint).then((response) => {
      console.log(response);
      setVegetables(response.data);
    });
  };

  return <CardGrid dataList={vegetables} />;
};

export default Vegetables;
