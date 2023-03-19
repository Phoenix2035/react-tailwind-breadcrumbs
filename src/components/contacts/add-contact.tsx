import { useNavigate } from "react-router-dom";

import Navbar from "components/navbar/navbar";
import AddContactImg from "assets/images/man-taking-note.png";
import TextInput from "components/ui/text-input";
import ROUTES_CONSTANT from "constants/routes.const";
import PageTitle from "components/ui/page-title";

const AddContact = () => {
  const inputPlaceholderText = [
    "نام و نام خانوادگی",
    "آدرس تصویر",
    "شماره موبایل",
    "آدرس ایمیل",
    "شغل",
  ];

  const navigate = useNavigate();

  return (
    <>
      <Navbar withoutSearch />

      <PageTitle
        title="ساخت مخاطب جدید"
        textColor="#50fa7b"
        borderColor="#50fa7b"
      />

      <div className="flex ">
        <form className="w-1/2 flex flex-col justify-center items-center ">
          <>
            {inputPlaceholderText.map((item: string, index: number) => (
              <TextInput placeholder={item} key={index} />
            ))}

            <div>
              <button className="bg-[#bd93f9] rounded ml-4 px-2 py-1 text-white transition-all hover:bg-opacity-80">
                ساخت مخاطب
              </button>
              <button
                className="bg-[#6272a4] rounded mr-4 px-2 py-1 text-white transition-all hover:bg-opacity-80"
                onClick={() => navigate(ROUTES_CONSTANT.CONTACTS_ROUTE)}
              >
                انصراف
              </button>
            </div>
          </>
        </form>

        <img src={AddContactImg} alt="add-contact" />
      </div>
    </>
  );
};

export default AddContact;
