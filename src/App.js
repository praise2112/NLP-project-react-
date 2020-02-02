import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom";
import SentimentAnalysis from "./components/SentimentAnalysis";
import NewsClassifier from "./components/NewsClassifier";
import SpamClassifier from "./components/SpamClassifier";
import Home from "./components/Home";

function App() {
  return (
      <Switch>
        <Route
            exact
            path={"/"}
            render={(routeProps)=><Home {...routeProps}/>}
        />
        <Route
            exact
            path={"/sentimentAnalysis"}
            render={(routeProps)=><SentimentAnalysis {...routeProps}/>}
        />
        <Route
            exact
            path={"/newsClassifier"}
            render={(routeProps)=><NewsClassifier {...routeProps}/>}
        />
        <Route
            exact
            path={"/spamClassifier"}
            render={(routeProps)=><SpamClassifier {...routeProps}/>}
        />

      </Switch>
  );
}

export default App;
