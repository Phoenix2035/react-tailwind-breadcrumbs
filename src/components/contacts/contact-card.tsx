import { Link } from "react-router-dom";
import { BsFillEyeFill, BsTrashFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";

import useOpenModal from "utils/use-open-modal-utility";
import DeleteContactModal from "./delete-contact-modal";
import ROUTES_CONSTANT from "constants/routes.const";

interface ContactCardProps {
  contactInfo?: boolean;
  contactButtons?: boolean;
}

const ContactCard = ({ contactInfo, contactButtons }: ContactCardProps) => {
  const { open, openModal, closeModal } = useOpenModal();

  const name = "علی قدوسی";

  return (
    <>
      <div className="w-[700px] bg-[#44475a] flex  flex-col rounded p-3 mx-auto mt-6 text-center">
        <div className="flex items-center justify-between">
          <div className="h-full">
            <img
              className="w-full max-w-[240px] h-auto rounded"
              src="https://toplearn.com/img/course/400x286/%D8%A2%D9%85%D9%88%D8%B2%D8%B4_%DA%A9%D8%AF_%D9%86%D9%88%DB%8C%D8%B3%DB%8C_%D9%82%D8%A7%D9%84%D8%A8_%D9%88%D8%B1%D8%AF%D9%BE%D8%B1%D8%B3.jpg"
              alt="ali"
            />
          </div>

          <div className="w-3/4 h-[150px] flex justify-between items-center mr-2 p-1 ">
            <div className="w-full text-md bg-[#f8f8f2] rounded">
              <div className="py-2 px-1">
                نام و نام خانوادگی: <span>علی قدوسی</span>
              </div>
              <div className="border-solid border-t-2 border-[#6272a4] py-2 px-1">
                شماره موبایل: <span>09192224187</span>
              </div>
              <div className="border-solid border-t-2 border-[#6272a4] py-2 px-1">
                ایمیل: <span>aligodosi@gmail.com</span>
              </div>
            </div>

            {contactButtons ? null : (
              <div className="mr-6 grid gap-y-3">
                <Link
                  to={ROUTES_CONSTANT.CONTACT_INFO + "1"}
                  className="bg-[#ffb86c] rounded p-2"
                >
                  <BsFillEyeFill />
                </Link>

                <div
                  className="bg-[#8be9fd] rounded p-2 cursor-pointer"
                  onClick={() => openModal()}
                >
                  <BsTrashFill />
                </div>

                <Link
                  to={ROUTES_CONSTANT.EDIT_CONTACT}
                  className="bg-[#ff5555] rounded p-2"
                >
                  <MdEdit />
                </Link>
              </div>
            )}
          </div>
        </div>

        {contactInfo ? null : (
          <div className="w-64 text-center mx-auto mt-5 py-2.5 px-5 rounded transition-all bg-[#bd93f9] hover:bg-[#6272a4]">
            <Link
              className="w-full h-full  py-2.5 px-5"
              to={ROUTES_CONSTANT.CONTACTS_ROUTE}
            >
              برگرد به صفحه اصلی
            </Link>
          </div>
        )}
      </div>

      <DeleteContactModal open={open} closeModal={closeModal}>
        {`مطمئنی که میخوای ${name} رو پاک کنی؟`}
      </DeleteContactModal>
    </>
  );
};

export default ContactCard;
