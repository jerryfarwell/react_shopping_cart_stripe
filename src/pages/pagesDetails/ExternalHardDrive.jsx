import React from "react";
import { ProdutcsArray } from "../../productStore";
import ProductCard from "../../components/ProductCard";
import { Col, Row } from "react-bootstrap";
import "../../assets/stylesheet/ExternalHardDrive.css";

function ExternalHardDrive() {
  const filteredPhones = ProdutcsArray.slice(34, 41); // this will show from id 34 to id 40

  return (
    <div>
      <div className="externalDrive_Top">
        <h5 style={{ marginTop: "1%", marginBottom: "1%" }}>
          Sauvegardez vos précieuses données en toute sécurité avec nos disques
          durs externes fiables et performants.
        </h5>
      </div>
      <Row xs={1} md={3} className="g-4">
        {filteredPhones.map((product, idx) => (
          <Col align="center" key={idx}>
            <ProductCard product={product} className="productcard" />
          </Col>
        ))}
      </Row>
      <div style={{ marginTop: "10%" }}></div>
    </div>
  );
}

export default ExternalHardDrive;
