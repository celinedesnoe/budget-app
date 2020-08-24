import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { budgetUpdateSuccess } from "../_actions/action";

const ExpenseInput: React.FC = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState<number | string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let expense = e.target.value;
    setAmount(+expense);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (amount) {
      dispatch(budgetUpdateSuccess(amount));
    }
    setAmount("");
  };

  return (
    console.log(amount),
    (
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
    )
  );
};

export default ExpenseInput;
