import React, { FC } from "react";
import ExpenseInput from "./ExpenseInput";
import BudgetLeft from "./BudgetLeft";
import ListExpenses from "./ListExpenses";
import BudgetProgression from "./BudgetProgression";
import AddButton from "./AddButton";

const HomePage: FC = () => {
  return (
    <div className="position-relative">
      <div className="d-flex">
        <BudgetLeft />
        <BudgetProgression />
      </div>

      <ListExpenses />
      <AddButton />
    </div>
  );
};

export default HomePage;
