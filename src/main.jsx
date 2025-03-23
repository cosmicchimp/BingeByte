import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage.jsx";
import Products from "./components/Products.jsx";
import Checkout from "./components/Checkout.jsx";
import App from "./App.jsx";
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
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
