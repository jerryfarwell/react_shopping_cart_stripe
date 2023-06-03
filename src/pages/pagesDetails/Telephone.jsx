import React from "react";
import { ProdutcsArray } from "../../productStore";
import ProductCard from "../../components/ProductCard";
import { Col, Row } from "react-bootstrap";
import "../../assets/stylesheet/Laptop.css";
import phone from "../../assets/images/phone.webp";
import CarouselAllItems from "../../components/CarouselAllItems";

function Telephone() {
  const filteredPhones = ProdutcsArray.slice(13, 20); // this will show form 13 to 19

  return (
    <div>
      <div style={{ marginTop: "6%" }}></div>
      <div className="words_top_phone">
        <h5 style={{ marginTop: "1%", marginBottom: "1%" }}>
          Des téléphones haut de gamme, conçus pour répondre à tous vos besoins.
        </h5>
      </div>
      <Row xs={1} md={3} className="g-4">
        {filteredPhones.map((product, idx) => (
          <Col align="center" key={idx}>
            <ProductCard product={product} className="productcard" />
          </Col>
        ))}
      </Row>
      <div className="laptop-space"></div>
      <br />
      <div className="man_standingRow">
        <h6 style={{ color: "white" }}>
          Networkeed redéfinit l'excellence en proposant des ordinateurs d'une
          qualité inégalée, au meilleur rapport qualité-prix du marché.
        </h6>
        <p style={{ color: "white" }}>
          Les téléphones Networkleed se distinguent par leur excellente qualité
          et leur prix abordable. Conçus avec soin pour répondre aux exigences
          modernes, ces appareils offrent des performances exceptionnelles sans
          compromettre votre budget. Que vous souhaitiez un écran clair, une
          batterie durable ou un appareil photo haute résolution, Networkleed a
          tout prévu. Leur engagement à proposer des tarifs compétitifs fait de
          ces téléphones une option attrayante pour ceux qui recherchent une
          expérience haut de gamme sans se ruiner.
        </p>
      </div>
      <img src={phone} alt="" className="young_black_man" />
      <div style={{ marginTop: "10%" }}></div>
      <div className="words_top_phone">
        <h5 style={{ marginTop: "1%", marginBottom: "1%" }}>
          Ces produits qui pourraient vous plaire
        </h5>
      </div>
      <CarouselAllItems />
      <div style={{ marginTop: "10%" }}></div>
    </div>
  );
}

export default Telephone;
