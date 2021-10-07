import React from "react";
import ReactDOM from "react-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import "./styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { ECommerceApp } from "./ECommerceApp";

ReactDOM.render(
  <Provider store={store}>
    <ECommerceApp />
  </Provider>,
  document.getElementById("root")
);
