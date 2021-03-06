import React from "react";
import ReactDOM from "react-dom";
import "./sass/main.scss";

import App from "./App";
import { store } from "./_helpers/store";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { history } from "./_helpers/history";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
