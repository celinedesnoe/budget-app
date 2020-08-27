import React from "react";
import ReactDOM from "react-dom";
import "./sass/main.scss";

import App from "./App";
import { store } from "./_helpers/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
