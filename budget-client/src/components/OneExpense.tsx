import React from "react";
import { useSelector } from "react-redux";

interface RootState {
  budget: number; // your props validation
}

const OneExpense: React.FC = () => {
  return <div className="d-flex ">One expense</div>;
};

export default OneExpense;
