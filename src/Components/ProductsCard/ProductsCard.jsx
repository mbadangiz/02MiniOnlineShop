import { Link } from "react-router-dom";
import Button from "../Common/Button/Button";

const ProductsCard = () => {
  return (
    <div className="w-[400px] h-60 bg-white rounded-lg px-5 py-3  box-shadow-card flex flex-row items-center content-center  ">
      <img src="./../Img/Img-Products.jpg" className="h-40" alt="" />
      <div className="flex flex-col flex-wrap h-full justify-between text-sm">
        <h2 className="f-bold">لباس بچگانه تابستانه مارک فلان چی</h2>
        <div className="w-max text-xs rounded-2xl text-gray-600 bg-gray-100 py-1 px-4 ">
          لباس کودک
        </div>
        <p className="f-bold text-base">
          <span className="line-through text-gray-300 ml-1 text-xs ">
            2980000 ریال
          </span>

          <span className=" text-emerald-500 text-base mr-1 ">
            2000000 ریال
          </span>
        </p>

        <p className="text-xs w-max text-white bg-rose-600 py-[2px] px-2 rounded-2xl">
          30%
        </p>
        <Link to="/productDetail/id">
          <Button
            data={{ type: "button", text: "مشاهده ی جزئیات", size: "small" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default ProductsCard;
