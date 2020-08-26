import React from "react";
import ExpenseInput from "./components/ExpenseInput.tsx";
import BudgetLeft from "./components/BudgetLeft.tsx";
import ListExpenses from "./components/ListExpenses.tsx";
import { library } from "@fortawesome/fontawesome-svg-core";

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
      <div>BUDGET</div>
      <BudgetLeft />
      <ExpenseInput />
      <ListExpenses />
    </div>
  );
}

export default App;
