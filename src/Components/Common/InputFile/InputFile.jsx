const InputFile = () => {
  return (
    <div className="w-[280px] h-28 relative rounded-lg">
      <label
        htmlFor="imgUploader"
        className="w-full h-full strok p-4 absolute top-0 left-0 flex flex-row 
        justify-center items-center content-center cursor-pointer rounded-lg text-sm 
        hover:bg-sky-950/30 transition-all "
      >
        برای آپلود تصویر بر روی این ناحیه کلید کنید و یا تصویر مورد نظر را در
        این نقطه رها کنید.
      </label>
      <input
        type="file"
        name=""
        id="imgUploader"
        className="opacity-0 w-full h-full strok p-4 absolute top-0 left-0"
      />
    </div>
  );
};

export default InputFile;
