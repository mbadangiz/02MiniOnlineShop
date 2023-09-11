import { Form, Formik } from "formik";
import Input from "../Common/Input/Input";
import TextArea from "../Common/TextArea/TextArea";
import InputFile from "../Common/InputFile/InputFile";
import { useState } from "react";
import Button from "../Common/Button/Button";
import axios from "axios";
import { useProducts } from "../Provider/ProductsDataProvider";
import { useNavigate } from "react-router-dom";

const FormContainer = () => {
  const [imgUrl, setImgUrl] = useState();
  const [uploadErr, setUploadErr] = useState(false);
  const { products, setProducts } = useProducts();
  const navigate = useNavigate();

  const uploader = async (e) => {
    const img = e.target.files[0];
    try {
      const imageData = new FormData();
      imageData.append("image", img);

      const url = "https://api.admin.sepehracademy.ir/api/upload/image";
      const imgUp = await axios.post(url, imageData);

      setImgUrl(imgUp.data.result);
    } catch (err) {
      setUploadErr(true);
    }
  };

  const submitHandler = async (val) => {
    const date = new Date().toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    const obj = { ...val, imgSrc: imgUrl, date: date };
    const obj2 = { ...val, imgSrc: imgUrl, date: date, id: products.length };
    try {
      const url = "https://64fc905e605a026163ae9e9e.mockapi.io/products";
      const addNewData = await axios.post(url, obj);
      setProducts([...products, obj2]);
    } catch (err) {
      console.log(err);
    }
    navigate("/cms/");
  };

  return (
    <div className="w-full h-max my-10">
      <Formik
        initialValues={{
          title: "",
          price: "",
          initialBalance: "",
          discount: "",
          description: "",
          productsGroup: "",
        }}
        onSubmit={submitHandler}
      >
        <Form>
          <div className="w-full flex flex-row  flex-wrap  gap-x-3 gap-y-4">
            <h3 className=" w-full f-bold text-lg mb-4">مشخصات محصول</h3>
            <FormInputsBox img={imgUrl} />
            <h3 className=" w-full f-bold text-lg my-3">آپلود تصویر محصول</h3>
            <UploaderBox data={{ uploadErr, imgUrl, uploader }} />
            <Button data={{ type: "submit", text: "ثبت اطلاعات" }} />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

const FormInputsBox = ({ img }) => {
  const i = String(img);
  return (
    <>
      <Input
        data={{
          type: "text",
          placeHolderText: "عنوان محصول مورد نظر",
          name: "title",
        }}
      />
      <Input
        data={{
          type: "text",
          placeHolderText: "دسته بندی محصول",
          name: "productsGroup",
        }}
      />
      <Input
        data={{
          type: "number",
          placeHolderText: "قیمت واحد",
          name: "price",
        }}
      />
      <Input
        data={{
          type: "number",
          placeHolderText: "موجودی اولیه",
          name: "initialBalance",
        }}
      />
      <Input
        data={{
          type: "number",
          placeHolderText: "درصد تخفیف",
          name: "discount",
        }}
      />
      <TextArea
        data={{
          type: "number",
          placeHolderText: "توضیحات محصول",
          name: "description",
        }}
      />
    </>
  );
};

const UploaderBox = ({ data }) => {
  const { uploadErr, imgUrl, uploader } = data;
  return (
    <div className="w-full h-36 rounded-md bg-gray-200 flex flex-row justify-around items-center content-center">
      <p className="w-[280px] text-sm text-justify">
        {uploadErr ? (
          <>
            <span className="text-base">
              مشکلی در هنگاهم آپلود عکس شما رخ داده است، لطفا از برقرار بودن
              ارتباط اینترنت خود و یا شرایط ذکر شده اطمینان حاصل کنید.
            </span>
          </>
        ) : (
          <>
            <span>توجه :</span>
            در هنگام آپلود دقت کنید که ابعاد تصویر به صورت مربع باشد، و همچنین
            از فرمت های مجاز jpeg,png,jpg استفاده کنید.
            <span className="f-bold ">
              همچنین تا نمایان شدن تصویر آپلود شده خود شکیبایی کنید، وبر روی
              دکمه "ثبت اطلاعات" را کلیک نکنید.
            </span>
          </>
        )}
      </p>
      <InputFile changeHandler={uploader} />
      <div className="w-[280px] h-[80%]">
        <img src={imgUrl} className="h-[80%]" alt="" />
      </div>
    </div>
  );
};

export default FormContainer;
