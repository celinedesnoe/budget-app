import React from "react";
interface IProps {
  expense: { amount: number; type: string; date: string };
}

const OneExpense: React.FC<IProps> = ({ expense }) => {
  let { amount, type, date } = expense;
  return (
    <div
      className="d-flex justify-content-between align-items-center one-expense"
      key={amount}
    >
      <div className="d-flex align-items-center">
        <div className="type">{type}</div>
        <div>
          <div>Expense</div>
          <div>{date}</div>
        </div>
      </div>
      <div>-{amount}€</div>
    </div>
  );
};

export default OneExpense;
