import React from 'react'
import { ProdutcsArray } from '../../productStore'
import ProductCard from '../../components/ProductCard'
import { Col, Row } from 'react-bootstrap';
import '../../assets/stylesheet/Laptop.css'
import bruno_testimony from '../../assets/images/bruno_testimony.webp'
import young_black_man from '../../assets/images/young_black_man.jpeg'



function Telephone() {
    const filteredPhones = ProdutcsArray.slice(14, 20);

  return (
    <div>
       <Row xs={1} md={3} className='g-4'>
        {
            filteredPhones.map((product, idx) => (
                <Col align="center" key={idx}>
                   <ProductCard product={product} className="productcard"/>
                </Col>
            ))
        }
         
       </Row>
       <div className='laptop-space'></div>
       <br/>
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

export default Telephone 