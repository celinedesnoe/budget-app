import React, { useState } from "react";

interface IProps {
  select: (oneType: string) => void;
}

const ListTypes: React.FC<IProps> = ({ select }) => {
  const [selectedType, selectType] = useState("");

  const isSelected = (type: string) => {
    return selectedType === type;
  };

  const expenseTypes = [
    "Alimentation",
    "Maison",
    "Restaurant",
    "Sorties",
    "Vacances",
    "Taxes",
  ];
  return (
    <div className="d-flex list-expense-type">
      {expenseTypes.map((oneType) => {
        return (
          <div
            key={oneType}
            onClick={() => {
              select(oneType);
              selectType(oneType);
            }}
            className={`one-expense-type ${
              isSelected(oneType) ? "selected" : ""
            }`}
          >
            {oneType}
          </div>
        );
      })}
    </div>
  );
};

export default ListTypes;
