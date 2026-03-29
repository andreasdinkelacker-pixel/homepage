import React, { useState, useEffect } from "react";
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
                CANTIENICA® (Methode für Körperform und Haltung), Tibetisches
                Heilyoga, Faszientraining, funktionelles Training, sowie
                Achtsamkeits- / Einsichtsmeditation.
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
    </>
  );
};

export default Yoga;
