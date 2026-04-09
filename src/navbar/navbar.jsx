import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [farEnough, setFarEnough] = useState(window.innerWidth >= 1000);
  const [menuOpen, setMenuOpen] = useState(false);

  // useEffect: EventListener für Fenstergröße
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setFarEnough(false);
      } else {
        setFarEnough(true);
      }
    };

    // Beim ersten Render prüfen
    handleResize();

    // EventListener hinzufügen
    window.addEventListener("resize", handleResize);

    // Cleanup: Listener wieder entfernen
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = (
    <>
      <Link to="/">Praxis</Link>
      <Link to="/yoga">Yoga</Link>
      <Link to="/qualifikationen">Qualifikation</Link>
      <Link to="/kontakt">Kontakt</Link>
    </>
  );

  return (
    <div className="Header">
      <div className="left-side">
        <Link to="/">
          <img className="logo" src="/images/Logo.png" alt="Logo" width="200" />
        </Link>
      </div>
      <div className="right-side">
        <p>Tel: 06271/ 9477477</p>

        <div className="link-items">
          <nav className={farEnough ? "nav1" : "nav2"}>
            {(farEnough && links) || (menuOpen && links)}
          </nav>

          {!farEnough && (
            <div className="menu-div" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <X size={36} color="#0075C9" />
              ) : (
                <Menu size={36} color="#F7931E" />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
