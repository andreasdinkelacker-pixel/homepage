import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section contact">
          <h1 className="footer-title">Andreas Dinkelacker</h1>
          <p>In der Au 6 (im PALESTRA) | 69412 Eberbach­</p>
          <p>
            Email:{" "}
            <a href="mailto:info@andreas-dinkelacker.de">
              info@andreas-dinkelacker.de
            </a>
          </p>
          <p>Telefon: 06271/9477477</p>
        </div>
        <div className="rechtliches">
          <p>
            <Link
              style={{ color: "whitesmoke", fontSize: "1.4rem" }}
              to="/impressum"
            >
              Impressum
            </Link>
          </p>
          <p>
            <Link
              style={{ color: "whitesmoke", fontSize: "1.4rem" }}
              to="/datenschutz"
            >
              Datenschutz
            </Link>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Andreas Dinkelacker</p>
      </div>
    </footer>
  );
};

export default Footer;
