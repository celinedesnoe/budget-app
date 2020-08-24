import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { budgetUpdateSuccess, addExpenseSuccess } from "../_actions/action";

const ExpenseInput: React.FC = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState<number | string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let expense = e.target.value;
    setAmount(+expense);
  };

  const handleSubmit2 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (amount) {
      dispatch(budgetUpdateSuccess(amount));
      dispatch(addExpenseSuccess(amount));
    }
    setAmount("");
  };

  return (
    <div className="d-flex ">
      <form
        onSubmit={(e) => {
          handleSubmit2(e);
        }}
      >
        <input
          className={`form-control expense-input pb-1`}
          placeholder={"130"}
          value={amount}
          type={"number"}
          onChange={(e) => handleChange(e)}
          step="any"
        />
      </form>
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
