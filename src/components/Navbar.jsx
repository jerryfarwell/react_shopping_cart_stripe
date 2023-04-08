import {Button, Container, Navbar, Modal} from 'react-bootstrap';   // by importing this we simply put for example <Button></Button> we have to use the capital letter for react-bootstrap
import { useState, useContext } from 'react';
import { CartContext } from '../CardContext';
import CartProduct from './CartProduct';

function NavbarComponent() {
    const cart = useContext(CartContext);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const checkout = async () => {
        await fetch('http://localhost:3000/checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: cart.items})
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if(response.url) {
                window.location.assign(response.url); // Forwarding user to Stripe
            }
        });
    }

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return (
        <>
            <Navbar expand="sm">
                <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Button onClick={handleShow}>Cart ({productsCount} Items)</Button>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ?
                        <>
                            <p>Items in your cart:</p>
                            {cart.items.map( (currentProduct, idx) => (
                                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                            ))}

                            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

                            <Button variant="success" onClick={checkout}>
                                Purchase items!
                            </Button>
                        </>
                    :
                        <h5>There are no items in your cart!</h5>
                    }
                </Modal.Body>
            </Modal>
        </>
    )
}

export default NavbarComponent;





// let create a function with rfce into return we set the navbar with <Navbar></Navbar>
// <Navbar.Brand></Navbar.Brand> is where we usualy put the name the site or Home, notice that everything is capital that is react-bootstrap
// <Navbar.Togle></Navbar.Togle> is the one that make the navbar responsive it allows it to collapse, inside it we put the element that we want to be into the collapse we use <Navbar.Collapse></Navbar.Collapse>
// <Modal></Modal> is the screen that appears withing the same page by pressing or touching the button it is often set out of the navbar ,  <Modal.Header></Modal.Header> is what is the title of that small screen and <Modal.Body></Modal.Body> is the content within the screen, by puting CloseButton we can close the modle 
// we need event onClick  that will handle showing the modal we have to define the function in the event as usual, we have event onHide that will handle the closeButton we must also define the function on the event. 
// to define these function that hide and show modal let simply import useState as we are into a function, const [show, setShow] = useState(false); we set show to false meaning that if we don't press it shouldn't show the modal content, handleClose is also false and handleShow is true
// the rest will be explain in other files the checkout is at the end only when the cart is ready and we want to link it to stripe with our checkout controller in rails API, we will then make a fetch and it is linked on the event onClick on the button  Purchase items!

