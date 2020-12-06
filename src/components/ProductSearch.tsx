import { useGetFilters, useGetProducts } from "../data/hooks";
import { Loading } from "./Helpers";
import React from "react";
import { ProductSearchResults } from "./ProductSearchResults";
import { ProductSearchFilters } from "./ProductSearchFilters";

export const ProductSearch = () => {
  const [loadingProducts, products] = useGetProducts();
  const [loadingFilters, filters] = useGetFilters();

  return (
    <div>
      <aside>
        {loadingFilters ? (
          <Loading />
        ) : (
          <ProductSearchFilters filters={filters} />
        )}
      </aside>
      <main>
        {loadingProducts ? (
          <Loading />
        ) : (
          <ProductSearchResults products={products} />
        )}
      </main>
    </div>
  );
};
