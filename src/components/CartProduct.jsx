import Button from 'react-bootstrap/Button';
import { CartContext } from '../CardContext';
import { useContext } from "react";
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
            <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Retirer du panier</Button>
         <hr></hr>
        </div>
    )
}

export default CartProduct;
