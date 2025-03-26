import { useState, useEffect, createContext } from "react";
import { Outlet } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
export const shopContext = createContext();
function App() {
  const [checkoutCart, updateCheckout] = useState([]);
  return (
    <>
      <shopContext.Provider value={{ checkoutCart, updateCheckout }}>
        <Header />
        <Outlet />
        <Footer />
      </shopContext.Provider>
    </>
  );
}

export default App;
