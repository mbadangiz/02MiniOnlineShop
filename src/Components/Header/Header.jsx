const Header = () => {
  return (
    <div
      className="w-1280max h-[calc(100vh-60px)] mx-auto py-5   
      flex flex-row flex-wrap items-center content-center justify-evenly
      bg-svg"
    >
      <div>
        <h1 className="text-sky-950 f-black text-5xl mb-10">خوش استایل</h1>
        <h2 className="text-sky-800 f-black text-2xl  mb-10">
          زیبایی ظاهر خودتو از ما بخواه!!!
        </h2>
        <h3 className="text-sky-500/80 w-96 text-xl text-justify leading-8">
          اگر آدم سخت‌پسندی هستید مطمئنیم از تک و خاص بودن محصولات
          <span className="f-bold text-sky-500/90"> خوش استایل</span>
          لذت خواهید برد.
        </h3>
        <p className="f-bold text-sky-500/90">
          لطفا با استفاده از منو بالا بخش مورد نظر خود را انتخاب کنید.
        </p>
      </div>
      <div>
        <img src="./Img/Img-Header2.png" className="w-[500px] " alt="" />
      </div>
    </div>
  );
};

export default Header;
