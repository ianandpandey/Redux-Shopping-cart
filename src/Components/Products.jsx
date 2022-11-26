import React, { useState, useEffect } from "react";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setProduct(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="productsWrapper">
      {product.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="images" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
