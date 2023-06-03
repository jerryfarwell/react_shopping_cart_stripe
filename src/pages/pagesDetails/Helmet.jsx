import React from "react";
import { ProdutcsArray } from "../../productStore";
import ProductCard from "../../components/ProductCard";
import { Col, Row } from "react-bootstrap";
import "../../assets/stylesheet/Helmet.css";

function Helmet() {
  const filteredPhones = ProdutcsArray.slice(27, 34);

  return (
    <div>
      <div className="helmetTop">
        <h5 style={{ marginTop: "1%", marginBottom: "1%" }}>
          Explorez un monde captivant grâce à nos casques audio sans fil.
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

export default Helmet;
