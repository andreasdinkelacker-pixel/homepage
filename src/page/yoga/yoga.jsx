import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Yoga.css";

const Yoga = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    // Beim Mount sofort prüfen
    handleResize();

    // Listener hinzufügen
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="first-container">
        <div className="image-section">
          <img src="/images/yoga_01.png" alt="Yogapose" />
        </div>
        <div className="text-section">
          <div>
            Seit rund 20 Jahren leite ich Yogakurse für unterschiedliche
            Einrichtungen, Unternehmen und privat. An der Freiburger Yogaschule
            absolvierte ich die vierjährige Ausbildung zum Yogalehrer. Dort wird
            klassisches Hatha-Yoga mit westlichem Wissen über ganzheitliche
            Körper- und Atemtherapie sowie Wissen und Methoden zur Achtsamkeit
            gelehrt.
          </div>
          {(isExpanded || !isMobile) && (
            <>
              <div>
                Meine Yogakurse profitieren auch von den Ausbildungen als
                Schmerztherapeut sowie meiner therapeutischen Erfahrung aus 20
                Jahren eigener Praxis als Heilpraktiker.
              </div>
              <div>
                Weitere Einflüsse in meinem Gruppen- und Einzelunterricht haben
                CANTIENICA®, Tibetisches Heilyoga, Faszientraining,
                funktionelles Training, sowie Achtsamkeits- /
                Einsichtsmeditation.
              </div>
              <div>
                Mein Wunsch ist es, Menschen durch Yoga zu einem tieferen
                Bewusstsein für sich selbst zu begleiten, was eine zunehmende
                Steuerung der eigenen Befindlichkeit und Entwicklung ermöglicht.
              </div>
            </>
          )}
          {isMobile && (
            <button
              className="mobile-button"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Weniger lesen" : "Mehr lesen"}
            </button>
          )}
        </div>
      </div>
      <hr
        style={{
          border: "2px solid lightgray",
          width: "80%",
          margin: "20px auto",
        }}
      />
      <div className="outside-container">
        <div className="second-container">
          <div className="certification-img">
            <img src="/images/yoga_02.png" alt="certification" />
          </div>
          <div className="certification-text">
            Zertifizierter Kursleiter entsprechend der Kooperationsgemeinschaft
            gesetzlicher Krankenkassen zur Zertifizierung von Präventionskursen
            (§ 20 SGB V)
          </div>
        </div>
      </div>
      <hr
        style={{
          border: "2px solid lightgray",
          width: "80%",
          margin: "20px auto",
        }}
      />
      <div class="course-container">
        <div style={{ maxWidth: "80vw" }}>
          <h1>Laufende Kurse</h1>

          <ul class="course-list">
            <li>
              Montag 17 - 18 Uhr im{" "}
              <a
                href="https://palestra-fitness.de/project/hatha-yoga/"
                target="_blank"
              >
                Palestra
              </a>
            </li>
            <li>
              Dienstag 17.30 - 18.45 Uhr im{" "}
              <a href="https://yogazentrum-kroesselbach.de/" target="_blank">
                Yogazentrum Krösselbach
              </a>
            </li>
            <li>
              Donnerstag 15 - 16 Uhr in der{" "}
              <a href="https://www.vhs-eb-ng.de/" target="_blank">
                Volkshochschule Eberbach
              </a>
            </li>
            <li>
              Online, Dienstag 19.30 - 20.30 Uhr — Anmeldung über das{" "}
              <Link to="/kontakt">Kontaktformular</Link>
            </li>
          </ul>

          <p class="extra-text">
            Darüber hinaus biete ich Kurse für Unternehmen im Rahmen der
            betrieblichen Gesundheitsförderung an, sowie private Kurse für
            Gruppen oder Einzelpersonen.
          </p>
        </div>
      </div>
    </>
  );
};

export default Yoga;
