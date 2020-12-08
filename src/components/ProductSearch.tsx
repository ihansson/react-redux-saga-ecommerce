import React from "react";
import { ProductSearchResults } from "./ProductSearchResults";
import { ProductSearchFilters } from "./ProductSearchFilters";

export const ProductSearch = () => {
  return (
    <div>
      <aside>
        <ProductSearchFilters />
      </aside>
      <main>
        <ProductSearchResults />
      </main>
    </div>
  );
};
