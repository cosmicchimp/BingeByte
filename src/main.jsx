import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App, { shopContext } from "./App.jsx";
import Homepage from "./components/Homepage.jsx";
import Products from "./components/Products.jsx";
import Checkout from "./components/Checkout.jsx";
import { useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/products", element: <Products /> },
      { path: "/checkout", element: <Checkout /> },
    ],
  },
]);

function Root() {
  const [checkoutCart, updateCheckout] = useState([]);

  return (
    <shopContext.Provider value={{ checkoutCart, updateCheckout }}>
      <RouterProvider router={router} />
    </shopContext.Provider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
