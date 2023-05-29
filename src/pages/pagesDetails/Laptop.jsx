import React from 'react'
import { ProdutcsArray } from '../../productStore'
import ProductCard from '../../components/ProductCard'
import '../../assets/stylesheet/Laptop.css'
import bruno_testimony from '../../assets/images/bruno_testimony.webp'
import man_standing from '../../assets/images/man_standing.jpeg'

import { Col, Row } from 'react-bootstrap';

function Laptop() {

    const filteredLaptops = ProdutcsArray.slice(8, 13);

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
       <br/>
        
        <div className='man_standingRow' >
       <Row xs={1} md={2} className='g-4 ' >

        <Col>
        <img src={man_standing} alt="" />
        </Col>
        <Col>
        <h6 >Networkeed redéfinit l'excellence en proposant des ordinateurs d'une qualité inégalée, au meilleur rapport qualité-prix du marché.</h6>
        <p style={{color: "white"}}>Lorsque vous achetez un ordinateur Networkeed, vous bénéficiez de notre garantie satisfaction. Nous sommes tellement confiants dans la qualité et les performances de nos produits que nous offrons une garantie complète de satisfaction. Si vous n'êtes pas entièrement satisfait de votre achat, nous nous engageons à résoudre tous les problèmes et à vous offrir une expérience d'utilisation optimale. Votre satisfaction est notre priorité absolue, car nous croyons fermement en la qualité de nos ordinateurs et en la satisfaction de nos clients.</p>
        <h6>Découvrez l'innovation sans limite avec les produits révolutionnaires de Networkeed, qui redéfinissent l'expérience informatique avec leur design avant-gardiste et leurs fonctionnalités de pointe.</h6>
        <p style={{color: "white"}}>Plongez dans un monde d'innovation sans limite en explorant la gamme de produits révolutionnaires proposés par Networkeed. Conçus pour repousser les frontières de l'expérience informatique, ces produits révolutionnaires transforment la façon dont nous interagissons avec la technologie. Dotés d'un design avant-gardiste qui marie élégance et fonctionnalité, ils captivent les regards et s'intègrent harmonieusement à n'importe quel environnement. Mais ce qui distingue réellement ces produits, ce sont leurs fonctionnalités de pointe. Grâce à une combinaison d'innovations matérielles et logicielles, ils offrent des performances exceptionnelles, une réactivité inégalée et une puissance de traitement fulgurante. Que ce soit pour le travail, le divertissement ou la créativité, les produits Networkeed repoussent les limites de ce qui est possible, vous permettant ainsi de vivre une expérience informatique sans précédent.</p>
        <p style={{color: "white"}}>Networkeed révolutionne l'expérience informatique avec des produits innovants au design avant-gardiste et aux fonctionnalités de pointe. Redéfinissez vos attentes et vivez une expérience informatique sans précédent.</p>
        </Col>
        <br/>
       </Row>
       </div>
       <br/><br/>
       <div className='laptop-space'></div>

    </div>
  )
}

export default Laptop