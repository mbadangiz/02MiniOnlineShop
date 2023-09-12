import { useEffect } from "react";
import img from "./../../../public/Img/404.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Page404 = () => {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(10);
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 10000);
    const interval = setInterval(() => {
      setCounter((prev) => prev - 1);
    }, 1000);
  }, []);
  return (
    <div className="w-full h-screen  flex flex-row flex-wrap justify-center items-center content-center gap-5 relative">
      <p className="f-black text-[150px] z-50 relative top-5 animate-bounce ">
        4
      </p>
      <p className="f-black text-[150px] z-50 relative -top-0 animate-bounce">
        0
      </p>
      <p className="f-black text-[150px] z-50 relative top-8 animate-bounce">
        4
      </p>
      <div className="w-full text-center text-xl f-bold relative z-50 mt-40">
        صفحه ی مورد نظر یافت نشد، بعد از
        <span className="animate-pulse f-bold mx-5 text-3xl">{counter}</span>
        ثانیه شما به صورت خودکار به خانه منتقل میشوید.
      </div>
      <img
        src={img}
        className="w-[450px] absolute z-30 top-[30%] left-1/2 -translate-x-1/2"
        alt=""
      />
    </div>
  );
};

export default Page404;
