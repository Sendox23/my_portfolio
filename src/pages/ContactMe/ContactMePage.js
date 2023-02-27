import ContactMeForm from "../../components/ContactMe/ContactMeForm";
import classes from "./ContactMePage.module.css";

const ContactMePage = () => {
  return (
    <div className={classes.contactMePage}>
      <ContactMeForm />
    </div>
  );
};
export default ContactMePage;
