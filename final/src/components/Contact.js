import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

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


// bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150