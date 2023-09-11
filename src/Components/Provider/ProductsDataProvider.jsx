import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const ProductData = createContext();

const ProductsDataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    try {
      const url = "https://64fc905e605a026163ae9e9e.mockapi.io/products";
      const res = await axios.get(url);
      setProducts(res.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ProductData.Provider value={{ products, setProducts }}>
      {children}
    </ProductData.Provider>
  );
};

export default ProductsDataProvider;

export const useProducts = () => useContext(ProductData);
