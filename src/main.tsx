import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import DetailPage from "./pages/DetailPage.tsx";
import AddPaslon from "./pages/AddPaslon.tsx";
import AddPartai from "./pages/AddPartai.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/detail",
    element: <DetailPage />,
  },
  {
    path: "/addpaslon",
    element: <AddPaslon />,
  },
  {
    path: "/addpartai",
    element: <AddPartai />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
