import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { budgetUpdateSuccess } from "../_actions/action";

type ExpenseInput = {
  value: string;
  paragraph: string;
};

const ExpenseInput = ({ value }: ExpenseInput) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  return (
    <div className="d-flex ">
      <input
        className={`form-control expense-input pb-1  `}
        value={amount}
        onChange={(e) => setAmount(+e.target.value)}
      />
      <div
        className="minus"
        onClick={() => {
          dispatch(budgetUpdateSuccess(amount));
        }}
      >
        Add expense
      </div>
    </div>
  );
};

export default ExpenseInput;
