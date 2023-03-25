import React from "react";
import { useNavigate } from "react-router-dom";
import { FaAddressBook, FaSearch } from "react-icons/fa";
import ROUTES_CONSTANT from "constants/routes.const";

interface NavbarProps {
  withoutSearch?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ withoutSearch }) => {
  const navigate = useNavigate();

  return (
    <nav className="w-full h-12 bg-[#44475a] flex justify-around items-center">
      <div className="flex justify-center items-center">
        <FaAddressBook size={18} color="#bd93f9" />
        <p className="text-white px-1">وب اپلیکیشن مدیریت</p>
        <span className="text-[#bd93f9]">مخاطبین</span>
      </div>

      {!withoutSearch ? (
        <div className="w-2/6 flex justify-center items-center">
          <input
            className={` rounded-r outline-none p-1 border border-l-0 border-[#bd93f9] flex-1`}
            type="text"
            placeholder="جستجوی مخاطب"
          />
          <span className="text-white">
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
      ) : null}

      <button
        className="text-white bg-[#bd93f9] px-2 py-1 rounded transition-all hover:opacity-80"
        onClick={() => {
          navigate(ROUTES_CONSTANT.LOGIN_ROUTE);
          localStorage.setItem("auth", "false");
        }}
      >
        خروج
      </button>
    </nav>
  );
};

export default Navbar;
