import { Link } from "react-router-dom";

const navItemsList = [
  {
    id: 1,
    navTitle: "لگوی مجموعه",
    extraClass: "!f-black !text-xl !text-gray-900 ",
    path: "/",
  },
  { id: 2, navTitle: "مدیریت محتوا", path: "/cms" },
  { id: 3, navTitle: "محصولات", path: "/products" },
  { id: 4, navTitle: "ارتباط با ما", path: "/contactus" },
];

const NavBar = () => {
  return (
    <div className="w-1280max h-full mx-auto flex flex-row flex-wrap gap-x-5 items-center content-center">
      {navItemsList.map((item) => (
        <NavItems key={item.id} data={item} />
      ))}
    </div>
  );
};

export default NavBar;

const NavItems = ({ data }) => {
  const { navTitle, extraClass, path } = data;
  return (
    <Link to={path}>
      <div className={`${extraClass} text-sm text-gray-700`}>{navTitle}</div>
    </Link>
  );
};
