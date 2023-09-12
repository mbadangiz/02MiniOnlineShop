const Table = ({ data }) => {
  return (
    <div className="w-full my-5  ">
      <table className="w-full">
        <thead className="text-sm  rounded-t-lg">
          <tr className="h-10 text-center">
            <td
              scope="col"
              className="bg-gray-400/80 rounded-tr-lg f-bold w-[5%]"
            >
              کد کالا
            </td>
            <td scope="col" className="bg-gray-400/80 f-bold w-[25%] ">
              نام کالا
            </td>
            <td scope="col" className="bg-gray-400/80 f-bold w-[20%] ">
              تصویر کالا
            </td>
            <td scope="col" className="bg-gray-400/80 f-bold w-[15%]">
              قیمت واحد
            </td>
            <td scope="col" className="bg-gray-400/80 f-bold w-[15%] ">
              تاریخ
            </td>
            <td
              scope="col"
              className="bg-gray-400/80 rounded-tl-lg f-bold w-[20%] "
            >
              action
            </td>
          </tr>
        </thead>
        <tbody>
          <TableRow />
        </tbody>
      </table>
    </div>
  );
};

export default Table;

const TableRow = () => {
  return (
    <tr className="h-10 text-center text-xs lastTh">
      <td className="w-[5%]  !bg-slate-950 text-gray-100">1</td>
      <td className="w-[25%] ">لوازم ارایشی ممدلی طور اینا</td>
      <td className="w-[25%] ">لوازم ارایشی ممدلی طور اینا</td>
      <td className="w-[15%]">25000</td>
      <td className="w-[20%] "> 15 شهریور1402</td>
      <td className="w-[25%] space-x-6 text-lg text-sky-950/30 !bg-slate-950">
        <i className="fi fi-sr-trash cursor-pointer hover:text-sky-950/90 transition-all duration-200 "></i>
        <i className="fi fi-sr-edit cursor-pointer hover:text-sky-950/90 transition-all duration-200 "></i>
        <i className="fi fi-sr-eye cursor-pointer hover:text-sky-950/90 transition-all duration-200 "></i>
      </td>
    </tr>
  );
};
