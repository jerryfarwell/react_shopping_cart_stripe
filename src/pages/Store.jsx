import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { ProdutcsArray } from "../productStore";
import ProductCard from "../components/ProductCard";
import CarouselMainPage from "../components/CarouselMainPage";
import Paragraphs, {
  Paragraphfive,
  Paragraphsecond,
  Paragraphthird,
} from "../components/Paragraphs";
import "../assets/stylesheet/Store.css";
import jeune_femme_pc from "../assets/images/jeune_femme_pc.jpeg";
import black_jeune_femme_pc from "../assets/images/black_jeune_femme_pc.jpeg";
import femme_disque_dur from "../assets/images/femme_disque_dur.jpeg";
import sitted_black_manpc from "../assets/images/sitted_black_manpc.png";
import phone_hand from "../assets/images/phone_hand.png";
import CarouselAllItems from "../components/CarouselAllItems";
import Testimonials from "../components/Testimonials";
import { ButtonHoverSecond, ButtonHoverThird } from "../components/ButtonHover";
import CarouselMostBoughtItems from "../components/CarouselMostBoughtItems";

const Store = () => {
  //const filteredProducts = ProdutcsArray.filter(product => product.id !== "fake_xxxxxxxxxxx"); // this will remove a specific product with this id
  // const filteredProducts = ProdutcsArray.slice(5);  // this will remove the five first products in productStore     ProdutcsArray.slice(-5); will remove the fOURTH first one
  //const filteredThreeMostSold = ProdutcsArray.slice(8, 11); // this will show items from id 8 to id 10
  //const filteredProducts = ProdutcsArray.slice(0, 6); // this will show items from id 0 to id 5  this is actually the easiest when you want to display particular items

  const productIdsToFilter = [
    "price_laptops1",
    "price_phones2",
    "price_enceinte_bleutooth2",
    "price_enceinte_bleutooth6",
    "price_casque_audio3",
    "price_disque_dur_extern2",
    "price_sacados_pc2",
    "price_sacoche_pc5",
    "price_sacados_pc4",
    "price_disque_dur_extern7",
    "price_enceinte_bleutooth7",
    "price_phones3",
    "price_laptops2",
    "price_1N89PhFrCY7e7e3NX5XJJz0A",
    "price_1N89RCFrCY7e7e3NoZM80yLG",
    "price_sacados_pc5",
    "price_disque_dur_extern3",
    "price_phones4",
    "price_phones7",
  ];
  const filteredProducts = ProdutcsArray.filter((product) =>
    productIdsToFilter.includes(product.id)
  );

  return (
    <div>
      <CarouselMainPage />
      <Paragraphs />
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
      <br />
      <Paragraphsecond />
      <a href="/laptops">
        <img src={jeune_femme_pc} alt="" className="img-womanpc" />
      </a>
      <br />
      <br />
      <Testimonials />
      <br />
      <br />
      <Paragraphthird />
      <a href="/Helmet">
        <img src={black_jeune_femme_pc} alt="" className="img-womanpc" />
      </a>
      <br />
      <br />
      <br />
      <h5 style={{ textAlign: "center", fontFamily: "cursive" }}>
        Trouvez votre produit idéal et laissez-vous emporter.
      </h5>
      <br />
      <CarouselAllItems />
      <div style={{ textAlign: "center" }}>
        <small>
          swiper pour voir les articles ou laissez-les défiler automatiquement.
        </small>
      </div>

      <br />
      <br />
      <div className="phone_handWords">
        <h5>
          Ne laissez pas passer cette opportunité ! Saisissez votre chance avec
          les téléphones de Networkleed.
        </h5>
        <p>
          Nous vous offrons une sélection exceptionnelle de téléphones haut de
          gamme, conçus pour répondre à tous vos besoins.
        </p>
        <a href="/phones" style={{ textDecoration: "none" }}>
          <ButtonHoverSecond />
        </a>
        <br />
        <br />
        <img src={phone_hand} alt="" className="img-phoneHand" />
      </div>
      <br />
      <br />
      <Paragraphfive />
      <a href="/AllArticles">
        <img src={femme_disque_dur} alt="" className="img-womanpc" />
      </a>
      <br />
      <br />
      <br />
      <h5 style={{ textAlign: "center", fontFamily: "cursive" }}>
        Les meilleures ventes networkleed
      </h5>
      <br />
      <CarouselMostBoughtItems />
      <div style={{ textAlign: "center" }}>
        <small>
          swiper pour voir les articles ou laissez-les défiler automatiquement.
        </small>
      </div>
      <br />
      <br />
      <div className="phone_handWords">
        <h5>
          Transformez votre productivité et libérez votre créativité avec nos
          ordinateurs de pointe, conçus pour inspirer des performances
          extraordinaires.
        </h5>
        <a href="/laptops" style={{ textDecoration: "none" }}>
          <ButtonHoverThird />
        </a>
        <br />
        <br />
        <img src={sitted_black_manpc} alt="" className="img-phoneHand" />
      </div>
      <div style={{ marginTop: "10%" }}></div>
      <h3 style={{ textAlign: "center", fontFamily: "cursive" }}>
        Pourquoi networkleed.com ?
      </h3>
      <br />
      <br />
      <Row xs={1} md={3} className="g-4">
        <Col>
          <h5 style={{ textAlign: "center", fontFamily: "cursive" }}>
            Transactions sécurisées de l'achat{" "}
          </h5>
          <p style={{ textAlign: "justify" }}>
            Chez Networleed, nous accordons une grande importance à la sécurité
            de vos transactions en ligne. Nous avons choisi de collaborer avec
            Stripe, une plateforme de paiement en ligne de confiance. Grâce à
            des mesures de sécurité avancées et à des protocoles de chiffrement
            robustes, vos paiements en ligne sont sécurisés. Vos informations
            financières sont protégées, la sécurité de vos transactions est
            totalement garantie. Faites vos achats en toute confiance, sachant
            que nous mettons en place des mesures de sécurité pour protéger vos
            données
          </p>
        </Col>
        <Col>
          <h5 style={{ textAlign: "center", fontFamily: "cursive" }}>
            Politique de retour sous deux semaines
          </h5>
          <p style={{ textAlign: "justify" }}>
            Nous sommes fiers de notre politique de retour conviviale et sans
            tracas. Si vous n'êtes pas entièrement satisfait de votre achat,
            nous vous offrons la possibilité de retourner les articles dans un
            délai de deux semaines à compter de la date d'achat. Que vous ayez
            changé d'avis, que l'article ne corresponde pas à vos attentes ou
            qu'il présente un défaut, nous nous engageons à vous fournir une
            solution rapide et équitable. Il vous suffit de nous contacter et de
            suivre les instructions de retour. Nous vous rembourserons ou
            remplacerons l'intégralité de l'article
          </p>
        </Col>
        <Col>
          <h5 style={{ textAlign: "center", fontFamily: "cursive" }}>
            {" "}
            Qualité des produits Networleed{" "}
          </h5>
          <p style={{ textAlign: "justify" }}>
            Chez Networleed, nous sommes déterminés à fournir des produits de
            haute qualité qui répondent aux attentes les plus élevées. Nous
            sélectionnons soigneusement chaque produit que nous proposons, en
            nous assurant qu'il est fabriqué avec des matériaux durables et
            qu'il respecte les normes de qualité les plus strictes. Chaque
            article est soumis à des tests rigoureux pour garantir son bon
            fonctionnement et sa durabilité à long terme. Nous nous engageons à
            vous fournir des produits de qualité exceptionnelle pour répondre à
            vos besoins informatiques
          </p>
        </Col>
      </Row>
      <div style={{ marginTop: "10%" }}></div>
    </div>
  );
};

export default Store;

// this page is going to handle the ProductCart we are using props
// <Row></Row> is going to set the css for react-bootstrap  <Col></Col> is going to put it into colums
