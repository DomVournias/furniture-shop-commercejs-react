import React from "react";
import Cart from "../Navbar/Controls/Cart";
import Navbar from "../Navbar/Navbar";

const Layout = ({
  children,
  totalItems,
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  return (
    <>
      <Navbar
        totalItems={totalItems}
        cart={cart}
        handleUpdateCartQty={handleUpdateCartQty}
        handleRemoveFromCart={handleRemoveFromCart}
        handleEmptyCart={handleEmptyCart}
      />
      <main>{children}</main>
    </>
  );
};

export default Layout;
