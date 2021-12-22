import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import {
  CTA,
  Details,
  ImageSelf,
  InnerProductCard,
  Product,
  ProductInfo,
  StyledCartBtn,
  StyledImage,
  ViewItem,
  Price,
  Buttons,
} from "./ProductArchiveCard.styled";

const ProductArchiveCard = (props) => {
  return (
    <Product itemScope itemType="http://schema.org/Product" key={props.keyVal}>
      <InnerProductCard>
        <ImageSelf>
          <StyledImage src={props.imageSource} alt={props.imageAlt} />
        </ImageSelf>
        <ProductInfo>
          <Details>
            <h2>{props.name}</h2>
          </Details>

          <CTA>
            <Price>
              <span itemProp="price">{props.price}€</span>
            </Price>
            <Buttons>
              <StyledCartBtn onClick={props.toCard}>Add to Cart</StyledCartBtn>
              <ViewItem to={props.to}>
                <RemoveRedEyeIcon />
              </ViewItem>
            </Buttons>
          </CTA>
        </ProductInfo>
      </InnerProductCard>
    </Product>
  );
};

export default ProductArchiveCard;
