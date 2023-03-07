import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./ContactMeForm.module.css";

const ContactMeForm = () => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // Get form data from DOM
    let myForm = document.getElementById("contact");
    let formData = new FormData(myForm);
    // Send form data to Netlify Forms API
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => navigate("/contact-me/success"))
      .catch((error) => alert(error));
  };

  return (
    <div className={classes.contactMeForm}>
      <form
        onSubmit={submitHandler}
        data-netlify="true"
        name="contact"
        method="post"
        id="contact"
      >
        {/* Add a hidden input field with name set to 'form-name' and value set to the form name  **necessary for netlify** */}
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactMeForm;
