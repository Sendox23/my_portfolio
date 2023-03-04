import classes from "./ContactMeForm.module.css";

const ContactMeForm = () => {
  return (
    <div className={classes.contactMeForm}>
      <h2>Contact</h2>
      <form name="contact" method="POST" data-netlify="true" >
        <p>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              id="name"
              name="name"
              required
            />
          </label>
        </p>
        <p>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              required
            />
          </label>
        </p>
        <p>
          <label htmlFor="message">
            Message:
            <textarea
              id="message"
              name="message"
              rows="5"
              required
            />
          </label>
        </p>
        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
};

export default ContactMeForm;
