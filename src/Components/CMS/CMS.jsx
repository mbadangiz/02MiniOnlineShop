import { Outlet } from "react-router-dom";
import CMSMenu from "../CMSMenu/CMSMenu";

const CMS = () => {
  return (
    <div className="w-full h-screen flex flex-row justify-center items-center content-center ">
      <CMSMenu />
      <div className="w-4/5 py-10 h-screen overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default CMS;
