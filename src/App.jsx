import { Outlet } from "react-router-dom";
import Home from "./Components/Home/Home";
import ProductsDataProvider from "./Components/Provider/ProductsDataProvider";

const App = () => {
  return (
    <ProductsDataProvider>
      <Outlet />
    </ProductsDataProvider>
  );
};

export default App;
