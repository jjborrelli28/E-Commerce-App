import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { HomeScreen } from "../components/HomeScreen/HomeScreen";

export const AppRouter = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Redirect to="/" />
        </Switch>
      </>
    </Router>
  );
};
