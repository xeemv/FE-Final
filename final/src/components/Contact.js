import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm(
      "service_0h2iuao", 
      "template_43igvj6", 
      e.target, 
      "hTad8af4VNgXRqYZj"
      ).then(res=>{
        console.log(res);
    }).catch(err=> console.log(err));
  } 

  return (
    <form
      onSubmit={sendEmail}
    >
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="form-control"
          required
        />
      </div>

      <div className="mb-3 pt-0">
        <input
          type="user_email"
          placeholder="Email"
          name="user_email"
          className="form-control"
          required
        />
      </div>

      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="form-control"
          required
        />
      </div>

      <div className="mb-3 pt-0">
        <button
          className="form-control"
          type="submit"
        >
          {" "}
          Send a message
        </button>
      </div>
    </form>
  );
};

// export default ContactForm;
export default Contact;

