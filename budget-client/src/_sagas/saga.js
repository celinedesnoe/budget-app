import { takeEvery, put, call, all } from "redux-saga/effects";

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* helloSaga() {
  yield console.log("Hello Sagas!");
}

// call just like put, returns an Effect which instructs the middleware to call a given function with the given arguments.
// In fact, neither put nor call performs any dispatch or asynchronous call by themselves, they return plain JavaScript objects.
// put({type: 'DECREASE'}) // => { PUT: {type: 'DECREASE'} }
// call(delay, 4000)        // => { CALL: {fn: delay, args: [4000]}}

// What happens is that the middleware examines the type of each yielded Effect then decides how to fulfill that Effect.
// If the Effect type is a PUT then it will dispatch an action to the Store.
// If the Effect is a CALL then it'll call the given function.

export function* budgetAsync(value) {
  yield call(delay, 4000);
  yield put({ type: "DECREASE", payload: value });
}

export function* addExpenseAsync(value) {
  yield put({ type: "ADD", payload: value });
}

// CATCH THE ACTION AND THEN RUN THE FUNCTION ageUpAsync THAT DISPATCH THE ACTION WITH A DIFFERENT NAME
export function* watchBudgetDown() {
  yield takeEvery("DECREASE_ASYNC", budgetAsync);
}

export function* watchAddExpense() {
  yield takeEvery("ADD_ASYNC", addExpenseAsync);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
// This Saga yields an array with the results of calling our two sagas
// will be started in parallel
export default function* rootSaga() {
  yield all([watchBudgetDown(), watchAddExpense(), helloSaga()]);
}
