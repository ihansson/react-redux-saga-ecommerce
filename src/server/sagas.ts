import { put, select, takeLatest } from "redux-saga/effects";
import { filterCallback, IProduct, IState } from "./schema";
import { getProductFilters, getProducts } from "./api";

function* actionGetProducts() {
  const products = yield getProducts();
  yield put({ type: "SET_PRODUCTS", products });
}

export function* watchGetProducts() {
  yield takeLatest("GET_PRODUCTS", actionGetProducts);
}

function* actionGetFilters() {
  const filters = yield getProductFilters();
  yield put({ type: "SET_FILTERS", filters });
}

export function* watchGetFilters() {
  yield takeLatest("GET_FILTERS", actionGetFilters);
}

const getFilterSelect = (state: IState) => state.filters;

function* actionUpdateFilter(args: any) {
  const filters = yield select(getFilterSelect);
  const filterFn = ((product) => {
    const on_sale = filters[2].current;
    if (on_sale) return product.on_sale;
    return true;
  }) as filterCallback<IProduct>;
  const products = yield getProducts(filterFn);
  yield put({ type: "SET_PRODUCTS", products });
}

export function* watchUpdateFilter() {
  yield takeLatest("UPDATE_FILTER", actionUpdateFilter);
}
