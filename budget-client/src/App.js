import React from "react";
import ExpenseInput from "./components/ExpenseInput.tsx";
import BudgetLeft from "./components/BudgetLeft.tsx";
import ListExpenses from "./components/ListExpenses.tsx";

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
