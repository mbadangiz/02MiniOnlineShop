import { HashLoader } from "react-spinners";
const WaitingForForms = ({ isShowWaiting }) => {
  return (
    <div
      className={`${
        isShowWaiting ? "flex" : "hidden"
      } w-screen h-screen fixed bg-gray-100/10 top-0 left-0 z-[900]
    backdrop-blur-[5px]  flex-row flex-wrap justify-center items-center content-center`}
    >
      <HashLoader color="#0ea5e9" size={200} />
      <div className="w-full text-center text-4xl mt-7 f-bold">
        لطفا لحظه ایی شکیبایی فرمایید.
      </div>
    </div>
  );
};

export default WaitingForForms;
