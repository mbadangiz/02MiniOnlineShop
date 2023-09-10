import { Link } from "react-router-dom";

const CMSMenuItemsList = [
  {
    id: 2,
    text: "لیست محصولات",
    icon: "fi fi-sr-rectangle-list",
    path: "/cms/",
  },
  {
    id: 1,
    text: "افزودن محصول جدید",
    icon: "fi fi-sr-square-plus",
    path: "/cms/addNewProduct",
  },
];

const CMSMenu = () => {
  return (
    <div
      className="w-1/5  px-5 py-20 border-l-[4px]
        h-screen border-l-gray-200 border-solid  text-sky-950 flex flex-col 
        items-start content-start justify-between "
    >
      <h1
        className="w-full text-center text-2xl f-bold pb-12
        border-b-sky-950/75 border-solid border-b-[4px] mb-6"
      >
        خوش استایل
      </h1>
      <div>
        {CMSMenuItemsList.map((item) => {
          return <CMSMenuItems data={item} key={item.id} />;
        })}
      </div>
      <div className="text-center w-max mx-auto">
        <Link to="/" className="opacity-70 hover:opacity-95 ">
          <i className="fi fi-sr-home ml-2"></i>
          بازگشت به خانه
        </Link>
      </div>
    </div>
  );
};

const CMSMenuItems = ({ data }) => {
  const { text, icon, path } = data;
  return (
    <Link to={path} className="opacity-80 hover:opacity-100 transition-all">
      <div className="w-full flex flex-row content-center items-center gap-x-3 py-3">
        <i className={`${icon} text-2xl relative top-1`}></i>
        <p className="text-[17px]">{text}</p>
      </div>
    </Link>
  );
};

export default CMSMenu;
