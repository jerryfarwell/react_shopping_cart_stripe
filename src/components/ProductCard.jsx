import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { CartContext } from '../CardContext';
import { useContext, useState } from 'react';
import '../assets/stylesheet/ProductCard.css';
import { Link } from 'react-router-dom';
import { BsHeartFill, BsHeart } from 'react-icons/bs';


function ProductCard(props) { // props.product is the product we are selling
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    console.log(cart.items);
    
    //--this for the favorite button to be able to add and remove at the same changing colors---
    
    const [isFavorite, setIsFavorite] = useState(false);  

     const toggleFavorite = () => {
      if (isFavorite) {
        cart.removeProductFromFavorites(product.id);
      } else {
        cart.addProductToFavorites(product.id);
      }
      setIsFavorite(!isFavorite);
    }; 

        
        
    //-------------------------------------------------------------------------------------------

    const handleClick = () => {
      window.scrollTo(0, 0); // Scrolls to the top of the page when using Link without it when we get to the new page we stay at the same level
    };

    return (

        <Card>
            <Card.Body>
            <Link to={`/details/${product.id}`} onClick={handleClick}>
                <div className="image-wrapper">
               <img src={product.imageSrc} alt={product.title} className='images-main'/>
               </div>
               </Link>
                
                
               <span
               onClick={toggleFavorite}
                className={`heart-icon ${isFavorite ? 'favorite' : ''} add-to-favorite-button`}
               title={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                >
                {isFavorite ? <BsHeartFill className="heart-fill" /> : <BsHeart className="heart-outline" />}
               </span>





               {/*<Button
                variant={isFavorite ? 'danger' : 'success'}
                onClick={toggleFavorite}
                className="add-to-favorite-button"
              >
                {isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
               </Button>*/}

                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price} €</Card.Text>
                { productQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6">quantité: {productQuantity}</Form.Label>
                            <Col sm="6">
                            <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
                            <Button sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
                            </Col>
                        </Form>
                        {/*<Button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className="my-2">Retirer du panier</Button>*/}
                    </>
                    :
                    <div>
                    <Button variant="success" onClick={() => cart.addOneToCart(product.id)}>Ajouter au panier</Button>
                    </div>
                }
            </Card.Body>
        </Card>
    
    )
}

export default ProductCard;

