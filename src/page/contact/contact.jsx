import React, { useState, useRef } from "react";
import "./Contact.css";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [status, setStatus] = useState("");
  const recaptchaRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Wird gesendet...");

    const formData = new FormData(e.target);

    // reCAPTCHA Token holen
    const token = recaptchaRef.current.getValue();
    formData.append("recaptchaToken", token);

    try {
      const response = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Nachricht erfolgreich gesendet!");
        e.target.reset();
        recaptchaRef.current.reset();
      } else {
        setStatus("Fehler beim Senden. Bitte erneut versuchen.");
      }
    } catch (error) {
      setStatus("Serverfehler. Bitte später erneut versuchen.");
    }
  };

  return (
    <div className="contact-page">
      <h1>Kontakt</h1>
      <p>Ich freue mich über Ihre Nachricht!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        {/* StaticForms Access Key */}
        <input
          type="hidden"
          name="accessKey"
          value="sf_7e1185ae249f6761a8b1ff99R"
        />

        {/* Optional: Betreff */}
        <input
          type="hidden"
          name="subject"
          value="Neue Nachricht von der Website"
        />

        {/* Honeypot (Spam-Schutz) */}
        <input type="text" name="honeypot" style={{ display: "none" }} />

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

        {/* reCAPTCHA */}
        <ReCAPTCHA
          sitekey="6LcYx64sAAAAACaZdN-XPGPRykHQRYbZm_-YtBFg"
          ref={recaptchaRef}
        />

        <button type="submit">Nachricht senden</button>

        <p>{status}</p>
      </form>
    </div>
  );
};

export default Contact;
