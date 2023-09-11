import NavBar from "../NavBar/NavBar";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const height = (
        document.documentElement ||
        document.body.parentNode ||
        document.body
      ).scrollTop;

      if (height > 60) setIsFixed(true);
      else setIsFixed(false);
    });
  }, []);

  return (
    <div className="w-full">
      <div
        className={`${
          isFixed && "fixed mb-[60px]"
        } px-3 h-[60px] sm:px-10 w-full lg:px-0 bg-gray-100 backdrop-blur-lg`}
      >
        <NavBar />
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
