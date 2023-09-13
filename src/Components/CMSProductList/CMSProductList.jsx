import CMSFieldsTitles from "../CMSFieldsTitles/CMSFieldsTitles";
import NoProducts from "../NoProducts/NoProducts";
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
          <NoProducts />
        )
      ) : (
        <NoProducts />
      )}
    </div>
  );
};

export default CMSProductList;
