import React, { useState } from "react";

import classes from "./ContactMeForm.module.css";

const ContactMeForm = () => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // add your form submission logic here, for example, sending an HTTP request
    console.log(formData);
  };

  return (
    <div class={classes.contactMeForm}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">  <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
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
      </form></div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    
    </div>
  );
};

export default ContactMeForm;
