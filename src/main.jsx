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
import ProductsList from "./Components/ProductsList/ProductsList";
import Header from "./Components/Header/Header";
import ProductsDetail from "./Components/ProductsDetail/ProductsDetail";
import EditProducts from "./Components/EditProducts/EditProducts";
import Page404 from "./Components/Page404/Page404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          { path: "/", element: <Header /> },
          { path: "/products", element: <ProductsList /> },
          { path: "/productDetail", element: <ProductsDetail /> },
        ],
      },
      {
        path: "/cms",
        element: <CMS />,
        children: [
          { path: "/cms/", element: <CMSProductList /> },
          { path: "/cms/addNewProduct", element: <AddNewProducts /> },
          { path: "/cms/editProduct", element: <EditProducts /> },
        ],
      },
    ],
  },
  { path: "*", element: <Page404 /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
