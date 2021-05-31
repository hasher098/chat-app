import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
const App = () => {
  return (
    <div className="flex justify-center items-center">
      <Router>
        <Switch>
          <Route path="/" component={Login}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
