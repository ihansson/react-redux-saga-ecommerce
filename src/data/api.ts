import _products from "./products.json";
import _filters from "./filters.json";
import { filterCallback, IProduct, IFilter } from "./schema";

const products = _products as IProduct[];
const filters = _filters as IFilter[];

export const getProducts = (
  filter?: filterCallback<IProduct>
): Promise<IProduct[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (filter) {
        resolve(products.filter(filter));
      } else {
        resolve(products);
      }
    }, 300);
  });
};

export const getProduct = (id: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.id === id)[0]);
    }, 300);
  });
};

export const getProductFilters = (): Promise<IFilter[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(filters);
    }, 300);
  });
};
