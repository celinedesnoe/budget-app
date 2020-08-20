import React from "react";
import { useSelector } from "react-redux";

interface RootState {
  budget: number; // your props validation
}

const BudgetLeft = () => {
  const selectBudget = (state: RootState) => state.budget;
  const budget = useSelector(selectBudget);
  return <div className="d-flex ">{budget}</div>;
};

export default BudgetLeft;
