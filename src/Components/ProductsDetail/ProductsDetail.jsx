import { useSearchParams } from "react-router-dom";

const ProductsDetail = () => {
  const [queryString] = useSearchParams();
  console.log(Number(queryString.get("pId")));
  return <div>ProductsDetail</div>;
};

export default ProductsDetail;
