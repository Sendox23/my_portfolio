import React, { useState } from "react";


import classes from "./ContactMeForm.module.css";

const ContactMeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sttatus, setSttatus] = useState();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });
      setSttatus("SUCCESS");
    } catch (error) {
      setSttatus("ERROR");
    }
  };

  return (
    <div className={classes.contactMeForm}>
      <h2>Contact</h2>
      <form
        data-netlify="true"
        onSubmit={handleSubmit}
        name="contact"
        method="post"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="message">
            Message:
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>{" "}
        {sttatus === "SUCCESS" && <p>Thanks for your message!</p>}
        {sttatus === "ERROR" && <p>Oops! There was a problem.</p>}
      </form>
    </div>
  );
};

export default ContactMeForm;
