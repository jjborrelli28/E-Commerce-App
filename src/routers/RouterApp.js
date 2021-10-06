import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { HomeScreen } from "../components/HomeScreen/HomeScreen";
import { ProductScreen } from "../components/ProductScreen/ProductScreen";

export const AppRouter = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/:productId" component={ProductScreen} />
          <Redirect to="/" />
        </Switch>
      </>
    </Router>
  );
};
