import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductArchiveCard from "../Cards/ProductArchiveCards/ProductArchiveCard";
import { Link } from "react-router-dom";

const Product_Archive = ({ products, onAddToCard }) => {
  return (
    <ProductArchive>
      <ProductList itemScope itemType="https://schema.org/ItemList">
        {products.map((product, key) => {
          const keyId = product.id;
          const name = product.name;
          const slug = product.permalink;
          const price = product.price.formatted;
          const image = product.image.url;
          const alt = product.image.filename;

          const addToCardFunction = () => {
            onAddToCard(keyId, 1);
            // show();
          };

          return (
            <ProductArchiveCard
              key={keyId}
              keyVal={keyId}
              imageSource={image}
              imageAlt={alt}
              name={name}
              price={price}
              to={`/products/${keyId}`}
              toCard={addToCardFunction}
            />
          );
        })}
      </ProductList>
    </ProductArchive>
  );
};

export default Product_Archive;

const ProductArchive = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5rem 0rem;
`;

const ProductList = styled.ol`
  display: flex;
  max-width: 1280px;
  justify-content: space-between;
  gap: 5em;
  list-style: none;
`;
