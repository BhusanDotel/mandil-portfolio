import React from "react";
import "./LandingContainer.css";
import ScrollDown from "./ScrollDown";

function LandingContainer() {
  return (
    <>
      <div className="landingcontainer-main-root">
        <h1 className="landing-container-title">Mandil Thapa</h1>
        <div className="scroll-down-indicator">
          <ScrollDown />
        </div>
      </div>
    </>
  );
}

export default LandingContainer;
