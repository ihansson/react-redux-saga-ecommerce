import React, { useEffect } from "react";
import { IState } from "../server/schema";
import { Loading, NoResults } from "./Helpers";
import { useSelector } from "react-redux";
import { action } from "../store";
import { Link } from "react-router-dom";

export const ProductSearchResults = () => {
  const products = useSelector((state: IState) => state.products);
  const loading = useSelector((state: IState) => state.loading.products);

  useEffect(() => {
    action({ type: "GET_PRODUCTS" });
  }, []);

  if (loading) return <Loading />;
  if (products.length === 0) return <NoResults />;

  return (
    <section>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`product/${product.id}`}>
            <h2>
              {product.name} (SKU: {product.id})
            </h2>
          </Link>
          <div>
            <h3>{product.price}</h3>
            <strong>Material: </strong> {product.material}
            <br />
            <strong>On Sale: </strong> {product.on_sale ? "Yes" : "No"}
          </div>
          <button onClick={() => action({ type: "ADD_TO_BASKET", product })}>
            Buy
          </button>
        </div>
      ))}
    </section>
  );
};
