import React, { useState, useEffect } from "react";
import axios from "axios";
import CardGrid from "../common/CardGrid";

const Fruits = () => {
  const [fruits, setFruits] = useState([]);

  const WordsFruitsEndpoint = "https://langageapp.herokuapp.com/words/fruits";
  //http://localhost:3001/words/fruits";

  useEffect(() => {
    fetchFruitsData();
  }, []);

  const fetchFruitsData = async () => {
    await axios.get(WordsFruitsEndpoint).then((response) => {
      console.log(response);
      setFruits(response.data);
    });
  };

  return <CardGrid type="alphabet" dataList={fruits} />;
};

export default Fruits;
