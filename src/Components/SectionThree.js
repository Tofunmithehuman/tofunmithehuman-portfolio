import React from "react";
import "../Styles/style.css";
import useAos from "../Components/aos";

function SectionThree() {
  useAos();
  return (
    <div className="SectionThree" id="contact">
        <h1 data-aos="fade-up">Signup for Newsletter</h1>
      <form data-aos="fade-up" >
        <label htmlFor="name"><h6>Name</h6>
          <input type="text" name="name" id="name" placeholder="Enter your name" required />
        </label>
        <label htmlFor="email"><h6>Email</h6>
          <input type="email" name="email" id="email" placeholder="Enter your email" required />
        </label>
        <label htmlFor="message"><h6>Leave a messsage</h6>
          <textarea name="message" id="message" cols="30" rows="10" placeholder="Feel free to drop a message"></textarea>
        </label>
        <input type="submit" value="Submit" className="btn" />


      </form>
    </div>
  );
}

export default SectionThree;
