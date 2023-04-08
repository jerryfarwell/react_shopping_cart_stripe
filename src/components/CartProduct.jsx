import Button from 'react-bootstrap/Button';
import { CartContext } from '../CardContext';
import { useContext } from "react";
import { GetProductData } from '../productStore';

function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = GetProductData(id);

    return (
        <>
            <h3>{productData.title}</h3>
            <p>{quantity} total</p>
            <p>{ (quantity * productData.price).toFixed(2) }€</p>
            <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove from cart</Button>
            <hr></hr>
        </>
    )
}

export default CartProduct;