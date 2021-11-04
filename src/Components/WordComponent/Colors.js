import React, { useState, useEffect } from "react";
import axios from "axios";
import CardGridWords from "../common/CardGridWords";

const Colors = () => {
  const [colors, setColors] = useState([]);

  const ColorsEndpoint = "https://langageapp.herokuapp.com/words/colors";
  //"http://localhost:3001/words/colors";

  useEffect(() => {
    fetchColorsData();
  }, []);

  const fetchColorsData = async () => {
    await axios.get(ColorsEndpoint).then((response) => {
      console.log(response);
      setColors(response.data);
    });
  };

  return <CardGridWords dataList={colors} />;
};

export default Colors;
