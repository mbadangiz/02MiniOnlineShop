import { Outlet } from "react-router-dom";
import CMSMenu from "../CMSMenu/CMSMenu";

const CMS = () => {
  return (
    <div className="w-full h-screen flex flex-row justify-center items-center content-center ">
      <CMSMenu />
      <div className="w-4/5 px-10 h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default CMS;
