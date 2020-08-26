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
      <BudgetLeft />
      <BudgetProgression />
      <ExpenseInput />
      <ListExpenses />
    </div>
  );
}

export default App;
