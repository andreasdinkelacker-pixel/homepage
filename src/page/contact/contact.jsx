import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Kontakt</h1>
      <p>Ich freue mich über Ihre Nachricht!</p>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ihr Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ihre E-Mail-Adresse"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Nachricht</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>

        <button type="submit">Nachricht senden</button>
      </form>
    </div>
  );
};

export default Contact;
