import React from "react";
import "./Qualifikationen.css";

const Qualifikationen = () => {
  return (
    <div className="qualifikationen">
      <section className="vita">
        <h2>Qualifikation</h2>

        <p>
          <strong>Universität Freiburg</strong> – Dipl. Hydrologe
        </p>
        <p>
          Staatlich zugelassener Heilpraktiker seit <strong>2004</strong>
        </p>
        <p>
          Yogalehrer seit <strong>2004</strong>
        </p>
        <p>
          Eigene Praxis seit <strong>2005</strong>
        </p>

        <h3>Ausbildungen</h3>
        <ul>
          <li>
            3-jährige Vollzeitausbildung zum Heilpraktiker beim{" "}
            <a href="https://www.fdh-bw.de/" target="_blank">
              Fachverband Deutscher Heilpraktiker
            </a>
          </li>
        </ul>

        <h4>Ausbildungsschwerpunkte</h4>
        <ul>
          <li>Allgemeine Naturheilkunde</li>
          <li>Homöopathie</li>
          <li>Phytotherapie</li>
          <li>Chiropraktik / Osteopathie</li>
          <li>Psychologie / Psychosomatik</li>
        </ul>

        <ul>
          <li>
            3-jährige Ausbildung in klassischer Homöopathie an der{" "}
            <a href="https://www.homoeopathie-akademie.de/" target="_blank">
              Akademie für Homöopathie, Gauting
            </a>
          </li>
          <li>Hospitanz in verschiedenen Praxen</li>
          <li>
            Erfolgreiche Überprüfung durch die{" "}
            <a href="https://www.homoeopathie-zertifikat.de/" target="_blank">
              Stiftung Homöopathie-Zertifikat
            </a>{" "}
            (2008)
          </li>
          <li>Dreijährige Supervision bei Roland Wolf (Heilpraktiker)</li>
          <li>
            Zahlreiche Fortbildungen in klassischer Homöopathie, u.a.:
            <ul>
              <li>Kinderhomöopathie</li>
              <li>Behandlung schwerer Erkrankungen</li>
            </ul>
          </li>
          <li>Ausbildung bei Michael Kohl (Heilpraktiker)</li>
          <li>
            Mitglied im{" "}
            <a href="https://www.vkhd.de/" target="_blank">
              Verband Klassischer Homöopathen Deutschlands
            </a>
          </li>
        </ul>

        <h3>Yoga & Bewegung</h3>
        <ul>
          <li>
            Ausbildung zum Yogalehrer (2002–2007) an der{" "}
            <a href="https://www.freiburger-yogaschule.de/" target="_blank">
              Freiburger Yogaschule
            </a>
          </li>
          <li>Zahlreiche Yoga-Fortbildungen</li>
          <li>Eigene Yogakurse seit 2003</li>
          <li>
            Diplom{" "}
            <a href="https://cantienica.com/" target="_blank">
              Cantienica®
            </a>{" "}
            in Yoga (2010)
          </li>
          <li>
            Zertifizierter Kursleiter entsprechend der Kooperationsgemeinschaft
            gesetzlicher Krankenkassen zur Zertifizierung von Präventionskursen
            (§ 20 SGB V)
          </li>
        </ul>

        <h3>Therapie & Spezialisierungen</h3>
        <ul>
          <li>
            Ausbildung im{" "}
            <a href="https://www.five-konzept.de/" target="_blank">
              Five® – Bewegungs- und Therapiekonzept
            </a>{" "}
            (2011)
          </li>
          <li>
            Ausbildung Schmerztherapie nach{" "}
            <a href="https://www.liebscher-bracht.com/" target="_blank">
              Liebscher & Bracht®
            </a>{" "}
            (2012)
          </li>
          <li>
            Zertifizierung Schmerztherapie nach Liebscher & Bracht® (2014)
          </li>
          <li>Teilnahme an zahlreichen Arbeitskreisen</li>
        </ul>
      </section>
      <div className="stempel_">
        <img src="/images/Stempel1.jpg" alt="Stempel/Zertifikat_1" />
        <img src="/images/Stempel2.jpg" alt="Stempel/Zertifikat_2" />
        <img src="/images/yoga_02.png" alt="certification" />
      </div>
    </div>
  );
};

export default Qualifikationen;
