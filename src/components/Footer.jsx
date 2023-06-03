import React from "react";
import { Col, Row } from "react-bootstrap";
import "../assets/stylesheet/Footer.css";
import logo from "../assets/images/logo.png";
import delivery_after_footer from "../assets/images/delivery_after_footer.png";
import creditcard from "../assets/images/creditcard.png";
import SocialmediaIcons from "./SocialmediaIcons";

function Footer() {
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
            <h6>À propos </h6>
            <h6>Mentions Légales</h6>
            <h6>protection des données personnelles</h6>
            <h6>Paiement 100% sécurisé</h6>
          </Col>
          <Col>
            <h6>Nous contacter</h6>
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
    </div>
  );
}

export default Footer;
