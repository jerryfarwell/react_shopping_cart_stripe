import React, { useContext } from "react";
import { Button } from 'react-bootstrap';
import { CartContext } from '../CardContext';
import { GetProductData } from '../productStore';
import '../assets/stylesheet/CartProduct.css'

function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = GetProductData(id);

    return (
        <div className='cartProduct'>
            <h3>{productData.title}</h3>
            <small>Quantité: {quantity} </small>
            <p>{ (quantity * productData.price).toFixed(2) }€</p>
            <p><img src={productData.imageSrc} alt={productData.title} className='image-cart'/></p>
            <Button variant="danger" size="sm" onClick={() => cart.deleteFromCart(id)} style={{ marginRight: '10px' }}>Retirer du panier</Button>
            <Button size="sm" onClick={() => cart.addOneToCart(id)} style={{ marginRight: '10px' }}>+</Button>
            <Button size="sm" onClick={() => cart.removeOneFromCart(id)}>-</Button>
            <hr></hr>
        </div>
    )
}

export default CartProduct;
