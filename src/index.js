import React from "react";
import ReactDOM from "react-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import "./styles/styles.scss";
import { TOBSApp } from "./TOBSApp";

ReactDOM.render(
  <Provider store={store}>
    <TOBSApp />
  </Provider>,
  document.getElementById("root")
);
