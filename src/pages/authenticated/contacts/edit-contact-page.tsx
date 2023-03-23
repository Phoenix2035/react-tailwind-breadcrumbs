import { useNavigate } from "react-router-dom";

import Navbar from "components/navbar/navbar";
import AddContactImg from "assets/images/man-taking-note.png";
import TextInput from "components/ui/text-input";
import ROUTES_CONSTANT from "constants/routes.const";
import PageTitle from "components/ui/page-title";

const EditContact = () => {
  const inputPlaceholderText = [
    "نام و نام خانوادگی",
    "آدرس تصویر",
    "شماره موبایل",
    "آدرس ایمیل",
    "شغل",
  ];

  const selectGroupsText = [
    { label: "همکار", value: "colleague" },
    { label: "دوست", value: "friend" },
    { label: "فامیل", value: "family" },
  ];

  const navigate = useNavigate();

  return (
    <>
      <Navbar withoutSearch />

      <PageTitle
        title="ویرایش مخاطب"
        textColor="#ff79c6"
        borderColor="#ff79c6"
      />

      <div className="w-3/4 flex justify-between bg-[#44475a] rounded p-4 mx-auto gap-10">
        <form className="w-1/2 flex flex-col justify-center items-center ">
          <>
            {inputPlaceholderText.map((item: string, index: number) => (
              <TextInput placeholder={item} key={index} />
            ))}

            <select className="w-96 rounded py-1 px-2 outline-none border border-[#bd93f9] mb-5">
              <option selected disabled>
                انتخاب گروه
              </option>
              {selectGroupsText.map((item) => (
                <option value={item.value} key={item.value}>
                  {item.label}
                </option>
              ))}
            </select>

            <div>
              <button className="bg-[#bd93f9] rounded ml-4 px-2 py-1 text-white transition-all hover:bg-opacity-80">
                ویرایش مخاطب
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

        <div className="my-auto h-[260px] border border-[#bd93f9] rounded">
          <img
            className="w-full h-full "
            src="https://toplearn.com/img/course/400x286/%D8%A2%D9%85%D9%88%D8%B2%D8%B4_%DA%A9%D8%AF_%D9%86%D9%88%DB%8C%D8%B3%DB%8C_%D9%82%D8%A7%D9%84%D8%A8_%D9%88%D8%B1%D8%AF%D9%BE%D8%B1%D8%B3.jpg"
            alt="ali"
          />
        </div>
      </div>
    </>
  );
};

export default EditContact;
