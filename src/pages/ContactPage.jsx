import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ContactPage.css";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      alert("Please fill all fields.");
      return;
    }

    setSuccess("Message sent successfully!");
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <>
      <Navbar />
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
      <Footer />
    </>
  );
}

export default ContactPage;
