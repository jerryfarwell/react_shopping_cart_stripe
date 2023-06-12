import React from "react";
import { Col, Row } from "react-bootstrap";
import delivery_man_footer from "../../assets/images/delivery_man_footer.webp";
import chronopost_logo from "../../assets/images/chronopost_logo.png";
import "../../assets/stylesheet/Testimonials.css";

function DeliveryAndShipping() {
  return (
    <div>
      <h2 style={{ textAlign: "center", fontFamily: "cursive", color: "red" }}>
        Livraison et expédition{" "}
      </h2>
      <br />
      <br />
      <div className="chronopost_logo">
        <img src={chronopost_logo} alt="" style={{ maxWidth: "20%" }} />
      </div>
      <br />
      <br />
      <Row>
        <Col className="col-md-4">
          <img src={delivery_man_footer} alt="" style={{ maxWidth: "100%" }} />
        </Col>
        <Col className="col-md-8">
          <p style={{ textAlign: "justify" }}>
            Chez Networkleed, nous attachons une grande importance à la
            satisfaction de nos clients, et cela inclut également la qualité et
            la rapidité de la livraison de nos produits. C'est pourquoi nous
            avons choisi de travailler en partenariat avec Chronopost, un leader
            reconnu dans le domaine de la livraison express.
          </p>
          <p style={{ textAlign: "justify" }}>
            Chronopost se distingue par son engagement à fournir des services de
            livraison rapides et fiables. Leur réseau logistique étendu et leur
            expertise dans le domaine de la livraison express nous permettent
            d'offrir à nos clients une expérience de livraison exceptionnelle.
          </p>
          <p style={{ textAlign: "justify" }}>
            Lorsque vous choisissez la livraison avec Chronopost, vous
            bénéficiez de délais de livraison rapides, vous permettant de
            recevoir votre commande dans les meilleurs délais. Que ce soit pour
            un besoin urgent ou simplement pour profiter de votre achat plus
            rapidement, Chronopost s'engage à respecter les délais convenus et à
            assurer une livraison efficace.
          </p>
          <p style={{ textAlign: "justify" }}>
            En travaillant avec Chronopost, nous visons à offrir à nos clients
            la meilleure expérience de livraison possible. Leur engagement
            envers la rapidité, la fiabilité et la qualité du service correspond
            parfaitement à nos valeurs, et nous sommes convaincus que cela
            contribue à renforcer la satisfaction de nos clients.
          </p>
          <p style={{ textAlign: "justify" }}>
            De plus, la collaboration avec Chronopost nous permet de proposer
            une gamme de services complète pour répondre aux besoins variés de
            nos clients. En plus de la livraison rapide, Chronopost offre
            également des options de suivi en temps réel, ce qui permet à nos
            clients de suivre l'acheminement de leur colis de manière
            transparente. Cette transparence renforce la confiance de nos
            clients et les rassure quant à la sécurité et à la fiabilité de leur
            livraison.
          </p>
          <p style={{ textAlign: "justify" }}>
            Chez Networkleed, nous mettons tout en œuvre pour que votre
            expérience de livraison soit fluide, efficace et répondant à vos
            attentes. La collaboration avec Chronopost est un élément clé de
            notre engagement envers la satisfaction de nos clients, et nous
            continuerons à travailler avec des partenaires fiables pour vous
            offrir le meilleur service possible.
          </p>
          <p style={{ textAlign: "justify" }}>
            Votre satisfaction est notre priorité absolue, et nous nous
            efforçons de vous offrir un service de livraison fiable et efficace.
            Nous sommes là pour répondre à vos questions et préoccupations, et
            nous ferons tout notre possible pour garantir que votre expérience
            de commande sur Networkleed soit agréable et sans tracas.
          </p>
        </Col>
      </Row>

      <div style={{ marginBottom: "10%" }} />
    </div>
  );
}

export default DeliveryAndShipping;
