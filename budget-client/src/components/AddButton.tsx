import React, { FC } from "react";
import { history } from "../_helpers/history";

const AddButton: FC = () => {
  return (
    <div
      className="button-add"
      onClick={() => {
        history.push("/add-expense");
      }}
    >
      +
    </div>
  );
};

export default AddButton;
