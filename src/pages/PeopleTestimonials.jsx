import React from "react";
import { Col, Row } from "react-bootstrap";
import { peopletestimonials } from "../components/PeopleTestimonialsArray";
import "../assets/stylesheet/PeopleTestimonials.css";
import CarouselAllItems from "../components/CarouselAllItems";

function PeopleTestimonials() {
  return (
    <div>
      <div style={{ marginTop: "10%" }}></div>

      <h3 style={{ textAlign: "center" }}>Témoignages Des clients</h3>
      <br />
      <br />
      <Row xs={1} md={3} className="g-4">
        {peopletestimonials.map((testimonial) => (
          <Col key={testimonial.id} align="center">
            <div class="testimonial p-3 bg-dark text-center rounded">
              <img src="https://i.imgur.com/lU2pDQv.png" width="40px" />
              <p>{testimonial.testimony}</p>
              <img
                class="rounded-circle"
                src={testimonial.imageSrc}
                style={{ width: "50px", height: "50px" }}
              />
              <h5>{testimonial.name}</h5>
            </div>
          </Col>
        ))}
      </Row>
      <div style={{ marginTop: "10%" }}></div>

      <CarouselAllItems />

      <div style={{ marginBottom: "50%" }}></div>
    </div>
  );
}
export default PeopleTestimonials;
