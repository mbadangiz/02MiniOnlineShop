import { useSearchParams } from "react-router-dom";
import CMSFieldsTitles from "../CMSFieldsTitles/CMSFieldsTitles";
import FormContainer from "../FormContainer/FormContainer";
import { useEffect, useState } from "react";
import axios from "axios";
import { HashLoader } from "react-spinners";

const EditProducts = () => {
  const [queryString] = useSearchParams();
  const pId = Number(queryString.get("pId"));
  const [product, setProduct] = useState();
  const [err, setErr] = useState();

  const getData = async () => {
    try {
      const url = `https://64fc905e605a026163ae9e9e.mockapi.io/products/${pId}`;
      const res = await axios.get(url);
      setProduct(res.data);
    } catch (error) {
      setErr(error.response.status);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="lg:max-w-5xl h-full mx-auto ">
      <CMSFieldsTitles text="ویرایش محصول" />
      {product ? (
        <div className="lg:max-w-5xl h-full mx-auto">
          <FormContainer
            processType="update"
            initial={{
              title: product.title,
              price: product.price,
              initialBalance: product.initialBalance,
              discount: product.discount,
              description: product.description,
              productsGroup: product.productsGroup,
            }}
            id={product.id}
            img={product.imgSrc}
          />
        </div>
      ) : err ? (
        "Product Has Not Found"
      ) : (
        <div className="w-full h-[300px] flex flex-row flex-wrap justify-center content-center items-center ">
          <HashLoader color="#0ea5e9" size={150} />
        </div>
      )}
    </div>
  );
};

export default EditProducts;
