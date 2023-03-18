import { MdAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";

import Navbar from "components/navbar/navbar";
import ContactCard from "components/contacts/contact-card";
import ContactNotExist from "components/contacts/contact-not-exist";
import ROUTES_CONSTANT from "constants/routes.const";

const ContactPage = () => {
  return (
    <div className="w-full mx-auto">
      <Navbar />

      <Link
        to={ROUTES_CONSTANT.ADD_CONTACT}
        className="w-56 flex justify-center items-center p-2 mr-[130px] mt-8 bg-[#ff79c6] rounded"
      >
        <p className="pl-2">ساخت مخاطب جدید</p>
        <MdAddCircle />
      </Link>

      {/* <ContactNotExist /> */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(700px,1fr))]">
        <ContactCard />
      </div>
    </div>
  );
};

export default ContactPage;
