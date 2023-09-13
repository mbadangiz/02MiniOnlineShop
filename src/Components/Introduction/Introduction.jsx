import { Link } from "react-router-dom";
import CMSFieldsTitles from "../CMSFieldsTitles/CMSFieldsTitles";

const Introduction = () => {
  return (
    <div className="max-w-2xl mx-auto py-7">
      <div className="text-center">
        <CMSFieldsTitles text="معرفی" />
      </div>
      <div className="space-y-5">
        <p className="my-3">سلام!!!</p>
        <p>من محمدم توسعه دهنده ی این پروژه!!!</p>
        <p className="text-justify">
          این یکی از نمونه کار های من هست، که یه مینی پروژه به از یک آنلاین شاپ
          هست و الان شما ورژن یک این نرم افزارو دارین باهاش کار میکنید، خوشحالم
          میکنید که نظرتونو از طریق راه های ارتباطی که پایین گذاشتم براتون بهم
          بگید.
        </p>
        <p>
          فایل های مربوط به این پروژه رو میتونید از لینک
          <Link to="https://github.com/mbz3a/02MiniOnlineShop" target="_blank">
            <span className="mx-1 hover:underline f-bold "> گیت هاب</span>
          </Link>
          مربوط به این پروژه داشته باشید.
        </p>
        <p>همچنین میتونید با من از طریق راه های ارتباطی زیر دنبال کنید :</p>
        <p className="text-3xl space-x-5">
          <Link to="https://t.me/theRealmbz" target="_blank">
            <i className="fi fi-brands-telegram hover:text-cyan-500 transition-all duration-150 "></i>
          </Link>
          <Link to="https://instagram.com/realmbz1998" target="_blank">
            <i className="fi fi-brands-instagram transition-all duration-150 "></i>
          </Link>
          <Link
            to="https://www.linkedin.com/in/mohammad-badangiz-0a904117b/"
            target="_blank"
          >
            <i className="fi fi-brands-linkedin transition-all duration-150 "></i>
          </Link>
          <Link to="https://github.com/mbz3a" target="_blank">
            <i className="fi fi-brands-github transition-all duration-150 "></i>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Introduction;
