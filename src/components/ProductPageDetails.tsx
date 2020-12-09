import React from "react";
import { Loading } from "./Helpers";
import { connect } from "react-redux";
import { IProduct, IState } from "../server/schema";

const mapStateToProps = (state: IState) => ({
  product: state.product,
  loading: state.loading.product,
});

interface ProductPageProps {
  product: IProduct;
  loading: boolean;
}

const ProductPageDetails: React.FC<ProductPageProps> = ({
  product,
  loading,
}) => {
  if (loading) return <Loading />;
  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
};

export default connect(mapStateToProps)(ProductPageDetails);
