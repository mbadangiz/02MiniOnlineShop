import CMSFieldsTitles from "../CMSFieldsTitles/CMSFieldsTitles";
import ProductsCard from "../ProductsCard/ProductsCard";
import { useProducts } from "../Provider/ProductsDataProvider";

const ProductsList = () => {
  const { products, setProducts } = useProducts();
  return (
    <div className="w-1280max mx-auto py-5">
      <CMSFieldsTitles text="همه محصولات" />
      <div className="w-full h-max py-5 flex flex-row justify-center flex-wrap gap-x-6 gap-y-5 ">
        {products
          ? products.map((items) => <ProductsCard key={items} data={items} />)
          : "Please Wait to Data being Load."}
      </div>
    </div>
  );
};

export default ProductsList;
