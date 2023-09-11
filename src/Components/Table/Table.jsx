const Table = () => {
  return (
    <div className="w-full my-5  ">
      <table className="w-full">
        <thead className="text-sm  rounded-t-lg">
          <tr className="h-10 text-center">
            <td
              scope="col"
              className="bg-gray-400/80 rounded-tr-lg f-bold w-[10%] "
            >
              کد کالا
            </td>
            <td scope="col" className="bg-gray-400/80 f-bold w-[25%] ">
              نام کالا
            </td>
            <td scope="col" className="bg-gray-400/80 f-bold w-[20%]">
              قیمت واحد
            </td>
            <td scope="col" className="bg-gray-400/80 f-bold w-[20%] ">
              تاریخ
            </td>
            <td
              scope="col"
              className="bg-gray-400/80 rounded-tl-lg f-bold w-[25%] "
            >
              action
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className="h-10 text-center text-xs lastTh">
            <td className="w-[10%] ">1</td>
            <td className="w-[25%] ">لوازم ارایشی ممدلی طور اینا</td>
            <td className="w-[20%] ">25000</td>
            <td className="w-[20%] "> 15 شهریور1402</td>
            <td className="w-[25%] space-x-6 text-lg text-sky-950/30 ">
              <i className="fi fi-sr-trash cursor-pointer hover:text-sky-950/90 transition-all duration-200 "></i>
              <i className="fi fi-sr-edit cursor-pointer hover:text-sky-950/90 transition-all duration-200 "></i>
              <i className="fi fi-sr-eye cursor-pointer hover:text-sky-950/90 transition-all duration-200 "></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
