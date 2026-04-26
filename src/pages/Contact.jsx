import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill out all fields.");
      setSuccess("");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <motion.section
      className="page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="section-header">
        <h1>Contact Me</h1>
        <p>
          Feel free to reach out for design, web, or collaboration opportunities.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Let’s Connect</h2>
          <p>Email: vickyrios1310@gmail.com</p>
          <p>LinkedIn: lwww.linkedin.com/in/maria-rios-a845b0261</p>
          <p>GitHub: github.com/marivirv</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button className="btn" type="submit">
            Send Message
          </button>

          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
        </form>
      </div>
    </motion.section>
  );
}

export default Contact;