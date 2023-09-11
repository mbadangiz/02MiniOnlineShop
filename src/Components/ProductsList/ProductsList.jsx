import CMSFieldsTitles from "../CMSFieldsTitles/CMSFieldsTitles";
import Button from "../Common/Button/Button";
import ProductsCard from "../ProductsCard/ProductsCard";
const s = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29,
];
const ProductsList = () => {
  return (
    <div className="w-1280max mx-auto py-5">
      <CMSFieldsTitles text="همه محصولات" />
      <div className="w-full h-max py-5 flex flex-row justify-center flex-wrap gap-x-6 gap-y-5 ">
        {s.map((it) => (
          <ProductsCard key={it} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
