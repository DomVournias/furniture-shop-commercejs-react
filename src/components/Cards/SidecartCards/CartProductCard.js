import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import {
  Add,
  AddMore,
  CardControls,
  CardImage,
  CardInfo,
  CartCard,
  CartCardInner,
  DeleteProduct,
  Details,
  NumberOfItems,
  ProductInfo,
  ProductName,
  ProductPrice,
  Remove,
  StyledImage,
} from "./CartProductCard.styled";

const CartProductCard = (props) => {
  return (
    <CartCard>
      <CardImage>
        <StyledImage src={props.image} />
      </CardImage>
      <CartCardInner>
        <CardInfo>
          <Details>
            <ProductName>{props.title}</ProductName>
            <ProductInfo>{props.dimensions}</ProductInfo>
          </Details>
          <DeleteProduct onClick={props.removeFullItem}>
            <CloseIcon />
          </DeleteProduct>
        </CardInfo>
        <CardControls>
          <ProductPrice>{props.price}€</ProductPrice>
          <AddMore>
            <Remove onClick={props.removeOneItem}>
              <RemoveRoundedIcon />
            </Remove>
            <NumberOfItems>{props.quantity}</NumberOfItems>
            <Add onClick={props.addOneItem}>
              <AddIcon />
            </Add>
          </AddMore>
        </CardControls>
      </CartCardInner>
    </CartCard>
  );
};

export default CartProductCard;
