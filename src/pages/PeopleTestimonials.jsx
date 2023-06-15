import React from "react";
import { Col, Row } from "react-bootstrap";
import { peopletestimonials } from "../components/PeopleTestimonialsArray";
import "../assets/stylesheet/PeopleTestimonials.css";
import CarouselAllItems from "../components/CarouselAllItems";
import SocialmediaIcons from "../components/SocialmediaIcons";

function PeopleTestimonials() {
  return (
    <div>
      <div className="peopletestimonial_mainDiv">
        <div style={{ marginTop: "10%" }} />

        <h2
          style={{ textAlign: "center", fontFamily: "cursive", color: "white" }}
        >
          Témoignages Des clients{" "}
        </h2>

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
        <div style={{ marginTop: "10%" }} />

        <h2
          style={{ textAlign: "center", fontFamily: "cursive", color: "white" }}
        >
          Partager votre expérience{" "}
        </h2>
        <br />
        <p style={{ textAlign: "center", color: "white" }}>
          Votre expérience compte ! Partagez-la avec nous en un seul clic.
          Cliquez sur l'icône "Nous contacter" dans la barre de navigation et
          transmettez votre expérience en indiquant l'article que vous avez
          acheté. Votre témoignage est précieux pour nous, et il peut aider
          d'autres utilisateurs à prendre des décisions éclairées. Ne manquez
          pas cette opportunité de faire entendre votre voix et de contribuer à
          notre communauté !
        </p>
        <div style={{ marginTop: "10%" }} />

        <h2
          style={{ textAlign: "center", fontFamily: "cursive", color: "white" }}
        >
          Vous pouvez également témoigner sur les réseaux sociaux{" "}
        </h2>
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SocialmediaIcons />
        </div>
        <div style={{ marginTop: "10%" }} />

        <h2
          style={{ textAlign: "center", fontFamily: "cursive", color: "white" }}
        >
          Nos produis sont les meilleurs{" "}
        </h2>
        <CarouselAllItems />
      </div>

      <p style={{ textAlign: "center" }}>
        swiper pour voir les articles ou laissez-les défiler automatiquement.
      </p>
    </div>
  );
}
export default PeopleTestimonials;
