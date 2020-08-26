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
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addExpense();
  };

  const selectType = (oneType: string) => {
    setType(oneType);
  };

  const addExpense = () => {
    let date = moment().format("L");
    let expense = {
      amount: amount,
      type: type,
      date: date,
      description: description,
    };
    dispatch({ type: "DECREASE_ASYNC", payload: amount });
    // dispatch(budgetUpdateSuccess(amount));
    dispatch(addExpenseSuccess(expense));
    setAmount("");
    setType("");
    setDescription("");
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
          onChange={(e) => setAmount(+e.target.value)}
          step="any"
        />
        <ListTypes select={selectType} />
        <input
          className={`form-control expense-input pb-1`}
          placeholder={"Monoprix"}
          value={description}
          type={"text"}
          onChange={(e) => setDescription(e.target.value)}
          step="any"
        />
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
