import React from "react";
import "../assets/stylesheet/ButtonHover.css";

function ButtonHover() {
  return (
    <div>
      <div className="containerB">
        <button>
          <span>Nos casques Audio</span>
        </button>
      </div>
    </div>
  );
}

export default ButtonHover;

function ButtonHoverSecond() {
  return (
    <div>
      <div className="containerBsecond">
        <button>
          <span>Nos Téléphones</span>
        </button>
      </div>
    </div>
  );
}

export { ButtonHoverSecond };

function ButtonHoverThird() {
  return (
    <div>
      <div className="containerBthird">
        <button>
          <span>Nos Ordinateurs</span>
        </button>
      </div>
    </div>
  );
}

export { ButtonHoverThird };
