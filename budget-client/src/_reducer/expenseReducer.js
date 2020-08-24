export const expenseReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return state.concat(action.payload);
    case "REMOVE":
      return state.filter((el) => el !== action.payload);
    default:
      return state;
  }
};
