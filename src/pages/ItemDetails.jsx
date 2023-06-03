import { useParams } from "react-router-dom";
import { GetProductData } from "../productStore";
import { Row, Col, Button, Carousel } from "react-bootstrap";
import { CartContext } from "../CardContext";
import { useContext } from "react";
import "../assets/stylesheet/ItemDetails.css";
import delivry from "../assets/images/delivry.jpg";
import { ProdutcsArray } from "../productStore";
import ProductCard from "../components/ProductCard";

function ItemDetails(props) {
  const { id } = useParams();
  const product = GetProductData(id);
  const cart = useContext(CartContext); // this line is added so that we can add items into cart from this page

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    cart.addOneToCart(product.id); // this allows us to use the cart context here
  };

  const filteredProducts = ProdutcsArray.filter(
    (product) => product.id !== "fake_xxxxxxxxxxx"
  ); // this will remove a specific product with this id
  // const filteredProducts = ProdutcsArray.slice();  this will remove the five first products in productStore     ProdutcsArray.slice(-5); will remove the fith last one

  return (
    <div className="item-return">
      <Row xs={1} md={2} className="g-4">
        <Col align="center">
          {/*<img src={product.imageSrc} alt={product.title} className='img-item-details' />
          <img src={product.image1Src} alt={product.title} className='img-item-details' />*/}

          <Carousel fade interval={3000} pause="hover" className="my-carousel">
            <Carousel.Item>
              <img
                className="d-block carousel-img"
                src={product.imageSrc}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block carousel-img"
                src={product.image1Src}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block carousel-img"
                src={product.image2Src}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block carousel-img"
                src={product.image3Src}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <h5 className="item-title">{product.title}</h5>
          <br />

          <h5>
            {product.price} €{" "}
            <img src={delivry} alt="" className="img-delivry" />
            <small>Livraison express</small>
          </h5>
          <Button
            variant="success"
            onClick={handleAddToCart}
            className="btn-addtocart-itemdetails"
          >
            Ajouter au panier
          </Button>
        </Col>

        <Col>
          <h5>Description</h5>
          <p>{product.description}</p>
          <hr />
          <h5>Garantie de satisfaction</h5>
          <p>
            Si vous n'êtes pas entièrement satisfait de votre achat, vous avez
            jusqu'à deux semaines après la réception pour demander un
            remboursement.
          </p>
          <hr />
          <h5>Délais de Livraison</h5>
          <ul>
            <li>{product.delivryTime}</li>
          </ul>
          <hr />
          <h5>État actuel de l'article</h5>
          <ul>
            <li>Article neuf avec emballage d'origine.</li>
            <li>Tous nos articles font l'objet d'un controle de qualité.</li>
          </ul>
          <hr />
          <h5 className="item-guarantee">garantie : 1 an</h5>
          <hr />
          <br />
          <br />
        </Col>
      </Row>
      <br />

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
      <br />
      <br />
    </div>
  );
}

export default ItemDetails;
