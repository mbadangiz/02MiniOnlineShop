import CMSFieldsTitles from "../CMSFieldsTitles/CMSFieldsTitles";
import FormContainer from "../FormContainer/FormContainer";

const AddNewProducts = () => {
  return (
    <div className="max-w-5xl h-full py-10 mx-auto">
      <CMSFieldsTitles text="افزودن محصول جدید" />
      <FormContainer />
    </div>
  );
};

export default AddNewProducts;
