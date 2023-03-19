import Navbar from "components/navbar/navbar";
import ContactCard from "./contact-card";
import PageTitle from "components/ui/page-title";

const ContactInfo = () => {
  return (
    <>
      <Navbar withoutSearch />
      <PageTitle
        title="اطلاعات مخاطب"
        textColor="#8be9fd"
        borderColor="#8be9fd"
      />
      <ContactCard contactButtons />
    </>
  );
};

export default ContactInfo;
