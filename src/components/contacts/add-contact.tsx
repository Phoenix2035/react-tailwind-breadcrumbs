import Navbar from "components/navbar/navbar";
import AddContactImg from "assets/images/man-taking-note.png";
import TextInput from "components/ui/text-input";

const AddContact = () => {
  const inputPlaceholderText = [
    "نام و نام خانوادگی",
    "آدرس تصویر",
    "شماره موبایل",
    "آدرس ایمیل",
    "شغل",
  ];

  return (
    <>
      <Navbar withoutSearch />
      <h2 className="w-[80%] text-center text-[#50fa7b] mx-auto p-3 border-b-[0.5px] border-[#50fa7b] border-opacity-20	">
        ساخت مخاطب جدید
      </h2>

      <div className="flex">
        <form>
          {inputPlaceholderText.map((item: string, index: number) => (
            <TextInput placeholder={item} key={index} />
          ))}
        </form>

        <img src={AddContactImg} alt="add-contact" />
      </div>
    </>
  );
};

export default AddContact;
