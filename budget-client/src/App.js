import React from "react";
import { Switch, Route } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import HomePage from "./components/HomePage";
import AddExpense from "./components/AddExpense";
import { withRouter } from "react-router-dom";

import {
  faHome,
  faUtensils,
  faUmbrellaBeach,
  faCarrot,
  faGlassCheers,
  faFrown,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faHome,
  faUtensils,
  faUmbrellaBeach,
  faCarrot,
  faGlassCheers,
  faFrown
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path="/add-expense"
          render={(props) => <AddExpense {...props} />}
        />
        <Route exact path="/" render={(props) => <HomePage {...props} />} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
