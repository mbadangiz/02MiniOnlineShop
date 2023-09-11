import { Form, Formik } from "formik";
import Input from "../Common/Input/Input";
import TextArea from "../Common/TextArea/TextArea";
import InputFile from "../Common/InputFile/InputFile";
import { useState } from "react";
import Button from "../Common/Button/Button";

const FormContainer = () => {
  const [isImg, setIsImg] = useState(false);
  return (
    <div className="w-full h-max my-10">
      <Formik>
        <Form>
          <div className="w-full flex flex-row  flex-wrap  gap-x-3 gap-y-4">
            <h3 className=" w-full f-bold text-lg mb-4">مشخصات محصول</h3>
            <>
              <Input
                data={{
                  type: "text",
                  placeHolderText: "عنوان محصول مورد نظر",
                  name: "productTitle",
                }}
              />
              <Input
                data={{
                  type: "number",
                  placeHolderText: "قیمت واحد",
                  name: "productsPrice",
                }}
              />
              <Input
                data={{
                  type: "number",
                  placeHolderText: "موجودی اولیه",
                  name: "productsInitialBalance",
                }}
              />
              <Input
                data={{
                  type: "number",
                  placeHolderText: "درصد تخفیف",
                  name: "productsDiscount",
                }}
              />
              <TextArea
                data={{
                  type: "number",
                  placeHolderText: "توضیحات محصول",
                  name: "productsPrice",
                }}
              />
            </>
            <h3 className=" w-full f-bold text-lg my-3">آپلود تصویر محصول</h3>
            <div
              className="w-full h-36 rounded-md bg-gray-200 flex flex-row justify-around 
              items-center content-center"
            >
              <p className="w-[280px] text-sm text-justify">
                <span>توجه :</span>
                در هنگام آپلود دقت کنید که ابعاد تصویر به صورت مربع باشد، و
                همچنین از فرمت های مجاز jpeg,png,jpg استفاده کنید.
              </p>
              <InputFile />
              <div className="w-[280px] h-[80%]">
                <img
                  src={
                    isImg
                      ? "./../Img-Header2.png"
                      : "./../Img/Img-WireFrame.png"
                  }
                  className="h-[80%]"
                  alt=""
                />
              </div>
            </div>
            <Button data={{ type: "submit", text: "ثبت اطلاعات" }} />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default FormContainer;
