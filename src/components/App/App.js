import React from "react";
import "./App.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Home from "../Home/Home";
import DynamicPage from "../DynamicPage/DynamicPage";
import NoMatch from "../NoMatch/NoMatch";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dynamic" component={DynamicPage} />
          <Route component={NoMatch} />
        </Switch>
      </React.Fragment>
    </Router>
  );
};

export default App;

