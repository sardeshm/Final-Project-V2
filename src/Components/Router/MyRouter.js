import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../HomeComponent/HomePage";
import AlphabetPage from "../Alphabets/AlphabetPage";
import NumberPage from "../NumberComponent/NumberPage";
import WordsPage from "../WordComponent/WordsPage";

const MyRouter = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} test="test"></Route>
          <Route path="/alphabets/:category?" component={AlphabetPage}></Route>
          <Route path="/numbers" component={NumberPage}></Route>
          <Route path="/words" component={WordsPage}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default MyRouter;
