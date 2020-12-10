import { IBasket, IState } from "../server/schema";
import React from "react";
import { connect } from "react-redux";
import { action } from "../store";

const mapStateToProps = (state: IState) => ({
  basket: state.basket,
});

interface BasketProps {
  basket: IBasket;
}

const Basket: React.FC<BasketProps> = ({ basket }) => {
  return (
    <div>
      <h1>Basket</h1>
      {basket.items.map((item) => (
        <div key={item.product.name}>
          {item.product.name} x {item.quantity}
          <button
            onClick={() =>
              action({ type: "REMOVE_FROM_BASKET", product: item.product })
            }
          >
            Reduce
          </button>
        </div>
      ))}

      <button onClick={() => action({ type: "CHECKOUT" })}>Checkout</button>
    </div>
  );
};

export default connect(mapStateToProps)(Basket);
