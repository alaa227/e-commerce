import React, { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
     
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.text}>
            Have questions or custom requests? We'd love to hear from you!
          </p>

          <div className={styles.content}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className={styles.btn}>
                Send Message
              </button>
            </form>

            <div className={styles.info}>
              <h3>📍 Address</h3>
              <p>Cairo, Egypt</p>
              <h3>📧 Email</h3>
              <p>support@alaaaccessories.com</p>
              <h3>📞 Phone</h3>
              <p>+20 100 123 4567</p>
            </div>
          </div>
        </div>
      </section>
    
    </>
  );
};

export default Contact;
