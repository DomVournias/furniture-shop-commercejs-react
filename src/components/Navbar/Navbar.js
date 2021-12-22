import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import SideCart from "../SideCart";
// import DropDown from "./Controls/Dropdown/DropDown";
import Cart from "./Controls/Cart";
import NavLinks from "./NavLinks/NavLinks";
import { Link } from "react-router-dom";

const Navbar = ({
  totalItems,
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const [open, setOpen] = useState("translateX(100%)");
  const hide = () => setOpen("translateX(100%)");
  const show = () => setOpen("translateX(0)");

  let menuRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!menuRef.current.contains(event.target)) setOpen("translateX(100%)");
    });
  });

  return (
    <>
      <SideCart
        open={open}
        transform={open}
        exitBtn={open}
        hideIt={hide}
        cart={cart}
        sideRef={menuRef}
        handleUpdateCartQty={handleUpdateCartQty}
        handleRemoveFromCart={handleRemoveFromCart}
        handleEmptyCart={handleEmptyCart}
      ></SideCart>
      <Header>
        <HeaderInner>
          <NavbarWrapper>
            <Logo to="/">ΕΠΙΠΛΑ ΒΟΥΡΝΙΑ</Logo>
            <NavLinks />
            <ShopingNav>
              {/* <DropDown {...props} /> */}
              <Cart
                open={open}
                show={show}
                number={totalItems}
                badge={totalItems ? "block" : "none"}
              />
            </ShopingNav>
          </NavbarWrapper>
        </HeaderInner>
      </Header>
    </>
  );
};

export default Navbar;

const Header = styled.div`
  display: block;
  width: 100%;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.blackDark};
  color: white;
  -webkit-box-shadow: 0 0 10px 5px rgb(0 0 0 / 31%);
  box-shadow: 0 0 10px 5px rgb(0 0 0 / 31%);
`;

const HeaderInner = styled.div`
  padding: 1.5rem 1em;
  max-width: 1600px;
  margin: 0 auto;
`;

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
`;

const ShopingNav = styled.div`
  display: flex;
  gap: 10px;
  justify-content: right;
`;
