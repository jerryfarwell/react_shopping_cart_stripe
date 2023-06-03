import React from "react";
import { ProdutcsArray } from "../../productStore";
import ProductCard from "../../components/ProductCard";
import { Col, Row } from "react-bootstrap";
import "../../assets/stylesheet/AllArticles.css";

function AllArticles() {
  const filteredProducts = ProdutcsArray.filter(
    (product) => product.id !== "fake_xxxxxxxxxxx"
  ); // this will remove a specific product with this id

  return (
    <div>
      <div className="allArticlesTop">
        <h5 style={{ marginTop: "1%", marginBottom: "1%" }}>
          Plongez dans un univers de possibilités infinies avec notre collection
          exclusive de produits de qualité supérieure.
        </h5>
      </div>
      <Row xs={1} md={3} className="g-4">
        {/*{ProdutcsArray.map((product, idx) => (
                    <Col align="center" key={idx}>
                        <ProductCard product={product} className="productcard"/>
            </Col>*/}
        {filteredProducts.map((product, idx) => (
          <Col align="center" key={idx}>
            <ProductCard product={product} className="productcard" />
          </Col>
        ))}
      </Row>
      <div style={{ marginTop: "10%" }}></div>
    </div>
  );
}

export default AllArticles;
