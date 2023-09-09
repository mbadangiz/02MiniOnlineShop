import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./impCss.css";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "mohammadi", element: <h1>sss</h1> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
