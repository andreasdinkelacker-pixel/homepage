import React, { useState, useRef } from "react";
import "./Contact.css";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [consent, setConsent] = useState(false);
  const recaptchaRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ❗ Blockieren wenn Checkbox nicht angehakt
    if (!consent) {
      setStatus("Bitte stimmen Sie der Datenschutzerklärung zu.");
      return;
    }

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
        setConsent(false);
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
          value="sf_7e1185ae249f6761a8b1ff99"
        />

        {/* Betreff */}
        <input
          type="hidden"
          name="subject"
          value="Neue Nachricht von der Website"
        />

        {/* Honeypot */}
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

        {/* DSGVO Hinweis + Checkbox */}
        <div className="form-group checkbox-group">
          <p style={{ fontSize: "0.9rem", color: "#000000" }}>
            Datenschutz Hinweis: Ihre Angaben werden zur Bearbeitung der
            Kontaktanfrage und deren Abwicklung gem. Art. 6 Abs. 1 lit. b) DSGVO
            verarbeitet.
          </p>

          <label>
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              required
            />{" "}
            Ja, ich habe die Datenschutzerklärung zur Kenntnis genommen und bin
            damit einverstanden, dass die von mir angegebenen Daten
            zweckgebunden zur Bearbeitung und Beantwortung meiner Anfrage
            elektronisch erhoben und gespeichert werden. Mit dem Absenden des
            Kontaktformulars erkläre ich mich mit der Verarbeitung
            einverstanden. *
          </label>
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
