import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col } from "react-bootstrap";
import { ProdutcsArray } from "../productStore";
import ProductCard from "./ProductCard";

function CarouselMostBoughtItems() {
  const settings = {
    //dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const productIdsToFilter = [
    "price_1N89RCFrCY7e7e3NoZM80yLG",
    "price_laptops1",
    "price_enceinte_bleutooth2",
    "price_sacados_pc5",
    "price_phones1",
    "price_sacados_pc4",
    "price_sacados_pc3",
    "price_phones3",
  ];
  const filteredProducts = ProdutcsArray.filter((product) =>
    productIdsToFilter.includes(product.id)
  );

  return (
    <div>
      <Slider {...settings}>
        {filteredProducts.map((product, idx) => (
          <div key={idx}>
            <Col align="center">
              <ProductCard product={product} className="productcard" />
            </Col>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselMostBoughtItems;
