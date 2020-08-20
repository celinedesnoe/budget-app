import React from "react";
import ExpenseInput from "./components/ExpenseInput.tsx";
import BudgetLeft from "./components/BudgetLeft.tsx";

function App() {
  return (
    <div className="App">
      <div>BUDGET</div>
      <BudgetLeft />
      <ExpenseInput />
    </div>
  );
}

export default App;
