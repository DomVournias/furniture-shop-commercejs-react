import React, { useState, useEffect } from "react";
import { commerce } from "../../lib/commerce";
import styled from "styled-components";
import SingleProductSkeleton from "./SingleProductSkeleton";

const createMarkup = (text) => {
  return { __html: text };
};

const SingleProduct = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});

  // const fetchProduct = async (id) => {
  //   const response = await commerce.products.retrieve(id);
  //   const { name, categories, price, image, quantity, description } = response;

  //   setProduct({
  //     id,
  //     name,
  //     quantity,
  //     description,
  //     image: image.url,
  //     price: price.formatted,
  //     category: categories[0].name,
  //   });
  // };

  // useEffect(() => {
  //   const id = window.location.pathname.split("/");
  //   fetchProduct(id[2]);
  //   try {
  //   } catch (err) {}
  // }, []);

  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true);
      try {
        const res = await commerce.products.retrieve(id);
        const { name, categories, price, image, quantity, description } = res;

        setProduct({
          id,
          name,
          quantity,
          description,
          image: image.url,
          price: price.formatted,
          category: categories[0].name,
        });
      } catch (err) {}
      setIsLoading(false);
    };
    const id = window.location.pathname.split("/");
    getProduct(id[2]);
  }, []);

  return isLoading ? (
    <SingleProductSkeleton />
  ) : (
    <SingleProductContainer>
      <SingleProductInner>
        <LeftSide>
          <ProductImages src={product.image}></ProductImages>
        </LeftSide>

        <RightSide>
          <Category>{product.category}</Category>
          <Title>{product.name}</Title>
          <Description
            dangerouslySetInnerHTML={createMarkup(product.description)}
          ></Description>
          <TotalPrice>{product.price}€</TotalPrice>
          <Quantity></Quantity>
          <AddToCard></AddToCard>
        </RightSide>
      </SingleProductInner>
      <RelatedProducts></RelatedProducts>
    </SingleProductContainer>
  );
};

export default SingleProduct;

const SingleProductContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 4rem 0;
`;
const SingleProductInner = styled.div`
  display: flex;
  gap: 4rem;
  align-self: center;
  max-width: 1600px;
  padding: 2rem;
`;
const LeftSide = styled.div`
  width: 50%;
`;

const ProductImages = styled.img``;

const RightSide = styled.div`
  width: 50%;
`;

const Category = styled.h4`
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.grey};
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`;
const TotalPrice = styled.span`
  font-size: 2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.blue};
`;

const Quantity = styled.div``;
const AddToCard = styled.div``;
const RelatedProducts = styled.div``;
