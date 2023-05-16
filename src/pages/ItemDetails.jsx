import { useParams } from 'react-router-dom';
import { GetProductData } from '../productStore';
import { Row, Col, Button, Carousel  } from 'react-bootstrap';
import { CartContext } from '../CardContext';
import { useContext } from 'react';
import '../assets/stylesheet/ItemDetails.css';
import delivry from '../assets/images/delivry.jpg';

function ItemDetails(props) {
  const { id } = useParams();
  const product = GetProductData(id);
  const cart = useContext(CartContext); // this line is added so that we can add items into cart from this page 

  if (!product) {
    return <div>Product not found</div>; 
  }

  const handleAddToCart = () => {
    cart.addOneToCart(product.id);    // this allows us to use the cart context here 
  };



  return (
    <div className='item-return'>
      <Row xs={1} md={2} className='g-4'>
        <Col align='center'>
          {/*<img src={product.imageSrc} alt={product.title} className='img-item-details' />
          <img src={product.image1Src} alt={product.title} className='img-item-details' />*/}


          <Carousel fade interval={3000} pause="hover">
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
         <p>
      
         </p>
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





        </Col>

        <Col>
          <h5 className='item-title'>{product.title}</h5>
          <hr />
          <h4>
            {product.price} €{' '}
            <img src={delivry} alt='' className='img-delivry' /> Livraison express
          </h4>
          <hr />
          <Button onClick={handleAddToCart}>Ajouter au panier</Button>
          <hr />
          <h5>Description</h5>
          <h6>{product.description}</h6>
          <hr />
          <h5>Garantie de satisfaction</h5>
          <h6>Si vous n'êtes pas entièrement satisfait de votre achat, vous avez jusqu'à deux semaines après la réception pour demander un remboursement.</h6>
          <hr />
           <h5>Délais de Livraison</h5>
           <ul>
            <li>France (métropolitaine) 2 à 3 jours maximum.</li>
            <li>Livraison Express 24h seulement.</li>
           </ul>
          <hr />
             <h5>État actuel de l'article</h5>
              <ul>
                <li>Article neuf avec emballage d'origine.</li>
                <li>Tous nos articles font l'objet d'un controle de qualité.</li>
              </ul>
          <hr />
          <h5 className='item-guarantee'>garantie : 1 an</h5>
          <hr />
        </Col>
      </Row>
    </div>
  );
}

export default ItemDetails;
