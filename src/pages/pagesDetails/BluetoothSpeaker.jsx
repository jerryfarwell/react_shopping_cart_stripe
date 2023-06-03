import React from "react";
import { ProdutcsArray } from "../../productStore";
import ProductCard from "../../components/ProductCard";
import { Col, Row } from "react-bootstrap";
import "../../assets/stylesheet/BluetoothSpeaker.css";

function BluetoothSpeaker() {
  const filteredPhones = ProdutcsArray.slice(20, 27);

  return (
    <div>
      <div className="bluetooth_speakerTop">
        <h5 style={{ marginTop: "1%", marginBottom: "1%" }}>
          Plongez dans un monde fascinant grâce à nos enceintes Bluetooth.
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

export default BluetoothSpeaker;
