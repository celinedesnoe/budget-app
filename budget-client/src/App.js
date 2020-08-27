import React from "react";
import ExpenseInput from "./components/ExpenseInput.tsx";
import BudgetLeft from "./components/BudgetLeft.tsx";
import ListExpenses from "./components/ListExpenses.tsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import BudgetProgression from "./components/BudgetProgression";

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
      <div className="d-flex">
        <BudgetLeft />
        <BudgetProgression />
      </div>
      <ExpenseInput />
      <ListExpenses />
    </div>
  );
}

export default App;
