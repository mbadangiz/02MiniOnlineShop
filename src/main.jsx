import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./impCss.css";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import CMS from "./Components/CMS/CMS";
import AddNewProducts from "./Components/AddNewProducts/AddNewProducts";
import CMSProductList from "./Components/CMSProductList/CMSProductList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/cms",
        element: <CMS />,
        children: [
          { path: "/cms/", element: <CMSProductList /> },
          { path: "/cms/addNewProduct", element: <AddNewProducts /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
