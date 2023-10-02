import useMediaQuery from "@hooks/useMediaQuery";
import ContactsDesktop from "containers/contacts/desktop";
import ContactsMobile from "containers/contacts/mobile";

const Contacts = () => {
  const isTablet = useMediaQuery("(max-width: 1024px)");

  return isTablet ? <ContactsMobile /> : <ContactsDesktop />;
};

export default Contacts;
