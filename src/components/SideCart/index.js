import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import CartProductCard from "../Cards/SidecartCards/CartProductCard";

const SideCart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
  ...props
}) => {
  // const LoadingCart = () => {
  //   return (
  //     <>
  //       <Loading>Loading...</Loading>
  //     </>
  //   );
  // };

  const EmptyCart = () => {
    return (
      <>
        <EmptyCartMessage>Your cart is empty!</EmptyCartMessage>
      </>
    );
  };

  const FilledCart = () => {
    // if (!cart.line_items) return <LoadingCart />;
    return (
      <>
        {cart.line_items.map((item) => (
          <CartProductCard
            key={item.id}
            image={item.image.url}
            title={item.name}
            dimensions={item.id}
            price={item.price.formatted * item.quantity}
            quantity={item.quantity}
            removeOneItem={() =>
              handleUpdateCartQty(item.id, item.quantity - 1)
            }
            addOneItem={() => handleUpdateCartQty(item.id, item.quantity + 1)}
            removeFullItem={() => handleRemoveFromCart(item.id)}
          />
        ))}
      </>
    );
  };

  // const loader = !cart && <LoadingCart />;

  return (
    <SidecartContainer
      transform={props.transform}
      open={props.open}
      ref={props.sideRef}
    >
      <ExitButton open={props.exitBtn} onClick={props.hideIt}>
        <CloseIcon />
      </ExitButton>
      <ProductCards>
        {!cart?.line_items?.length ? <EmptyCart /> : <FilledCart />}
      </ProductCards>
      <Total></Total>
    </SidecartContainer>
  );
};

export default SideCart;

// const Loading = styled.span`
//   color: white;
//   font-size: 1.2rem;
// `;

const SidecartContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 0;
  background-color: #1c2022;
  width: 640px;
  height: 100%;
  box-sizing: border-box;
  box-shadow: 16px 0 32px -16px #000;
  padding: 34px;
  z-index: 100;
  transition-duration: 300ms;
  transition: transform 0.3 ease-in-out;
  transform: ${(props) => props.transform};

  //Glassmorphism effect
  background: rgba(28, 32, 34, 0.35);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  box-shadow: 0 0 0 0.1rem rgba(000, 000, 000, 0.15);
`;
const ExitButton = styled.button`
  display: flex;
  align-self: end;
  width: fit-content;
  text-align: end;
  background-color: transparent;
  border: none;
  transition-duration: 300ms;
  border-radius: 100px;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.colors.grey};
  }

  > .MuiSvgIcon-root {
    color: white;
    font-size: 2rem;
    margin: 4px;
  }
`;
const ProductCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Total = styled.div``;

const EmptyCartMessage = styled.span`
  color: white;
  font-size: 1.3rem;
`;
