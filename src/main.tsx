import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage.tsx";
import DetailPage from "./pages/DetailPage.tsx";
import AddPaslon from "./pages/AddPaslon.tsx";
import AddPartai from "./pages/AddPartai.tsx";
import Vote from "./pages/Vote.tsx";
import ListPartai from "./pages/ListPartai.tsx";
import ListPaslon from "./pages/ListPaslon.tsx";
import Admin from "./pages/Admin.tsx";
import ModalVote from "./components/Fragments/ModalVote.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
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
  {
    path: "/vote",
    element: <Vote />,
  },
  {
    path: "/listpartai",
    element: <ListPartai />,
  },
  {
    path: "/listpaslon",
    element: <ListPaslon />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/modalvote",
    element: <ModalVote />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
