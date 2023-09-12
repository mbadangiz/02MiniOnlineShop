const Button = ({ btnData, clickHandler }) => {
  const { type, text, size, style } = btnData;
  return (
    <div>
      <button
        className={`${
          size === "small" ? "w-max text-sm px-4 py-2" : "w-[300px] h-12"
        } ${
          style === "outline"
            ? "border-[1.5px]  bg-gray-400"
            : "bg-sky-950 text-white"
        }   f-semiBold   rounded my-4`}
        type={type}
        onClick={clickHandler}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
