import Home from "./Components/Home/Home";
import ProductsDataProvider from "./Components/Provider/ProductsDataProvider";

const App = () => {
  return (
    <ProductsDataProvider>
      <Home />
    </ProductsDataProvider>
  );
};

export default App;
