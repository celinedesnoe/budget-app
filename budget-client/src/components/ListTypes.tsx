import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

interface IProps {
  select: (oneType: string) => void;
}

const ListTypes: React.FC<IProps> = ({ select }) => {
  const [selectedType, selectType] = useState("");

  const isSelected = (type: string) => {
    return selectedType === type;
  };

  const expenseTypes = [
    { type: "Alimentation", icon: ["fa", "carrot"] },
    { type: "Maison", icon: ["fa", "home"] },
    { type: "Restaurant", icon: ["fa", "utensils"] },
    { type: "Sorties", icon: ["fa", "glass-cheers"] },
    { type: "Vacances", icon: ["fa", "umbrella-beach"] },
    { type: "Taxes", icon: ["fa", "frown"] },
  ];
  return (
    <div className="d-flex list-expense-type">
      {expenseTypes.map((oneType) => {
        return (
          <div
            key={oneType.type}
            onClick={() => {
              select(oneType.type);
              selectType(oneType.type);
            }}
            className={`one-expense-type d-flex flex-column align-items-center justify-content-center ${
              isSelected(oneType.type) ? "selected" : ""
            }`}
          >
            <div>
              <FontAwesomeIcon icon={oneType.icon as [IconPrefix, IconName]} />
            </div>
            <div>{oneType.type}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ListTypes;
