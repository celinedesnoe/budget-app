import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { budgetUpdateSuccess, addExpenseSuccess } from "../_actions/action";
import ListTypes from "./ListTypes";

const ExpenseInput: React.FC = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState<number | string>("");
  const [type, setType] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let expense = e.target.value;
    setAmount(+expense);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addExpense();
  };

  const selectType = (oneType: string) => {
    setType(oneType);
  };

  const addExpense = () => {
    let expense = { amount: amount, type: type };
    dispatch(budgetUpdateSuccess(amount));
    dispatch(addExpenseSuccess(expense));
    setAmount("");
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
          step="any"
        />
        <ListTypes select={selectType} />
      </form>
      <div
        className="minus"
        onClick={() => {
          addExpense();
        }}
      >
        Add expense
      </div>
    </div>
  );
};

export default ExpenseInput;
