import { combineReducers } from "redux";
import { budgetReducer } from "./budgetReducer";

export const rootReducer = combineReducers({
  budget: budgetReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
