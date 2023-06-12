import React from "react";
import { Col, Row } from "react-bootstrap";
import customer_service from "../../assets/images/customer_service.png";
import customer_serviceTwo from "../../assets/images/customer_serviceTwo.webp";
import "../../assets/stylesheet/Testimonials.css";

function SupportAndCustomerservice() {
  return (
    <div>
      <h2 style={{ textAlign: "center", fontFamily: "cursive", color: "red" }}>
        Assistance et service client{" "}
      </h2>
      <br />
      <br />
      <div className="customer_service">
        <img src={customer_service} alt="" style={{ maxWidth: "100%" }} />
      </div>
      <br />
      <br />
      <h2 style={{ textAlign: "center", fontFamily: "cursive", color: "blue" }}>
        Votre satisfaction est notre priorité{" "}
      </h2>
      <br />
      <br />
      <Row>
        <Col className="col-md-4">
          <img src={customer_serviceTwo} alt="" style={{ maxWidth: "100%" }} />
        </Col>
        <Col className="col-md-8">
          <p style={{ textAlign: "justify" }}>
            Chez Networkleed, nous croyons fermement en l'importance d'un
            excellent service client et d'une assistance de qualité. Nous
            comprenons que vous puissiez avoir des questions, des préoccupations
            ou besoin d'aide tout au long de votre expérience d'achat, et c'est
            pourquoi notre équipe du service client est là pour vous
            accompagner.
          </p>
          <p style={{ textAlign: "justify" }}>
            Nous nous engageons à vous fournir une assistance rapide et
            efficace. Lorsque vous nous contactez, que ce soit par e-mail, par
            téléphone ou via notre formulaire de contact, notre équipe s'efforce
            de répondre dans les plus brefs délais. Nous comprenons l'importance
            de vos demandes et nous nous engageons à y répondre dans un délai
            maximal de 24 heures.
          </p>
          <p style={{ textAlign: "justify" }}>
            Notre équipe du service client est composée de professionnels
            compétents et dévoués, prêts à résoudre vos problèmes et à répondre
            à vos questions. Nous nous engageons à fournir des réponses claires,
            précises et adaptées à vos besoins, afin de vous offrir une
            expérience de service client exceptionnelle.
          </p>
          <p style={{ textAlign: "justify" }}>
            Que vous ayez besoin d'aide pour le suivi d'une commande, des
            informations supplémentaires sur nos produits ou toute autre
            demande, nous sommes là pour vous. Faites-nous confiance pour vous
            offrir une assistance personnalisée et chaleureuse, et pour vous
            aider à trouver la meilleure solution à vos besoins.
          </p>
          <p style={{ textAlign: "justify" }}>
            Chez Networkleed, nous sommes fiers de notre engagement envers notre
            service client. Votre satisfaction est notre priorité absolue, et
            nous mettons tout en œuvre pour vous offrir une expérience de
            service client positive à chaque interaction. N'hésitez pas à nous
            contacter, nous sommes impatients de vous aider et de vous fournir
            l'assistance dont vous avez besoin.
          </p>
          <p style={{ textAlign: "justify" }}>
            Lorsque vous faites appel à notre service client, vous pouvez être
            assuré que vous serez traité avec respect, courtoisie et
            professionnalisme. Nous comprenons que chaque demande est unique et
            nous prenons le temps d'écouter attentivement vos préoccupations
            afin de vous apporter la meilleure solution possible.
          </p>
          <p style={{ textAlign: "justify" }}>
            Notre équipe est formée pour résoudre les problèmes et fournir des
            réponses complètes à vos questions. Nous nous efforçons de vous
            offrir une expérience sans stress et de vous guider à travers toutes
            les étapes nécessaires pour résoudre votre problème. Votre
            satisfaction est notre priorité et nous mettons tout en œuvre pour
            dépasser vos attentes.
          </p>
        </Col>
      </Row>
      <br />
      <br />
      <p>Contact service client : networkleed@gmail.com</p>
      <div style={{ marginBottom: "10%" }} />
    </div>
  );
}

export default SupportAndCustomerservice;
