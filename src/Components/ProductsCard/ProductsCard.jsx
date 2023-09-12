import { Link } from "react-router-dom";
import Button from "../Common/Button/Button";

const ProductsCard = ({ data }) => {
  return (
    <div className="w-[400px] h-60 bg-white rounded-lg px-5 py-3  box-shadow-card flex flex-row items-center content-center  ">
      <img src={data.imgSrc} className="w-32 h-32 ml-2" alt="" />
      <ProductCardBody data={data} />
    </div>
  );
};

export default ProductsCard;

const ProductCardBody = ({ data }) => {
  return (
    <div className="flex flex-col flex-wrap h-full justify-between text-sm">
      <h2 className="f-bold">{data.title}</h2>
      <div className="w-max text-xs rounded-2xl text-gray-600 bg-gray-100 py-1 px-4 ">
        {data.productsGroup}
      </div>
      <p className="f-bold text-base  text-emerald-500 ">
        {data.discount > 0 ? (
          <>
            <span className="line-through text-gray-300 ml-1 text-base ">
              {data.price} ریال
            </span>
            <span className="mr-1">
              {data.price - data.price * (data.discount / 100)}
              <span className="mr-2">ریال</span>
            </span>
          </>
        ) : (
          <>
            <span className="mr-1">{data.price} ریال</span>
          </>
        )}
      </p>

      {data.discount > 0 && (
        <>
          <p className="text-xs w-max text-white bg-rose-600 py-[2px] px-2 rounded-2xl">
            {data.discount}%
          </p>
        </>
      )}
      <Link to={`/productDetail?pId=${data.id}`}>
        <Button
          btnData={{ type: "button", text: "مشاهده ی جزئیات", size: "small" }}
        />
      </Link>
    </div>
  );
};
