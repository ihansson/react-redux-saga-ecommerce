import _products from "./products.json";
import { filterCallback, IProduct } from "./schema";

const products = _products as IProduct[];

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
