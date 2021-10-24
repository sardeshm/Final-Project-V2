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
          <Route exact path="/" component={HomePage} />
          <Route path="/alphabets/vowels" component={HomePage}></Route>
          <Route path="/alphabets" component={AlphabetPage}></Route>
          <Route path="/numbers" component={NumberPage}></Route>
          <Route path="/words" component={WordsPage}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default MyRouter;
