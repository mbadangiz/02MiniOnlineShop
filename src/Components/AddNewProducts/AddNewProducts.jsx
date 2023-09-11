import CMSFieldsTitles from "../CMSFieldsTitles/CMSFieldsTitles";
import FormContainer from "../FormContainer/FormContainer";

const AddNewProducts = () => {
  return (
    <div className="lg:max-w-5xl h-full mx-auto">
      <CMSFieldsTitles text="افزودن محصول جدید" />
      <FormContainer />
    </div>
  );
};

export default AddNewProducts;
