import styled from "styled-components";

export const CartCard = styled.div`
  display: flex;
  width: 90%;
  background-color: white;
  border-radius: 8px;
  padding-left: 0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;
export const CardImage = styled.div`
  display: flex;
  width: 30%;
`;
export const StyledImage = styled.img`
  width: 100%;
  align-self: center;
  justify-content: center;
  padding: 0.5rem;
`;

export const CartCardInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6em;
  padding: 1em 1em;
`;

export const CardInfo = styled.div`
  display: flex;
`;

export const Details = styled.div``;

export const ProductName = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  padding-bottom: 5px;
`;

export const ProductInfo = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-style: italic;
  font-size: 1rem;
`;

export const ProductPrice = styled.span`
  display: flex;
  vertical-align: bottom;
  font-size: 1.4rem;
  font-weight: 800;
`;
export const CardControls = styled.div`
  display: flex;
  bottom: 0;
  width: 100%;
  gap: 15px;
`;
export const DeleteProduct = styled.button`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: flex-end;
  border: none;
  background-color: transparent;
  cursor: pointer;

  :hover > .MuiSvgIcon-root {
    color: black;
  }
  > .MuiSvgIcon-root {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.grey};
  }
`;
export const AddMore = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: end;
  align-items: center;
  gap: 4px;
`;

export const Remove = styled.button`
  display: flex;
  width: 25px;
  height: 25px;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 100%;

  > .MuiSvgIcon-root {
    font-size: 22px;
    color: ${({ theme }) => theme.colors.black};
    padding: 3px;
  }
`;

export const NumberOfItems = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  width: 25px;
  height: 25px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Add = styled.button`
  display: flex;
  width: 25px;
  height: 25px;
  justify-content: center;
  align-items: center;
  border: none;
  transition-duration: 200ms;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 100%;
  :hover {
    background-color: ${({ theme }) => theme.colors.blackHover};
  }

  > .MuiSvgIcon-root {
    font-size: 22px;
    color: white;
    padding: 3px;
  }
`;
