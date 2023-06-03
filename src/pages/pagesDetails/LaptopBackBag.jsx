import React from "react";
import { ProdutcsArray } from "../../productStore";
import ProductCard from "../../components/ProductCard";
import { Col, Row } from "react-bootstrap";
import "../../assets/stylesheet/ExternalHardDrive.css";

function LaptopBackBag() {
  const filteredPhones = ProdutcsArray.slice(46, 52);

  return (
    <div>
      <div className="externalDrive_Top">
        <h5 style={{ marginTop: "1%", marginBottom: "1%" }}>
          Transportez votre ordinateur avec style et praticité grâce à notre
          sélection élégante de sacs pour PC, alliant fonctionnalité et design
          raffiné.
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

export default LaptopBackBag;
