import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PageCalculator from "./PageCalculator";
import PageOther from "./PageOther";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p>
            Edited <code>src/App.js</code> and save to reload.
          </p>

          <Link to="/">Home</Link>
          <Link to="/page-other">Other</Link>
        </header>

        <Route exact path="/">
          <PageCalculator />
        </Route>

        <Route path="/page-other">
          <PageOther />
        </Route>
      </div>
    </Router>
  );
}

export default App;
