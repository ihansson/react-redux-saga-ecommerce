import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { action } from "../store";
import ProductPageDetails from "./ProductPageDetails";

interface ProductPageParams {
  id: string;
}

export const ProductPage = () => {
  const { id } = useParams<ProductPageParams>();

  useEffect(() => {
    action({ type: "GET_PRODUCT", id });
  }, [id]);

  return (
    <div>
      <ProductPageDetails />
    </div>
  );
};
