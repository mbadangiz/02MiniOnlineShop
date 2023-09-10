const Header = () => {
  return (
    <div className="w-1280max h-[calc(100vh-60px)] mx-auto py-5   flex flex-row flex-wrap items-center content-center justify-evenly">
      <div>
        <h1 className="text-gray-950 f-black text-5xl mb-10">خوش استایل</h1>
        <h2 className="text-gray-950 f-black text-2xl ">
          جایی مطمئن برای بهتر شدن ظاهر شما
        </h2>
      </div>
      <div>
        <img src="./Img/Img-Header.png" className="w-96 " alt="" />
      </div>
    </div>
  );
};

export default Header;
