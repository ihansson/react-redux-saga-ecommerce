import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { put, all, takeEvery } from "redux-saga/effects";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: "INCREMENT" });
}

export function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export default function* rootSaga() {
  yield all([watchIncrementAsync()]);
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case "INCREMENT":
      return 25;
    case "INCREMENT_ASYNC":
      return 12;
  }
  return state;
}

// Init

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  reducer as any,
  1,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

export const action = (type: string) => store.dispatch({ type });
