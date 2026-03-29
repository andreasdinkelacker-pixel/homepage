import React from "react";
import "./Praxis.css";

const Praxis = () => {
  return (
    <div className="praxis">
      <h1 className="practice">Praxis für Klassische Homöopathie</h1>
      <p className="claim">Der ganzheitliche Blick auf Ihre Beschwerden</p>
      <div className="welcome">
        <div className="image">
          <img src="/images/start_01.jpeg" alt="Willkommensbild" />
        </div>
        <div className="text">
          <h1 className="name">Andreas Dinkelacker</h1>
          <span className="title">
            <p style={{ color: "#2466a3" }}>Heilpraktiker</p> |{" "}
            <p style={{ color: "#E6B325" }}>Yogalehrer</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Praxis;
