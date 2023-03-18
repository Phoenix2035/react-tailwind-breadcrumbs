import { ReactNode } from "react";
import { Fade } from "react-reveal";

interface DeleteContactProps {
  open?: boolean;
  closeModal?: any;
  children?: ReactNode;
}
const DeleteContactModal = ({
  open,
  closeModal,
  children,
}: DeleteContactProps) => {
  return (
    <>
      {open && (
        <div
          className="w-full h-full text-center fixed top-0 right-0 bottom-0 left-0 z-10"
          style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
        >
          <Fade>
            <div
              className={`w-1/3  bg-[#282a36] mt-[30vh]  mx-auto p-5 rounded-lg`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={` grid-cols-1 text-2xl mb-5`}>
                <h1 className="font-bold text-[#f1fa8c]">پاک کردن مخاطب</h1>
              </div>

              <div className="grid-cols-1 text-[#f8f8f2]">{children}</div>

              <div className="grid-cols-1	flex justify-between items-center mt-10 ">
                <button
                  type="submit"
                  //   onClick={handleSubmit}
                  className="bg-[#bd93f9] hover:bg-opacity-80 text-gray-800  font-semibold py-2 px-4 rounded"
                  //   disabled={btnDisable}
                >
                  مطمئن هستم
                </button>

                <button
                  onClick={() => closeModal(false)}
                  className="bg-[#6272a4] hover:bg-opacity-80 text-gray-800 font-semibold py-2 px-4   rounded"
                >
                  انصراف
                </button>
              </div>
            </div>
          </Fade>
        </div>
      )}
    </>
  );
};

export default DeleteContactModal;
