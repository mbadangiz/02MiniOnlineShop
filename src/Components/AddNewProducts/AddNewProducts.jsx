import CMSFieldsTitles from "../CMSFieldsTitles/CMSFieldsTitles";
import FormContainer from "../FormContainer/FormContainer";

const AddNewProducts = () => {
  return (
    <div className="lg:max-w-5xl h-full mx-auto">
      <CMSFieldsTitles text="افزودن محصول جدید" />
      <FormContainer
        processType="add"
        initial={{
          title: "",
          price: "",
          initialBalance: "",
          discount: "",
          description: "",
          productsGroup: "",
        }}
      />
    </div>
  );
};

export default AddNewProducts;
