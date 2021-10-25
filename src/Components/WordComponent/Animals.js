import React, { useState, useEffect } from "react";
import axios from "axios";
import CardGrid from "../common/CardGrid";

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

  return <CardGrid dataList={animals} />;
};

export default Animals;
