import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import {
  watchGetFilters,
  watchGetProduct,
  watchGetProducts,
  watchUpdateFilter,
} from "./server/sagas";
import { defaultState, reducer } from "./server/reducer";

// Reducer

function* rootSaga() {
  yield all([
    watchGetProducts(),
    watchGetProduct(),
    watchGetFilters(),
    watchUpdateFilter(),
  ]);
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducer as any,
  defaultState,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export const action = (actionConfig: any) => store.dispatch(actionConfig);
