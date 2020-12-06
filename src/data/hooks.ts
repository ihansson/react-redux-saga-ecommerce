import { filterCallback, IProduct, IFilter } from "./schema";
import { useEffect, useState } from "react";
import { getProductFilters, getProducts } from "./api";

export const useLoadingWithPromise = <T, A>(
  def: T,
  fn: (args?: A) => Promise<T>,
  args?: A
) => {
  const [items, setItems] = useState(def);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const makeRequest = async () => {
      const results = await fn(args);
      setItems(results);
      setLoading(false);
    };
    makeRequest();
  }, [args, fn]);

  return [loading, items] as [loading: boolean, items: T];
};

export const useGetProducts = (filter?: filterCallback<IProduct>) => {
  return useLoadingWithPromise([] as IProduct[], getProducts, filter);
};

export const useGetFilters = () => {
  return useLoadingWithPromise([] as IFilter[], getProductFilters);
};
