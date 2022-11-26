import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products.map((product) => (
          <div className="cartCard">
            <img src={product.image} alt="img" />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button className="btn">Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
