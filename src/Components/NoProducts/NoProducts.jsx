import { Link } from "react-router-dom";
import img from "./../../../public/Img/prodNotFound.svg";
const NoProducts = () => {
  return (
    <div className="text-center">
      <img src={img} className="w-[300px] mx-auto mt-10" alt="" />
      <p className="w-[300px] mx-auto mt-10 text-justify">
        در حال حاضر کالایی موجود نمی باشد، ابتدا از بخش
        <Link to="/cms/addNewProduct">
          <span className="underline mx-2 f-bold"> افزودن محصول جدید</span>
        </Link>
        کالای جدید را ایجاد نمایید.
      </p>
    </div>
  );
};

export default NoProducts;
