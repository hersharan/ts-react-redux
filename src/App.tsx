import React from "react";
import "./App.css";
import LoginComponent from "./component/Auth/LoginComponent";
// import UserLists from "./component/User/UserLists";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderComponent from "./component/Layout/HeaderComponent";
import FooterComponent from "./component/Layout/FooterComponent";

import routes from "./Routes";
const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        {routes}
        <FooterComponent />
      </Router>
    </div>
  );
};

export default App;
