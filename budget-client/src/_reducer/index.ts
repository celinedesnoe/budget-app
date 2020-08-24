import { combineReducers } from "redux";
import { budgetReducer } from "./budgetReducer";
import { expenseReducer } from "./expenseReducer";

export const rootReducer = combineReducers({
  budget: budgetReducer,
  expenses: expenseReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
