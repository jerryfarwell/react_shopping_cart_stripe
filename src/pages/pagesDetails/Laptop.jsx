import React from "react";
import { ProdutcsArray } from "../../productStore";
import ProductCard from "../../components/ProductCard";
import "../../assets/stylesheet/Laptop.css";
import bruno_testimony from "../../assets/images/bruno_testimony.webp";
import young_black_man from "../../assets/images/young_black_man.jpeg";
import { Col, Row } from "react-bootstrap";
import man_standing_pc from "../../assets/images/man_standing_pc.webp";
import ButtonHoverSecond from "../../components/ButtonHover";

function Laptop() {
  const filteredLaptops = ProdutcsArray.slice(7, 13); // this will show from id 7 to id 12

  return (
    <div>
      <div className="laptop-testyAndPic">
        <div className="laptop-topTextTwo">
          <img
            src={bruno_testimony}
            alt=""
            className="img-fluid rounded-pill"
            style={{ width: "10rem", height: "10rem" }}
          />
          <span>Bruno</span>
        </div>
        <br />
        <div className="words_first">
          <p>
            "Lorsque j'ai acheté mon ordinateur Networkeed, j'étais un peu
            sceptique quant à sa qualité et à ses performances. Cependant, dès
            que j'ai commencé à l'utiliser, j'ai été agréablement surpris. Non
            seulement l'ordinateur était extrêmement puissant et réactif, mais
            il a également dépassé mes attentes en termes de durabilité et de
            fiabilité. De plus, la garantie satisfaction offerte par Networkeed
            m'a apporté une tranquillité d'esprit supplémentaire. Savoir que je
            pouvais compter sur le support et l'engagement de l'entreprise pour
            s'assurer de ma satisfaction totale a renforcé ma confiance dans mon
            choix d'achat. Je recommande vivement Networkeed à tous ceux qui
            recherchent des ordinateurs de qualité supérieure et un service
            client exceptionnel."
          </p>
        </div>
      </div>
      <Row xs={1} md={3} className="g-4">
        {filteredLaptops.map((product, idx) => (
          <Col align="center" key={idx}>
            <ProductCard product={product} className="productcard" />
          </Col>
        ))}
      </Row>
      <div style={{ marginTop: "4%" }}></div>

      <div className="man_standingRow">
        <h6>
          Networkeed redéfinit l'excellence en proposant des ordinateurs d'une
          qualité inégalée, au meilleur rapport qualité-prix du marché.
        </h6>
        <p style={{ color: "white" }}>
          Lorsque vous achetez un ordinateur Networkeed, vous bénéficiez de
          notre garantie satisfaction. Nous sommes tellement confiants dans la
          qualité et les performances de nos produits que nous offrons une
          garantie complète de satisfaction. Si vous n'êtes pas entièrement
          satisfait de votre achat, nous nous engageons à résoudre tous les
          problèmes et à vous offrir une expérience d'utilisation optimale.
          Votre satisfaction est notre priorité absolue, car nous croyons
          fermement en la qualité de nos ordinateurs et en la satisfaction de
          nos clients.
        </p>
      </div>
      <img src={young_black_man} alt="" className="young_black_man" />
      <div style={{ marginTop: "4%" }}></div>

      <Row>
        <Col className="col-md-4">
          <img src={man_standing_pc} alt="" style={{ maxWidth: "100%" }} />
        </Col>

        <Col className="col-md-8">
          <div style={{ textAlign: "justify" }}>
            <p>
              Découvrez la puissance de Networleed, la marque qui révolutionne
              votre expérience en ligne ! Que vous ayez besoin d'un ordinateur
              performant, d'un téléphone portable dernier cri, d'un casque audio
              immersif ou d'accessoires de qualité, Networleed a tout ce qu'il
              vous faut.
            </p>
            <p>
              Immergez-vous dans un son de qualité supérieure avec nos casques
              audio. Que vous soyez un mélomane passionné ou un adepte du
              gaming, nos casques audio Networleed vous offrent une expérience
              sonore immersive et captivante. Profitez de basses puissantes, de
              hautes fréquences claires et d'un confort optimal pour des heures
              d'écoute agréable.
            </p>
            <p>
              Plongez dans un monde de performances et de fiabilité avec nos
              ordinateurs haut de gamme. Conçus avec des processeurs puissants,
              des cartes graphiques avancées et une mémoire rapide, nos
              ordinateurs vous offrent des performances exceptionnelles pour
              toutes vos tâches. Que vous soyez un professionnel créatif, un
              joueur passionné ou un utilisateur exigeant, nos ordinateurs
              répondront à tous vos besoins.
            </p>
            <p>
              Ne manquez pas l'opportunité de posséder un téléphone portable de
              pointe. Avec les téléphones Networleed, vous bénéficiez d'un
              design élégant, d'un écran de haute qualité et d'une connectivité
              sans faille. Capturez des photos époustouflantes, profitez de
              fonctionnalités avancées et restez connecté en toute circonstance.
              Nos téléphones portables sont conçus pour vous offrir une
              expérience mobile exceptionnelle.
            </p>
            <p>
              Ne manquez pas l'occasion de vivre une expérience technologique
              exceptionnelle avec les produits Networleed. Rejoignez notre
              communauté d'utilisateurs satisfaits et découvrez pourquoi
              Networleed est la référence en matière de technologie de pointe.
              Achetez dès maintenant et profitez de la qualité et des
              performances exceptionnelles de nos produits.
            </p>
          </div>
          <div>
            <a href="/Helmet" style={{ textDecoration: "none" }}>
              <ButtonHoverSecond />
            </a>
          </div>
        </Col>
      </Row>
      <div style={{ marginTop: "10%" }}></div>
    </div>
  );
}

export default Laptop;
