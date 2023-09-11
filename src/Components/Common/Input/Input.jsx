import { Field } from "formik";

const Input = ({ data }) => {
  const { type, placeHolderText, name } = data;
  return (
    <div className={`w-[330px]  h-12 relative overflow-hidden `}>
      <Field
        className={`w-full h-full bg-gray-200 text-sky-950 
        rounded-t-md px-4 peer ${type === "number" && "text-center"} `}
        type={type}
        name={name}
        placeholder={placeHolderText}
      />
      <div
        className="h-[3px] w-full bg-sky-950/80 transition-all duration-200 absolute top-[44px] right-[100%]
      peer-focus:right-0"
      ></div>
    </div>
  );
};

export default Input;
