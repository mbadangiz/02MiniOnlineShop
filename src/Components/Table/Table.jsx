import { Link } from "react-router-dom";
import { useProducts } from "../Provider/ProductsDataProvider";
import ModalDelete from "../ModalDelete/ModalDelete";
import { useState } from "react";

const Table = () => {
  const { products, setProducts } = useProducts();
  return (
    <>
      <div className="w-full my-5  ">
        <table className="w-full">
          <thead className="text-sm  rounded-t-lg">
            <tr className="h-10 text-center">
              <td scope="col" className="bg-gray-400/80 rounded-tr-lg w-[5%]">
                کد کالا
              </td>
              <td scope="col" className="bg-gray-400/80 w-[30%] ">
                نام کالا
              </td>
              <td scope="col" className="bg-gray-400/80 w-[10%] ">
                تصویر کالا
              </td>
              <td scope="col" className="bg-gray-400/80 w-[15%]">
                قیمت واحد
              </td>
              <td scope="col" className="bg-gray-400/80 w-[20%] ">
                تاریخ
              </td>
              <td scope="col" className="bg-gray-400/80 rounded-tl-lg w-[20%] ">
                action
              </td>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => {
              return <TableRow key={item.id} data={item} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Table;

const TableRow = ({ data, isModalShow }) => {
  const { title, date, price, imgSrc, id } = data;
  const [isModal, setIsModal] = useState(false);

  return (
    <tr className="h-12 text-center text-xs lastTh">
      <td className="w-[5%] ">{id}</td>
      <td className="w-[30%] ">{title}</td>
      <td className="w-[10%] text-center">
        <img src={imgSrc} className="w-9 h-9 mx-auto" alt="" />
      </td>
      <td className="w-[15%]">{price}</td>
      <td className="w-[20%] ">{date}</td>
      <td className="w-[20%] space-x-6 text-lg text-sky-950/30 \">
        <ModalDelete data={{ isModal, setIsModal, id }} />
        <i
          className="fi fi-sr-trash cursor-pointer hover:text-sky-950/90 transition-all duration-200 "
          onClick={() => setIsModal(!isModal)}
        ></i>
        <Link to={`/cms/editProduct?pId=${id}`}>
          <i className="fi fi-sr-edit cursor-pointer hover:text-sky-950/90 transition-all duration-200 "></i>
        </Link>
        <Link to={`/productDetail?pId=${id}`} target="_blank">
          <i className="fi fi-sr-eye cursor-pointer hover:text-sky-950/90 transition-all duration-200 "></i>
        </Link>
      </td>
    </tr>
  );
};
