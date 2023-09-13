import axios from "axios";
import { useProducts } from "../Provider/ProductsDataProvider";
import Button from "../Common/Button/Button";

const ModalDelete = ({ data }) => {
  const { isModal, setIsModal, id } = data;
  const { products, setProducts } = useProducts();

  const deleteHandler = async (id) => {
    const copiedProducts = [...products];
    const filteredItems = copiedProducts.filter((item) => item.id !== id);
    try {
      const url = `https://64fc905e605a026163ae9e9e.mockapi.io/products/${id}`;
      const del = await axios.delete(url);
      setProducts(filteredItems);
      setIsModal(!isModal);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      className={`
      ${
        isModal ? "flex" : "hidden"
      }  w-screen h-screen bg-gray-600/20 fixed top-0 left-0 backdrop-blur flex-row justify-center items-center content-center gap-6`}
    >
      <div className="w-[400px] h-60 bg-white text-sky-950  flex flex-col justify-center rounded">
        <i className="fi fi-sr-delete-document text-5xl opacity-80 mb-2"></i>
        <p className=" mb-2">آیا از حذف این محصول اطمیناین دارید؟</p>
        <div className=" flex flex-row items-center justify-center content-center gap-10">
          <Button
            clickHandler={() => deleteHandler(id)}
            btnData={{
              type: "button",
              text: "حذف",
              size: "small",
              style: "outline",
            }}
          />
          <Button
            clickHandler={() => setIsModal(!isModal)}
            btnData={{ type: "button", text: "لغو پردازش", size: "small" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
