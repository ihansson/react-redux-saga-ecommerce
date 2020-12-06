import React from "react";
import { IProduct } from "../server/schema";
import { NoResults } from "./Helpers";

export const ProductSearchResults: React.FunctionComponent<{
  products: IProduct[];
}> = ({ products }) => {
  if (products.length === 0) return <NoResults />;
  return (
    <section>
      {products.map((product) => (
        <div key={product.id}>
          <h2>
            {product.name} (SKU: {product.id})
          </h2>
          <div>
            <h3>{product.price}</h3>
            <strong>Material: </strong> {product.material}
            <br />
            <strong>On Sale: </strong> {product.on_sale ? "Yes" : "No"}
          </div>
          <button>Buy</button>
        </div>
      ))}
    </section>
  );
};
