import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.module.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
