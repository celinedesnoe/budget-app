import React from "react";
interface IProps {
  expense: { amount: number; type: string; date: string; description: string };
}

const OneExpense: React.FC<IProps> = ({ expense }) => {
  let { amount, type, date, description } = expense;
  return (
    <div
      className="d-flex justify-content-between align-items-center one-expense"
      key={amount}
    >
      <div className="d-flex align-items-center">
        <div className="type">{type}</div>
        <div>
          <div>{description}</div>
          <div>{date}</div>
        </div>
      </div>
      <div>-{amount}€</div>
    </div>
  );
};

export default OneExpense;
