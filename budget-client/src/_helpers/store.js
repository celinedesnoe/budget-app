import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "../_reducer/index.ts";
import rootSaga from "../_sagas/saga";

// create a Saga middleware with a list of Sagas to run (so far we have only one helloSaga)
const sagaMiddleware = createSagaMiddleware();

// connect the Saga middleware to the Redux store
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// start the saga
sagaMiddleware.run(rootSaga);
