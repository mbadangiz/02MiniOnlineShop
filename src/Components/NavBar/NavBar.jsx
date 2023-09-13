import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItemsList = [
  {
    id: 1,
    navTitle: "خوش استایل",
    extraClass: "!f-black !text-xl !text-sky-900 ",
    path: "/",
  },
  { id: 2, navTitle: "مدیریت محتوا", path: "/cms" },
  { id: 3, navTitle: "محصولات", path: "/products" },
  { id: 4, navTitle: "معرفی", path: "/Introduction" },
];

const NavBar = () => {
  return (
    <div className="w-1280max h-full mx-auto flex flex-row flex-wrap gap-x-5 items-center content-center sticky top-0">
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
    <NavLink to={path}>
      <div className={`${extraClass}  text-sky-700 hover:text-sky-900`}>
        {navTitle}
      </div>
    </NavLink>
  );
};
