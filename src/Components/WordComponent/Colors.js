import React, { useState, useEffect } from "react";
import axios from "axios";
import CardGrid from "../common/CardGrid";

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

  return <CardGrid type="alphabet" dataList={colors} />;
};

export default Colors;
