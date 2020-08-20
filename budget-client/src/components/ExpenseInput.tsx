import React from "react";
import { useDispatch } from "react-redux";

type CardProps = {
  title: string;
  paragraph: string;
};

const ExpenseInput = ({ title, paragraph }: CardProps) => {
  const dispatch = useDispatch();
  return (
    <div className="d-flex ">
      <input className={`form-control expense-input pb-1  `} />
      <div
        className="minus"
        onClick={() => {
          dispatch({ type: "DECREASE", payload: 1 });
        }}
      >
        Add expense
      </div>
    </div>
  );
};

export default ExpenseInput;
