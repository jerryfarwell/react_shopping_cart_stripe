import { Card, Button, Form, Row, Col, DropdownButton } from 'react-bootstrap';
import { CartContext } from '../CardContext';
import { useContext } from 'react';
import '../assets/stylesheet/ProductCard.css';
import { Link } from 'react-router-dom';


function ProductCard(props) { // props.product is the product we are selling
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    console.log(cart.items);
    return (
        <Card>
            <Card.Body>
            <Link to={`/details/${product.id}`}>
               <img src={product.imageSrc} alt={product.title} className='images-main'/>
               </Link>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price} €</Card.Text>
                { productQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6">quantité: {productQuantity}</Form.Label>
                            <Col sm="6">
                                <Button sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
                                <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
                            </Col>
                        </Form>
                        {/*<Button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className="my-2">Retirer du panier</Button>*/}
                    </>
                    :
                    <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Ajouter au panier</Button>
                }
            </Card.Body>
        </Card>
    )
}

export default ProductCard;

