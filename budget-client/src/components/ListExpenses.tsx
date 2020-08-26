import React from "react";
import { useSelector } from "react-redux";
import OneExpense from "./OneExpense";

interface RootState {
  expenses: { amount: number; type: string; date: string }[]; // your props validation
}

const ListExpenses: React.FC = () => {
  const selectExpenses = (state: RootState) => state.expenses;
  const expenses = useSelector(selectExpenses);

  return (
    <div className="">
      <div>List of expenses</div>
      <div className="list-expenses">
        {expenses.map((expense, i) => {
          return <OneExpense expense={expense} />;
        })}
      </div>
    </div>
  );
};

export default ListExpenses;
