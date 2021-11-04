import React, { useState, useEffect } from "react";
import axios from "axios";
import CardGridWords from "../common/CardGridWords";

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

  return <CardGridWords dataList={fruits} />;
};

export default Fruits;
