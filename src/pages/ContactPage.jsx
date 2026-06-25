import { useState } from "react";
import "./ContactPage.css";

function ContactPage() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill all fields.");
      return;
    }

    setSuccess("🎉 Your message has been submitted successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  };

  return (

    <section className="contact">

      <div className="contact-card">

        <h1>Contact Us</h1>

        <p>
          We'd love to hear from you.
        </p>

        <form onSubmit={handleSubmit}>

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
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

        {success && (
          <div className="success">
            {success}
          </div>
        )}

      </div>

    </section>

  );
}

export default ContactPage;
