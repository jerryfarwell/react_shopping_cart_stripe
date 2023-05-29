import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { ProdutcsArray } from '../productStore'
import ProductCard from '../components/ProductCard'
import CarouselMainPage from '../components/CarouselMainPage'
import Paragraphs, { Paragraphfive, Paragraphfourth, Paragraphsecond, Paragraphthird } from '../components/Paragraphs'
import '../assets/stylesheet/Store.css'
import jeune_femme_pc from '../assets/images/jeune_femme_pc.jpeg';
import black_jeune_femme_pc from '../assets/images/black_jeune_femme_pc.jpeg';
import femme_disque_dur from '../assets/images/femme_disque_dur.jpeg';
import phone_hand from '../assets/images/phone_hand.png';



const Store = () => {

  //const filteredProducts = ProdutcsArray.filter(product => product.id !== "fake_xxxxxxxxxxx"); // this will remove a specific product with this id
  // const filteredProducts = ProdutcsArray.slice(5);  // this will remove the five first products in productStore     ProdutcsArray.slice(-5); will remove the fOURTH first one
  const filteredProducts = ProdutcsArray.slice(0, 6);  // this will show items from id 1 to id 6  this is actually the easiest when you want to display particular items
  const filteredThreeMostSold = ProdutcsArray.slice(8, 11);

  return (
    <div>
      <CarouselMainPage />
      <Paragraphs />
        <Row xs={1} md={3} className='g-4'>
            {/*{ProdutcsArray.map((product, idx) => (
                    <Col align="center" key={idx}>
                        <ProductCard product={product} className="productcard"/>
            </Col>*/} 
             {filteredProducts.map((product, idx) => (
          <Col align="center" key={idx}>
            <ProductCard product={product} className="productcard" />
          </Col> 

            ))} 

        </Row>
        <br/>
        <Paragraphsecond/>
        <img src={jeune_femme_pc} alt="" className='img-womanpc'/>
        <br/>
        <br/>
        <Paragraphthird/>
        <img src={femme_disque_dur} alt="" className='img-womanpc'/>
        <br/>
        <br/>
        <Paragraphfourth/>
        <Row xs={1} md={3} className='g-4'>
             {filteredThreeMostSold.map((product, idx) => (
          <Col align="center" key={idx}>
            <ProductCard product={product} className="productcard" />
          </Col> 

            ))} 

        </Row>
        <br/>
        <br/>
        <Paragraphfive/>
        <img src={black_jeune_femme_pc} alt="" className='img-womanpc'/>
       <br/><br/>

       <div className='phone_handWords'>
       <h6 >Ne laissez pas passer cette opportunité ! Saisissez votre chance avec les téléphones de Networkleed.</h6>
        <p >Chez Networkleed, nous vous offrons une sélection exceptionnelle de téléphones haut de gamme, conçus pour répondre à tous vos besoins et vous offrir une expérience technologique sans pareille. Que vous recherchiez les dernières innovations, des performances optimales ou un design élégant, nos téléphones sauront vous combler.</p>
        <img src={phone_hand} alt="" className='img-phoneHand'/>
       </div>







    </div>
  )
}

export default Store

// this page is going to handle the ProductCart we are using props
// <Row></Row> is going to set the css for react-bootstrap  <Col></Col> is going to put it into colums
