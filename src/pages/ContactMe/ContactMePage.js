import { useEffect } from "react";

import ContactMeForm from "../../components/ContactMe/ContactMeForm";

import classes from "./ContactMePage.module.css";

const ContactMePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.contactMePage}>
      <ContactMeForm />

    </div>
  );
};
export default ContactMePage;
