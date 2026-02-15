import React from "react";
export default function Home({ onStart }) {
  const handleStart = typeof onStart === "function" ? onStart : () => {};

  return (
    <header className="homeHero">
      <div className="homeHeroInner">
        <span className="homeHeroEyebrow">fırsatı kaçırma</span>

        <h1 className="homeHeroTitle">
          KOD ACIKTIRIR
          <br />
          PIZZA, DOYURUR
        </h1>

        <button className="homeHeroBtn" onClick={handleStart}>
          ACIKTIM
        </button>
      </div>
    </header>
  );
}


