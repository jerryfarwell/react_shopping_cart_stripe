import React from "react";
import "../assets/stylesheet/Paragraphs.css";
import slide_left_and_right from "../assets/images/slide_left_and_right.png";

function Paragraphs() {
  return (
    <div>
      <div className="paragraph">
        <h5 align="center" className="p-3">
          Nous offrons une sélection de matériel informatique à des prix
          imbattables.
        </h5>
      </div>
    </div>
  );
}

export default Paragraphs;

function Paragraphsecond() {
  return (
    <div>
      <div className="paragraph">
        <h5 align="center" className="p-3">
          Notre politique de retour sous deux semaines vous garantit une
          tranquillité absolue.
        </h5>
      </div>
    </div>
  );
}

export { Paragraphsecond };

function Paragraphthird() {
  return (
    <div>
      <div className="paragraph">
        <h5 align="center" className="p-3">
          Les produits de Networkleed sont synonymes de qualité, de fiabilité et
          de performance.
        </h5>
      </div>
    </div>
  );
}

export { Paragraphthird };

function Paragraphfourth() {
  return (
    <div>
      <div className="paragraph">
        <h5 align="center" className="p-3">
          Les 3 meilleures ventes du mois.
        </h5>
      </div>
    </div>
  );
}

export { Paragraphfourth };

function Paragraphfive() {
  return (
    <div>
      <div className="paragraph">
        <h5 align="center" className="p-3">
          Plongez dans l'innovation sans limite en explorant la gamme de
          produits Networkleed.
        </h5>
      </div>
    </div>
  );
}

export { Paragraphfive };

function Paragraphsix() {
  return (
    <div>
      <div className="paragraph">
        <h5 align="center" className="p-3">
          Trouvez votre produit idéal d'un simple swipe{" "}
          <img
            src={slide_left_and_right}
            alt=""
            className="slide_left_and_right"
          />{" "}
          et laissez-vous emporter.
        </h5>
      </div>
    </div>
  );
}

export { Paragraphsix };
