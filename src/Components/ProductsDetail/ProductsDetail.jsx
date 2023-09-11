import { useSearchParams } from "react-router-dom";

const ProductsDetail = () => {
  const [queryString] = useSearchParams();
  // console.log(Number(queryString.get("pId")));
  return (
    <div
      className="w-1280max h-[calc(100vh-60px)] mx-auto pt-10 flex flex-row flex-wrap 
      justify-center items-center content-center gap-10"
    >
      <img src="./../Img/Img-Products.jpg" className="w-[400px]" alt="" />
      <ProductsDetailBody />
    </div>
  );
};

export default ProductsDetail;

const ProductsDetailBody = () => {
  return (
    <div className="w-[400px] space-y-5">
      <h1 className="f-bold text-xl">لباس بچه کانه</h1>
      <div className="w-max text-xs rounded-2xl text-gray-600 bg-gray-200 py-1 px-4 ">
        لباس کودک
      </div>
      <p className="text-justify text-sky-950/50 ">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را میکند.
      </p>

      <p className="f-bold text-base  text-emerald-500 ">
        <span className="line-through text-gray-300 ml-1 text-base ">
          2980000 ریال
        </span>
        <span className="text-base mr-1 ">2000000 ریال</span>
      </p>
      <p className="text-xs w-max text-white bg-rose-600 py-[2px] px-2 rounded-2xl">
        30%
      </p>
    </div>
  );
};
