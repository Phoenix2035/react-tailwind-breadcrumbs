import ContactNotFoundImg from "assets/images/no-found.gif";

const ContactNotExist = () => {
  return (
    <div className="w-3/4 h-[400px] mx-auto bg-[#44475a] mt-5 rounded flex flex-col justify-center items-center p-4">
      <h2 className="text-[#ffb86c] text-[2rem]">مخاطب یافت نشد...</h2>
      <img
        src={ContactNotFoundImg}
        alt="contact-not-found"
        className="w-72 mt-2"
      />
    </div>
  );
};

export default ContactNotExist;
