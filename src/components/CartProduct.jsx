import React, { useContext} from "react";
import { Button } from 'react-bootstrap';
import  { CartContext } from '../CardContext';
import { GetProductData } from '../productStore';
import '../assets/stylesheet/CartProduct.css'
import trash from '../assets/images/trash.png';

function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = GetProductData(id);


    return (
        <div className='cartProduct'>
            <div className="titleAndPrice"> 
            <small style={{textAlign: "center"}}>{productData.title}</small>
            <p >{ (quantity * productData.price).toFixed(2) } €</p>
            </div>
            {/*<small>Quantité: {quantity} </small>*/}
            {/*<p>{ (quantity * productData.price).toFixed(2) }€</p>*/}
            <h5 >
                <img src={productData.imageSrc} alt={productData.title} className='image-cart'/>  
            </h5>
                <div className="all-btn">
                   <div  >
                    <Button size="sm" onClick={() => cart.removeOneFromCart(id)} >-</Button>
                    <span style={{marginLeft: "10px", marginRight: "10px"}}>{quantity}</span>
                     <Button size="sm" onClick={() => cart.addOneToCart(id)} >+</Button>
                   </div>

                   <div>
                     <img src={trash} alt=""  onClick={() => cart.deleteFromCart(id)} style={{ marginRight: '10px', width: '20px' }} title="retirer du panier"/> 
                    </div>
               </div>

            {/*<Button variant="danger" size="sm" onClick={() => cart.deleteFromCart(id)} style={{ marginRight: '10px' }}>Retirer du panier</Button>*/}
            <hr></hr>
        </div>
    )
}

export default CartProduct;
