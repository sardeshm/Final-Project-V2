import React, { useState, useEffect } from "react";
import axios from "axios";
import CardGrid from "../common/CardGrid";

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

  return <CardGrid dataList={consonants} />;
};

export default Consonants;
