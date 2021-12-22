import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { commerce } from "./lib/commerce";
import Layout from "./components/Layouts/Layout";
import Homepage from "./pages/Homepage";
import GlobalStyles from "./styles/Global";
import Theme from "./styles/Theme";
import Products from "./pages/Products/index";
import SingleProduct from "./components/Layouts/SingleProduct";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  // console.log(cart);
  return (
    <>
      <Theme>
        <GlobalStyles />
        <Router>
          <Layout
            totalItems={cart.total_items}
            cart={cart}
            handleUpdateCartQty={handleUpdateCartQty}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart}
          >
            <Routes>
              <Route path="/" exact element={<Homepage />} />
              <Route
                path="/products"
                element={
                  <Products products={products} onAddToCard={handleAddToCart} />
                }
              />
              <Route path="/products/:slug" element={<SingleProduct />} />
            </Routes>
          </Layout>
        </Router>
      </Theme>
    </>
  );
}

export default App;
