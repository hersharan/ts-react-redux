import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginComponent from "./component/Auth/LoginComponent";
import UserListsComponent from "./component/User/UserListsComponent";

const routes = (
  <Switch>
    <Route exact path="/" component={LoginComponent}></Route>
    <Route exact path="/userlists" component={UserListsComponent}></Route>
  </Switch>
);
export default routes;
