import { IBasket, IBasketItem, IFilter, IProduct } from "./schema";

export const defaultState = {
  products: [] as IProduct[],
  filters: [] as IFilter[],
  product: {} as IProduct,
  basket: { items: [] as IBasketItem[] } as IBasket,
  loading: {
    product: false,
    products: false,
    filters: false,
  },
};

export function reducer(state: any, action: any) {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...state, loading: { ...state.loading, product: true } };
    case "SET_PRODUCT":
      return {
        ...state,
        product: action.product,
        loading: { ...state.loading, product: false },
      };
    case "GET_PRODUCTS":
      return { ...state, loading: { ...state.loading, products: true } };
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.products,
        loading: { ...state.loading, products: false },
      };
    case "GET_FILTERS":
      return { ...state, loading: { ...state.loading, filters: true } };
    case "SET_FILTERS":
      return {
        ...state,
        filters: action.filters,
        loading: { ...state.loading, filters: false },
      };
    case "UPDATE_FILTER":
      const filters = state.filters.slice();
      filters[action.filterIndex] = {
        ...filters[action.filterIndex],
        current: action.value,
      };
      return {
        ...state,
        filters,
        loading: { ...state.loading, products: true },
      };
    case "ADD_TO_BASKET":
      let items = state.basket.items.slice();
      let found = false;
      items = items.map((item: IBasketItem) => {
        if (item.product.name === action.product.name) {
          found = true;
          return { ...item, quantity: item.quantity + 1 };
        }
        return { ...item };
      });
      if (!found) {
        items.push({
          quantity: 1,
          product: action.product,
        });
      }
      return {
        ...state,
        basket: {
          ...state.basket,
          items,
        },
      };
    case "REMOVE_FROM_BASKET": {
      let items = state.basket.items.slice();
      items = items.map((item: IBasketItem) => {
        if (item.product.name === action.product.name) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return { ...item };
      });
      return {
        ...state,
        basket: {
          ...state.basket,
          items: items.filter((item: IBasketItem) => item.quantity > 0),
        },
      };
    }
    case "CHECKOUT": {
      return {
        ...state,
        basket: {
          items: [],
        },
      };
    }
  }
  return state;
}
