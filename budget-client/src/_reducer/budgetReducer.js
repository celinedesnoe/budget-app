export const budgetReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREASE":
      return (state += action.payload);
    case "DECREASE":
      console.log("action", action);
      return (state -= action.payload);
    default:
      return state;
  }
};
