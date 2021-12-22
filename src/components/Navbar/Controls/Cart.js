import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { open, show } from "../../SideCart/index";

const Cart = (props) => {
  return (
    <CartButton open={props.open} onClick={props.show}>
      <ShoppingCart />
      <Badge badgeDisplay={props.badge}>{props.number}</Badge>
    </CartButton>
  );
};

export default Cart;

const CartButton = styled.div`
  position: relative;
  display: flex;
  width: fit-content;
  padding: 0.6em;
  border-radius: 30px;
  transition-duration: 300ms;
  cursor: pointer;
  align-self: center;
  :hover {
    background-color: #ffffff32;
  }
`;

const Badge = styled.span`
  position: absolute;
  display: ${(props) => props.badgeDisplay};
  top: -1px;
  right: -1px;
  padding: 1px 5px;
  text-align: center;
  line-height: 15px;
  border-radius: 30px;
  width: fit-content;
  height: fit-content;
  font-size: 0.6rem;
  font-weight: 800;
  background-color: ${({ theme }) => theme.colors.orange};
`;
