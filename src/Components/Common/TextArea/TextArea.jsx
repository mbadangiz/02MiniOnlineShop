import { Field } from "formik";

const TextArea = ({ data }) => {
  const { placeHolderText, name } = data;
  return (
    <div className={`w-full h-20 relative overflow-hidden  `}>
      <Field
        as="textarea"
        className="w-full h-full bg-gray-200 text-sky-950 rounded-t-md p-4 peer"
        name={name}
        placeholder={placeHolderText}
      />
      <div
        className="h-[3px] w-full bg-sky-950/80 transition-all duration-200 absolute top-[95%] right-[100%]
        peer-focus:right-0"
      ></div>
    </div>
  );
};

export default TextArea;
