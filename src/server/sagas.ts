import { put, select, takeLatest } from "redux-saga/effects";
import { filterCallback, IFilter, IProduct, IState } from "./schema";
import { getProductFilters, getProducts, getProduct } from "./api";

function* actionGetProduct(action: any) {
  const product = yield getProduct(parseInt(action.id));
  yield put({ type: "SET_PRODUCT", product });
}

export function* watchGetProduct() {
  yield takeLatest("GET_PRODUCT", actionGetProduct);
}

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

function* actionUpdateFilter() {
  const filters = yield select(getFilterSelect);
  const filterFn = ((product) => {
    let match = true;
    filters.map((filter: IFilter) => {
      if (filter.name === "price") {
        if (
          product.price < filter.current[0] ||
          product.price > filter.current[1]
        ) {
          match = false;
        }
      } else {
        if (filter.current && filter.current !== product[filter.name]) {
          match = false;
        }
      }
      return filter;
    });
    return match;
  }) as filterCallback<IProduct>;
  const products = yield getProducts(filterFn);
  yield put({ type: "SET_PRODUCTS", products });
}

export function* watchUpdateFilter() {
  yield takeLatest("UPDATE_FILTER", actionUpdateFilter);
}
