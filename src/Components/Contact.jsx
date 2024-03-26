import React from "react";
import "../Styles/Styles.css";
import useAos from "./aos";
import { Link } from "react-router-dom";

function Contact() {
  useAos();
  return (
    <div className="Contact" id="contact">
      <div className="container">
        <form data-aos="fade-up">
          <h3>
            Send a message <i className="fa-solid fa-envelope"></i>
          </h3>
          <input name="name" type="text" placeholder="Full Name" />
          <input name="email" type="email" placeholder="Email" required />
          <input name="subject" type="text" placeholder="Subject" />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <Link to="#">
            Submit <i className="fa-solid fa-paper-plane"></i>
          </Link>
          <p>
            *To get more information about me and how i can help you work on
            projects, please fill out the form. I will get back to you as soon
            as possible.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Contact;