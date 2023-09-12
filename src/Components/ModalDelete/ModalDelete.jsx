const ModalDelete = ({ data }) => {
  const { isModal, setIsModal, id } = data;

  return (
    <div
      className={`
      ${
        isModal ? "flex" : "hidden"
      }  w-screen h-screen bg-gray-600/20 fixed top-0 left-0 backdrop-blur flex-row justify-center items-center content-center gap-6`}
    >
      <button onClick={() => setIsModal(!isModal)}>no</button>
      <button>Yess </button>
    </div>
  );
};

export default ModalDelete;
