import React, { useState, useEffect } from "react";
import axios from "axios";
import NumberCard from "./NumberCard";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import "./numbercard.css";
const NumberPage = () => {
  const [numbers, setNumbers] = useState([]);

  const NumbersEndpoint = "https://langageapp.herokuapp.com/wholenumbers";
  //"http://localhost:3001/wholenumbers";

  useEffect(() => {
    fetchNumbersData();
  }, []);

  const fetchNumbersData = async () => {
    await axios.get(NumbersEndpoint).then((response) => {
      console.log(response);
      setNumbers(response.data);
    });
  };

  return (
    <Container>
      <h1 className="number-heading">Learning Numbers अंकांची ओळख</h1>
      <Grid container>
        {numbers.map((number) => (
          <Grid item key={number.id} xs={12} md={6} lg={4}>
            <NumberCard number={number} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NumberPage;
