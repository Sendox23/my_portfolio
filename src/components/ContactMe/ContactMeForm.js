import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./ContactMeForm.module.css";

const ContactMeForm = () => {
  const navigate = useNavigate();

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



  return (
    <div className={classes.contactMeForm}>
      <h2>Contact</h2>
      <form  name="contact" method="post" action="/home">
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
