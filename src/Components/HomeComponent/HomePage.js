import React from "react";
// import { useHistory } from "react-router-dom";
//import { Button } from "@mui/material";
import NavBar from "../NavBar/NavBar";
import "./Homepage.css";
//import logo from "/images/common/logo.jpg";

//import SearchBar from "./SearchBar";
import Footer from "../Footer/Footer";

const HomePage = () => {
  // let history = useHistory();

  // const redirect = (path) => {
  //   history.push(path);
  // };
  // const [searchTerm, setSearchTerm] = useState("");

  // const updateSearchTerm = (value) => {
  //   setSearchTerm(value);
  // };
  return (
    <div className="wrapper-homepage">
      <img src="/images/common/logo.jpg" alt="logo" className="logo" />
      <h1 className="header">MultiLinguee </h1>
      <h6 className="slogan-line">Connecting To The Roots....</h6>
      <div></div>

      {/* <SearchBar onChange={(value) => updateSearchTerm(value)} /> */}

      <div>
        <NavBar />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
