import React, { FC } from "react";
import { useSelector } from "react-redux";

interface RootState {
  budget: number; // your props validation
}

const BudgetLeft: FC = () => {
  const selectBudget = (state: RootState) => state.budget;
  const budget = useSelector(selectBudget);
  return (
    <div className="budget-left">
      <div>Solde restant</div>
      <div className="bold">{budget}</div>
    </div>
  );
};

export default BudgetLeft;
