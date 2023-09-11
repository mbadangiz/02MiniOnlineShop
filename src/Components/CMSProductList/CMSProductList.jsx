import CMSFieldsTitles from "../CMSFieldsTitles/CMSFieldsTitles";
import Table from "../Table/Table";

const CMSProductList = () => {
  return (
    <div className="lg:max-w-5xl mx-auto ">
      <CMSFieldsTitles text="لیست محصولات" />
      <Table />
    </div>
  );
};

export default CMSProductList;
