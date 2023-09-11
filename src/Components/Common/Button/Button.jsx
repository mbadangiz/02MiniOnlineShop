const Button = ({ data }) => {
  const { type, text, size } = data;
  return (
    <div>
      <button
        className={`${
          size === "small" ? "w-max text-sm px-4 py-2" : "w-[300px] h-12"
        }   bg-sky-950 text-white f-bold   rounded my-4`}
        type={type}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
