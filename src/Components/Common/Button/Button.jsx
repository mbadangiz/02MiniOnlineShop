const Button = ({ data }) => {
  const { type, text } = data;
  return (
    <div>
      <button
        className="w-[300px] h-12 bg-gradient-to-br 
        -from-[10%] from-cyan-600 to-80% to-sky-950 text-white
        rounded my-4"
        type={type}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
