import { useEffect } from "react";

import ContactMeForm from "../../components/ContactMe/ContactMeForm";
import TestForm from "../../components/ContactMe/TestForm";
import classes from "./ContactMePage.module.css";

const ContactMePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.contactMePage}>
      <ContactMeForm />
      <TestForm />
    </div>
  );
};
export default ContactMePage;
