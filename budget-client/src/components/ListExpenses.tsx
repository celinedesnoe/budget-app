import React from "react";
import { useSelector } from "react-redux";
import OneExpense from "./OneExpense";

interface RootState {
  expenses: {
    amount: number;
    type: string;
    date: string;
    description: string;
  }[]; // your props validation
}

interface Props {
  history: { push(): void };
}

const ListExpenses: React.FC<Props> = ({ history }) => {
  const selectExpenses = (state: RootState) => state.expenses;
  const expenses = useSelector(selectExpenses);

  return (
    console.log("history", history),
    (
      <div className="">
        <div>Liste des dernières dépenses</div>
        <div className="list-expenses">
          {expenses.map((expense, i) => {
            return <OneExpense expense={expense} />;
          })}
        </div>
      </div>
    )
  );
};

export default ListExpenses;
