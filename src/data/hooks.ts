import { filterCallback, IProduct } from "./schema";
import { useEffect, useState } from "react";
import { getProducts } from "./api";

export const useGetProducts = (filter?: filterCallback<IProduct>) => {
  const [products, setProducts] = useState([] as IProduct[]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const makeRequest = async () => {
      const results = await getProducts(filter);
      setProducts(results);
      setLoading(false);
    };
    makeRequest();
  }, [filter]);

  return [loading, products] as [loading: boolean, products: IProduct[]];
};
