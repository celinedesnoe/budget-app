import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { budgetUpdateSuccess, addExpenseSuccess } from "../_actions/action";
import ListTypes from "./ListTypes";
import moment from "moment";
import "moment/locale/fr";

moment.locale("fr");

const ExpenseInput: FC = () => {
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
    let date = moment().format("L");
    let expense = { amount: amount, type: type, date: date };
    dispatch({ type: "DECREASE_ASYNC", payload: amount });
    // dispatch(budgetUpdateSuccess(amount));
    dispatch(addExpenseSuccess(expense));
    setAmount("");
  };

  return (
    <div className="">
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
        className="button-add-expense"
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
