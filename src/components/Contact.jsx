import React from "react";
import '../contact.css'

const ContactMe = () => {
  return (
    <div className="contact-container">
      <div className="left-partition">
         <div className="flexdir">
         <h3><span>&mdash;</span> Contact me</h3>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Full Name" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <textarea placeholder="Message"></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
         </div>
      </div>
      <div className="right-partition">
        <div className="flexdir2">
        <h3>Contact with me </h3>
        <p><i className="fa-solid fa-envelope"></i> vishal12345mane00@gmail.com</p>
        <div className="social-icons">
        <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
