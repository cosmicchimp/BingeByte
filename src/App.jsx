import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  const [checkoutCart, updateCheckout] = useState([]);
  return (
    <>
      <Header />
      <Outlet checkoutCart={checkoutCart} updateCheckout={updateCheckout} />
      <Footer />
    </>
  );
}

export default App;
