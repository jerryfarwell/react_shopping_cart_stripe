import React, { useEffect, useState } from "react";
import "../assets/stylesheet/ConfirmationSuccessPage.css";
import fille_pc from "../assets/images/fille_pc.jpeg";
import homme_casque from "../assets/images/homme_casque.webp";
import disque_dur from "../assets/images/disque_dur.webp";
import congrat from "../assets/images/congrat.gif";
import { Button, Modal } from "react-bootstrap";
import "../assets/stylesheet/Navbar.css";
import LoginForm from "../components/authentification/sessions/New";
import { Alert } from "bootstrap";

function ConfirmationSuccessPage() {
  // here creating useSate to be able to show and close modal this one is for LoginForm
  const [showSecond, setShowSecond] = useState(false);
  const handleCloseSecond = () => setShowSecond(false);
  const handleShowSecond = () => setShowSecond(true);

  return (
    <div className="confirm-main">
      <div className="confirm-return">
        <div className="confirm-msg">
          <h1 className="congrat-word">Félicitations! </h1>
          <h5 className="congrat-firstS">
            Vous avez confirmé avec succès votre adresse mail .
          </h5>
          <br />
          <br />
          <Button variant="light" onClick={handleShowSecond}>
            Se connecter
          </Button>
          <br />
          <img src={congrat} alt="" className="img-congrat" />
          <br />
          <br />
          <h6 className="congrat-firstS">
            Nous sommes ravis de vous compter parmi nos utilisateurs.{" "}
          </h6>
        </div>
      </div>

      <Modal
        show={showSecond}
        onHide={handleCloseSecond}
        className="modal-for-login"
      >
        <Modal.Header closeButton className="login-modal">
          <Modal.Title className="modal-logint">mon compte</Modal.Title>
        </Modal.Header>
        <Modal.Body className="loginF">
          <LoginForm />
        </Modal.Body>
      </Modal>

      <br />
      <br />

      <img src={fille_pc} alt="" className="img-womanpc" />
      <br />
      <br />

      <div className="secondconfirm-return">
        <div className="confirm-msg">
          <h6>
            {" "}
            Networkleed offre des prix très compétitifs, ce qui en fait une
            destination de choix pour les acheteurs en ligne qui cherchent à
            économiser de l'argent. Le site propose également une livraison
            rapide et fiable dans toute la France, avec des options de livraison
            gratuites pour les commandes supérieures à un certain montant.
          </h6>
        </div>
      </div>
      <br />
      <br />

      <img src={homme_casque} alt="" className="img-womanpc" />
      <br />
      <br />

      <div className="secondconfirm-return">
        <div className="confirm-msg">
          <h6>
            {" "}
            Les ordinateurs de Networkleed sont conçus pour offrir une
            performance de pointe. Leurs processeurs de dernière génération,
            leurs cartes graphiques puissantes et leur mémoire vive importante
            garantissent une vitesse de traitement rapide et une expérience
            utilisateur fluide. De plus, les ordinateurs de Networkleed sont
            équipés de composants de qualité supérieure, ce qui garantit une
            longue durée de vie et une fiabilité exceptionnelle.
          </h6>
        </div>
      </div>
      <br />
      <br />

      <img src={disque_dur} alt="" className="img-womanpc" />
      <br />
      <br />

      <div className="secondconfirm-return">
        <div className="confirm-msg">
          <h6>
            Les produits de Networkleed sont synonymes de qualité, de fiabilité
            et de performance. Si vous êtes à la recherche d'équipements
            informatiques de qualité supérieure, les produits de cette
            entreprise sont certainement un excellent choix.
          </h6>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default ConfirmationSuccessPage;
