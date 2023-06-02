import React from 'react'
import { ProdutcsArray } from '../../productStore'
import ProductCard from '../../components/ProductCard'
import '../../assets/stylesheet/Laptop.css'
import bruno_testimony from '../../assets/images/bruno_testimony.webp'
import young_black_man from '../../assets/images/young_black_man.jpeg'
import { Col, Row } from 'react-bootstrap';
import phone_hand from '../../assets/images/phone_hand.png';


function Laptop() {

    const filteredLaptops = ProdutcsArray.slice(7, 13);   // this will show from id 7 to id 12 

  return (
    <div>
        <div className='laptop-testyAndPic'>
        <div className='laptop-topTextTwo'>
        <img src={bruno_testimony} alt="" className='img-fluid rounded-pill'style={{width: "10rem", height: "10rem"}}/>
         <span >Bruno</span> 
        </div>
        <br/>
         <div className='words_first'>
         <p >"Lorsque j'ai acheté mon ordinateur Networkeed, j'étais un peu sceptique quant à sa qualité et à ses performances. Cependant, dès que j'ai commencé à l'utiliser, j'ai été agréablement surpris. Non seulement l'ordinateur était extrêmement puissant et réactif, mais il a également dépassé mes attentes en termes de durabilité et de fiabilité. De plus, la garantie satisfaction offerte par Networkeed m'a apporté une tranquillité d'esprit supplémentaire. Savoir que je pouvais compter sur le support et l'engagement de l'entreprise pour s'assurer de ma satisfaction totale a renforcé ma confiance dans mon choix d'achat. Je recommande vivement Networkeed à tous ceux qui recherchent des ordinateurs de qualité supérieure et un service client exceptionnel."</p>
         </div>
         </div>
       <Row xs={1} md={3} className='g-4'>
        {
            filteredLaptops.map((product, idx) => (
                <Col align="center" key={idx}>
                   <ProductCard product={product} className="productcard"/>
                </Col>
            ))
        }
         
       </Row>
       <div className='laptop-space'></div>
       <br/><br/>
        <div className='phone_handWords'>
       <h5 >Ne laissez pas passer cette opportunité ! Saisissez votre chance avec les téléphones de Networkleed.</h5>
        <p >Nous vous offrons une sélection exceptionnelle de téléphones haut de gamme, conçus pour répondre à tous vos besoins.</p>
        <a href="/phones" className="button">Nos téléphones</a>
        <br/><br/>
        <img src={phone_hand} alt="" className='img-phoneHand'/>
       </div>
       <br/><br/>


        <div className='man_standingRow' >
        <h6 >Networkeed redéfinit l'excellence en proposant des ordinateurs d'une qualité inégalée, au meilleur rapport qualité-prix du marché.</h6>
        <p style={{color: "white"}}>Lorsque vous achetez un ordinateur Networkeed, vous bénéficiez de notre garantie satisfaction. Nous sommes tellement confiants dans la qualité et les performances de nos produits que nous offrons une garantie complète de satisfaction. Si vous n'êtes pas entièrement satisfait de votre achat, nous nous engageons à résoudre tous les problèmes et à vous offrir une expérience d'utilisation optimale. Votre satisfaction est notre priorité absolue, car nous croyons fermement en la qualité de nos ordinateurs et en la satisfaction de nos clients.</p>
       </div>
       <img src={young_black_man} alt="" className='young_black_man'/>
       <br/><br/>
       <div className='laptop-space'></div>

    </div>
  )
}

export default Laptop