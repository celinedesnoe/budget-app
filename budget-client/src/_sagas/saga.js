import { takeLatest, put, delay } from "redux-saga/effects";

function* ageUpAsync() {
  yield delay(4000);
  yield put({ type: "AGE_UP_ASYNC", value: 1 });
}

// CATCH THE ACTION AND THEN RUN THE FUNCTION ageUpAsync THAT DISPATCH THE ACTION WITH A DIFFERENT NAME
export function* watchAgeUp() {
  yield takeLatest("AGE_UP", ageUpAsync);
}
