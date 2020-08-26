import React from "react";

const BudgetProgression: React.FC = ({}) => {
  let progression = 200 * 0.6;
  return (
    <div className="d-flex">
      <div className="bar">
        <div style={{ width: progression }} className="bar-progression"></div>
      </div>
      <div>60%</div>
    </div>
  );
};

export default BudgetProgression;
