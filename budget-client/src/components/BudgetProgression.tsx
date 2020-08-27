import React from "react";

const BudgetProgression: React.FC = ({}) => {
  let progression = 100 * 0.6;
  return (
    <div className="card d-flex ">
      <div className="lighter">Budget total consommé</div>

      <div className="bar">
        <div
          style={{ width: progression + "%" }}
          className="bar-progression bar-progression-main"
        >
          <div className="bar-text">60%</div>
        </div>
      </div>
    </div>
  );
};

export default BudgetProgression;
