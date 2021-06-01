import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { AuthProvider } from "../contexts/AuthContext";
import Chats from "./Chats";
import TradLogin from "./TradLogin";
import Register from "./Register";
const App = () => {
  return (
    <div className=" bg-blue-500 flex justify-center items-center">
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/chats" component={Chats} />
            <Route path="/login" component={TradLogin} />
            <Route path="/register" component={Register} />
            <Route path="/" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
