import { FaAddressBook, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full h-12 bg-[#44475a] flex justify-around">
      <div className="flex justify-center items-center">
        <FaAddressBook size={18} color="#bd93f9" />
        <p className="text-white px-1">وب اپلیکیشن مدیریت</p>
        <span className="text-[#bd93f9]">مخاطبین</span>
      </div>

      <div className="w-2/6 flex justify-center items-center">
        <input
          className={` rounded-r outline-none p-1 border border-l-0 border-[#bd93f9] flex-1`}
          type="text"
          placeholder="جستجوی مخاطب"
        />
        <span className="">
          <FaSearch
            size={33.5}
            style={{
              padding: "7px",
              backgroundColor: "#bd93f9",
              borderTopLeftRadius: "4px",
              borderBottomLeftRadius: "4px",
            }}
          />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
