import React, { useContext, useState } from "react";
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { CartContext } from '../CardContext';
import { GetProductData } from '../productStore';
import '../assets/stylesheet/ProductCard.css';
import '../assets/stylesheet/FavoriteProduct.css';
import close from '../assets/images/close.png';



function FavoriteProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const productData = GetProductData(id);
  const productQuantity = cart.getProductQuantity(productData.id);
  


  return (
         <div>
            <div className="addAndRemove-fromCard"> 
                <h6>{productData.title}</h6>
                 <p>prix unitaire : {productData.price} €</p>
                 </div>  
                  <div className="img-and-close-btn">
                  <img src={productData.imageSrc} alt={productData.title} className='favorite-main'/>
                 <img src={close} onClick={props.removeFromFavorites} alt="" className="close-icon" title="Retirer des favoris"/>
                 </div>


                   { productQuantity > 0 ?
                       <>      
                       <div className="addAndRemove-fromCard">
                           <p>quantité au panier: {productQuantity > 0? productQuantity : null}</p>
                           <Button sm="6" onClick={() => cart.removeOneFromCart(productData.id)} className="mx-2">-</Button>
                            <Button sm="6" onClick={() => cart.addOneToCart(productData.id)} className="mx-2">+</Button>
                       </div>
                    </>
                    :
                    <div>
                        <br/>
                    <Button variant="success" onClick={() => cart.addOneToCart(productData.id)} className="fav-addToCart">Ajouter au panier</Button>

                    </div>
                }

    <hr></hr>

</div>

  )
}

export default FavoriteProduct;
