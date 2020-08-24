import React, { useState, SyntheticEvent, FormEventHandler } from "react";
import { useDispatch } from "react-redux";
import { budgetUpdateSuccess } from "../_actions/action";

const ExpenseInput = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let expense = e.target.value;
    // if (expense > 0) {
    setAmount(+expense);
    // }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(budgetUpdateSuccess(amount));
  };

  return (
    <div className="d-flex ">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          className={`form-control expense-input pb-1`}
          placeholder={"130"}
          value={amount}
          type={"number"}
          onChange={(e) => handleChange(e)}
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
