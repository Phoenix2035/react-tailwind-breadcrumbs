import { MdAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";

import Navbar from "components/navbar/navbar";
import ContactCard from "./contact-card";

const Contacts = () => {
  return (
    <div className="w-full mx-auto">
      <Navbar />

      <Link
        to="/contacts/add"
        className="w-56 flex justify-center items-center p-2 mr-[130px] mt-8 bg-[#ff79c6] rounded "
      >
        <p className="pl-2">ساخت مخاطب جدید</p>
        <MdAddCircle />
      </Link>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(700px,1fr))]">
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </div>
    </div>
  );
};

export default Contacts;
