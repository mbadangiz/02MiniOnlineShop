import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { HashLoader } from "react-spinners";

const ProductsDetail = () => {
  const [queryString] = useSearchParams();
  const pId = Number(queryString.get("pId"));
  const [products, setProducts] = useState();
  const [err, setErr] = useState();

  const getData = async () => {
    try {
      const url = `https://64fc905e605a026163ae9e9e.mockapi.io/products/${pId}`;
      const res = await axios.get(url);
      setProducts(res.data);
    } catch (error) {
      setErr(error.response.status);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div
      className="w-1280max h-[calc(100vh-60px)] mx-auto pt-10 flex flex-row flex-wrap 
      justify-center items-center content-center gap-10"
    >
      {products ? (
        <>
          <img src={products.imgSrc} className="w-[400px] h-[400px]" alt="" />
          <div className="w-[400px] space-y-5">
            <h1 className="f-bold text-xl">{products.title}</h1>
            <div className="w-max text-xs rounded-2xl text-gray-600 bg-gray-200 py-1 px-4 ">
              {products.productsGroup}
            </div>
            <p className="text-justify text-sky-950/50 w-[350px] overflow-hidden ">
              {products.description}
            </p>

            <p className="f-bold text-base  text-emerald-500 ">
              {products.discount > 0 ? (
                <>
                  <span className="line-through text-gray-300 ml-1 text-base ">
                    {products.price} ریال
                  </span>
                  <span className="mr-1">
                    {products.price -
                      products.price * (products.discount / 100)}
                    <span className="mr-2">ریال</span>
                  </span>
                </>
              ) : (
                <>
                  <span className="mr-1">{products.price} ریال</span>
                </>
              )}
            </p>

            {products.discount > 0 && (
              <>
                <p className="text-xs w-max text-white bg-rose-600 py-[2px] px-2 rounded-2xl">
                  {products.discount}%
                </p>
              </>
            )}
          </div>
        </>
      ) : err ? (
        "There is Some Problem with connection please try later Or Product Has Not Found"
      ) : (
        <div className="w-full h-[300px] flex flex-row flex-wrap justify-center content-center items-center ">
          <HashLoader color="#5b36d6" size={150} />
        </div>
      )}
    </div>
  );
};

export default ProductsDetail;
