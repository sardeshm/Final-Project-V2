import React, { useState, useEffect } from "react";
import axios from "axios";
import CardGrid from "../common/CardGrid";

const Consonants = ({ type }) => {
  const [consonants, setConsonants] = useState([]);

  const AlphabetConsonantsEndpoint =
    "https://langageapp.herokuapp.com/alphabets/consonants";
  //"http://localhost:3001/alphabets/consonants";

  useEffect(() => {
    fetchConsonantsData();
  }, []);

  const fetchConsonantsData = async () => {
    await axios.get(AlphabetConsonantsEndpoint).then((response) => {
      console.log(response);
      setConsonants(response.data);
    });
  };

  return <CardGrid type={type} dataList={consonants} />;
};

export default Consonants;
