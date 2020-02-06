import React from 'react';
// import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './assets/css/app.scss';

// ROUTES
import { Landing, Home } from "./routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
          <Route path='/*'>
            404 - Sorry no content
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
