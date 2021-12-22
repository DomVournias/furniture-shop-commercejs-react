import styled from "styled-components";
import { Link } from "react-router-dom";

export const Product = styled.li`
  display: flex;
  width: 100%;
  height: auto;
  background-color: white;
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const InnerProductCard = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
`;
export const ImageSelf = styled.div`
  height: 50%;
  width: 100%;
`;

export const StyledImage = styled.img`
  height: 100%;
  border-radius: 20px;
  padding: 1rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  padding: 1rem;
  height: 50%;
  /* position: relative; */
  /* -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1; */
  /* flex: 1; */
  /* -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column; */
  flex-direction: column;
  /* -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start; */
  /* align-items: flex-start; */
  /* -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end; */
  /* justify-content: flex-end; */
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 70%;

  > h2 {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const Price = styled.div`
  > span {
    margin: 2vh 0;
    width: 30%;
    font-size: 1.2rem;
    font-weight: 700;
    /* padding: 0.3em; */
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.blackDark};
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 1em;
`;

export const CTA = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  gap: 1em;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const AddToCart = styled.div``;

export const StyledCartBtn = styled.button`
  display: flex;
  width: 70%;
  height: 100%;
  padding: 0.8rem 0;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 15px;
  border-radius: 8px;
  text-decoration: none;
  outline: none;
  border: none;
  cursor: pointer;
  transition-duration: 200ms;
  background-color: ${({ theme }) => theme.colors.black};

  :hover {
    background-color: ${({ theme }) => theme.colors.blackHover};
  }
`;

export const ViewItem = styled(Link)`
  display: flex;
  width: 30%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.black};

  > .MuiSvgIcon-root {
    color: ${({ theme }) => theme.colors.black};
    font-size: 23px;
  }
`;
