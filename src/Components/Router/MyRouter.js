import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../HomeComponent/HomePage";
import AlphabetPage from "../Alphabets/AlphabetPage";
import NumberPage from "../NumberComponent/NumberPage";
import WordsPage from "../WordComponent/WordsPage";

import Canvas from "../common/Canvas";
import Contact from "../Footer/Contact";
import AboutUs from "../Footer/AboutUs";
import Drawing from "../common/Drawing";
import AlphabetDraw from "../common/AlphabetDraw";

const MyRouter = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/alphabets/vowels" component={HomePage}></Route>
          <Route path="/alphabets" component={AlphabetPage}></Route>
          <Route path="/numbers" component={NumberPage}></Route>
          <Route path="/words" component={WordsPage}></Route>
          <Route path="/canvas" component={Canvas}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/aboutus" component={AboutUs}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default MyRouter;
