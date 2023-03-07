import { useEffect } from "react";

import ContactMeForm from "../../components/ContactMe/ContactMeForm";

const ContactMePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">

      <ContactMeForm />
    </div>
  );
};
export default ContactMePage;
