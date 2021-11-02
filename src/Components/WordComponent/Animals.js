import React, { useState, useEffect } from "react";
import axios from "axios";
import CardGridWords from "../common/CardGridWords";

const Animals = () => {
  const [animals, setAnimals] = useState([]);

  const AnimalsEndpoint = "http://localhost:3001/words/animals";

  useEffect(() => {
    fetchAnimalData();
  }, []);

  const fetchAnimalData = async () => {
    await axios.get(AnimalsEndpoint).then((response) => {
      console.log(response);
      setAnimals(response.data);
    });
  };

  return <CardGridWords dataList={animals} />;
};

export default Animals;
