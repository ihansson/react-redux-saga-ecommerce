import { Loading } from "./Helpers";
import React, { useEffect } from "react";
import { ProductSearchResults } from "./ProductSearchResults";
import { ProductSearchFilters } from "./ProductSearchFilters";
import { useSelector } from "react-redux";
import { IState } from "../server/schema";
import { action } from "../store";

export const ProductSearch = () => {
  const filters = useSelector((state: IState) => state.filters);
  const products = useSelector((state: IState) => state.products);
  const loading = useSelector((state: IState) => state.loading);

  useEffect(() => {
    action({ type: "GET_FILTERS" });
    action({ type: "GET_PRODUCTS" });
  }, []);

  return (
    <div>
      <aside>
        {loading.filters ? (
          <Loading />
        ) : (
          <ProductSearchFilters filters={filters} />
        )}
      </aside>
      <main>
        {loading.products ? (
          <Loading />
        ) : (
          <ProductSearchResults products={products} />
        )}
      </main>
    </div>
  );
};
