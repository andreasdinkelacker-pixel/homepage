import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2 className="footer-title">Über uns</h2>
          <p>
            Wir entwickeln moderne Weblösungen mit Fokus auf Performance,
            Sicherheit und Benutzerfreundlichkeit.
          </p>
        </div>

        <div className="footer-section links">
          <h2 className="footer-title">Schnellzugriff</h2>
          <ul>
            <li>
              <a href="#home">Startseite</a>
            </li>
            <li>
              <a href="#projects">Projekte</a>
            </li>
            <li>
              <a href="#contact">Kontakt</a>
            </li>
            <li>
              <a href="#impressum">Impressum</a>
            </li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h2 className="footer-title">Kontakt</h2>
          <p>
            Email:{" "}
            <a href="mailto:info@deinewebseite.de">info@deinewebseite.de</a>
          </p>
          <p>Telefon: +49 123 456789</p>
          <div className="socials">
            <a href="#">
              <i>Insta</i>
            </a>
            <a href="#">
              <i>You Tube</i>
            </a>
            <a href="#">
              <i>Facebook</i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Deine Webseite – Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
