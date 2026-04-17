import React from "react";
import "./Praxis.css";

const Praxis = () => {
  return (
    <div className="praxis">
      <div className="headline">
        <h1 className="practice">Praxis für Klassische Homöopathie</h1>
        <p className="claim">Der ganzheitliche Blick auf Ihre Beschwerden</p>
      </div>
      <hr
        style={{
          border: "2px solid lightgray",
          width: "80%",
          margin: "20px auto",
        }}
      />
      <div className="welcome">
        <div className="image">
          <img src="/images/start_01.jpeg" alt="Willkommensbild" />
        </div>
        <div>
          <div className="text">
            <h1 className="name">Andreas Dinkelacker</h1>
            <span className="title">
              <p style={{ color: "#2466a3" }}>Heilpraktiker</p> |{" "}
              <p style={{ color: "#E6B325" }}>Yogalehrer</p>
            </span>
          </div>
          <div className="stempel">
            <img src="/images/Stempel1.jpg" alt="Stempel/Zertifikat_1" />
            <img src="/images/Stempel2.jpg" alt="Stempel/Zertifikat_2" />
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

      <div className="text-container">
        <h4>
          Viele Menschen, die zu mir in die Praxis kommen, haben bereits einen
          langen Leidensweg hinter sich.
        </h4>

        <p>
          Insbesondere chronische Erkrankungen wie Rheuma, Migräne,
          Autoimmunerkrankungen, hormonelle Störungen, Allergien oder
          psychosomatische Beschwerden sind häufige Anliegen von Patientinnen
          und Patienten.
        </p>

        <p>
          Die Behandlung hat zum Ziel, sanft und individuell die körpereigenen
          Selbstheilungskräfte anzuregen.
        </p>

        <p>
          Die grundlegende Behandlungsmethode in meiner Praxis stellt die
          Klassische Homöopathie dar, die sich bereits seit über 200 Jahren
          weltweit bewährt hat.
        </p>

        <p>
          Je nach Art der Beschwerde ergänzen manuelle Behandlungsverfahren,
          Körper- und Atemübungen, Entspannungsverfahren oder eine
          Ernährungsberatung das Vorgehen.
        </p>

        <h3>Ablauf:</h3>
        <p>
          Zunächst einmal nehme ich mir ausreichend Zeit für Sie. Eine
          gründliche Erstaufnahme bei Erwachsenen bedarf gewöhnlich 1-2 Stunden.
          Ganz individuell arbeite ich dann eine homöopathische Arznei für Ihr
          Beschwerdebild aus.
        </p>

        <h3>Langfristige Ergebnisse:</h3>
        <p>
          Homöopathische Mittel wirken nicht nur auf die Symptome, sondern
          setzen gezielt bei den zugrunde liegenden Ursachen an. So können
          nachhaltige Verbesserungen erreicht werden, statt nur kurzfristige
          Linderung zu bieten. Im Rahmen regelmäßiger Termine begleite ich Ihre
          Behandlung und passe das Mittel bei Bedarf an, um optimale Ergebnisse
          zu erzielen.
        </p>

        <p>
          Sollte aus therapeutischer Sicht der Einsatz von anderen Methoden
          ergänzend oder auch alternativ zu meiner Behandlung sinnvoll bzw.
          angezeigt sein, habe ich keine Berührungsängste, Sie entsprechend an
          erfahrene KollegInnen mit jeweiligen Praxisschwerpunkten zu empfehlen.
          Mein Behandlungsziel ist stets, dass Sie als Patient dauerhaft und
          nachhaltig gesünder werden.
        </p>

        <h3>Kosten:</h3>
        <p>
          Gerne berate ich Sie bei der Erstanmeldung über die für Sie
          entstehenden Kosten.
        </p>
        <p>
          Heilpraktikerkosten werden von den gesetzlichen Krankenkassen in der
          Regel nicht erstattet.
        </p>
        <p>
          Private Kranken- und Zusatzversicherungen übernehmen meist den größten
          Teil der Heilpraktikerleistungen.
        </p>
        <p>
          Bitte erkundigen Sie sich daher vor der Behandlung, welche
          Gebührensätze Ihnen erstattet werden. Es ist damit zu rechnen, dass
          der Patient Eigenleistungen zu erbringen hat.
        </p>

        <h3>Termine:</h3>
        <p>
          Termine nach Vereinbarung. Termine zwischen Patienten werden so
          großzügig gelegt, dass i.d.R. keine Wartezeiten entstehen.
        </p>
      </div>
    </div>
  );
};

export default Praxis;
