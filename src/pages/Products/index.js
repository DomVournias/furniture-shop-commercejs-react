import React from "react";
import Product_Archive from "../../components/Directory";

const Products = ({ products, onAddToCard }) => {
  return (
    <div>
      <h1>Products</h1>
      <h2>Hello everyone</h2>
      <Product_Archive products={products} onAddToCard={onAddToCard} />
    </div>
  );
};

export default Products;
