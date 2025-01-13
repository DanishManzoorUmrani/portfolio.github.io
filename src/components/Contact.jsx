// src/components/Contact.js
import React from "react";


const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Add your form submission logic here (e.g., using Email.js or any API)
    console.log("Form submitted");
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me!</span>
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
        </div>

        <div className="input-box">
          <input type="number" placeholder="Mobile Number" required />
          <input type="text" placeholder="Email Subject" required />
        </div>

        <textarea
          placeholder="Your Message..."
          cols="30"
          rows="10"
          required
        ></textarea>

        <input type="submit" value="Send Message" className="btn" />
      </form>
    </section>
  );
};

export default Contact;
