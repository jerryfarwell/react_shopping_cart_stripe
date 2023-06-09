import React, { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import "../assets/stylesheet/Footer.css";
import logo from "../assets/images/logo.png";
import delivery_after_footer from "../assets/images/delivery_after_footer.png";
import creditcard from "../assets/images/creditcard.png";
import SocialmediaIcons from "./SocialmediaIcons";
import ContactForm from "./ContactForm";

function Footer() {
  // here creating useSate to be able to show and close modal this one is for contact us
  const [showSecond, setShowSecond] = useState(false);
  const handleCloseSecond = () => setShowSecond(false);
  const handleShowSecond = () => setShowSecond(true);

  return (
    <div>
      <div>
        <SocialmediaIcons />
      </div>
      <div className="footer">
        <br />
        <br />
        <Row className="row-footer">
          <Col>
            <h6>
              <a
                href="/AboutUs"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                À propos{" "}
              </a>
            </h6>
            <h6>
              <a
                href="/LegalNotice"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Mentions Légales
              </a>
            </h6>
            <h6>
              <a
                href="/PersonalUserData"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                protection des données personnelles
              </a>
            </h6>
            <h6>
              <a
                href="/SecuredPayment"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Paiement 100% sécurisé
              </a>
            </h6>
          </Col>
          <Col>
            <h6 onClick={handleShowSecond} title="cliker pour nous contacter">
              Nous contacter
            </h6>
            <h6>Catalogue de produits </h6>
            <h6>Politique de retour et d'échange</h6>
            <h6>Livraison et expédition</h6>
          </Col>
          <Col>
            <h6>Assistance et service client</h6>
            <h6>FAQ (Foire aux questions)</h6>
            <h6>Promotions et offres spéciales</h6>
            <h6>Ressources</h6>
          </Col>
        </Row>
        <br />
        <div className="after-footer">
          <div>
            <br />
            <h6>livraison rapide</h6>
            <img src={delivery_after_footer} alt="" className="creditcard" />
          </div>
          <div>
            <br />
            <h6>Votre satisfaction est notre priorité</h6>
            <img src={logo} alt="" className="creditcard" />
          </div>
          <div>
            <br />
            <h6>Transactions Sécurisées</h6>
            <img src={creditcard} alt="" className="creditcard" />
          </div>
        </div>
      </div>

      <Modal show={showSecond} onHide={handleCloseSecond}>
        <Modal.Header closeButton className="login-modal">
          <Modal.Title className="modal-logint">Nous contacter </Modal.Title>
        </Modal.Header>
        <Modal.Body className="contactF">
          <ContactForm />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Footer;
