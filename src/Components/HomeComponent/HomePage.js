import React from "react";

import NavBar from "../NavBar/NavBar";
import "./Homepage.css";

import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <div className="wrapper-homepage">
      <img src="/images/common/logo.jpg" alt="logo" className="logo" />
      <h1 className="header">MultiLinguee </h1>
      <h6 className="slogan-line">Connecting To The Roots....</h6>
      <div></div>

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
