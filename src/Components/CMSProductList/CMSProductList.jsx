import CMSFieldsTitles from "../CMSFieldsTitles/CMSFieldsTitles";
import { useProducts } from "../Provider/ProductsDataProvider";
import Table from "../Table/Table";

const CMSProductList = () => {
  const { products, setProducts } = useProducts();
  return (
    <div className="lg:max-w-5xl mx-auto ">
      <CMSFieldsTitles text="لیست محصولات" />
      {products ? (
        products.length > 0 ? (
          <Table data={products} />
        ) : (
          "There Is No Product in Your DataBase"
        )
      ) : (
        "There Is No Product in Your DataBase"
      )}
    </div>
  );
};

export default CMSProductList;
