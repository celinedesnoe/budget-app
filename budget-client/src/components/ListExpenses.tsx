import React from "react";
import { useSelector } from "react-redux";

interface RootState {
  expenses: { amount: number; type: string; date: string }[]; // your props validation
}

const OneExpense: React.FC = () => {
  const selectExpenses = (state: RootState) => state.expenses;
  const expenses = useSelector(selectExpenses);

  return (
    <div className="d-flex ">
      <div>List of expenses</div>
      <div>
        {expenses.map((expense, i) => {
          return (
            <div key={i}>
              {expense.amount} {expense.type} {expense.date}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OneExpense;
