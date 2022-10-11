import React from "react";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <div>
        <p>
          Subtotal ({basket.length} items) :
          <strong> $ {getBasketTotal(basket)}</strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox" />
          This order contains a gift.
        </small>
      </div>
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
