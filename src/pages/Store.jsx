import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { ProdutcsArray } from '../productStore'
import ProductCard from '../components/ProductCard'
import CarouselMainPage from '../components/CarouselMainPage'
import Paragraphs, { Paragraphsecond, Paragraphthird } from '../components/Paragraphs'
import '../assets/stylesheet/Store.css'
import jeune_femme_pc from '../assets/images/jeune_femme_pc.jpeg';
import femme_disque_dur from '../assets/images/femme_disque_dur.jpeg';



const Store = () => {

  const filteredProducts = ProdutcsArray.filter(product => product.id !== "fake_xxxxxxxxxxx"); // this will remove a specific product with this id
  // const filteredProducts = ProdutcsArray.slice(5);  this will remove the five first products in productStore     ProdutcsArray.slice(-5); will remove the fith last one
 

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
        <br/><br/>
        <Paragraphthird/>
        <img src={femme_disque_dur} alt="" className='img-womanpc'/>
        <br/>
        <br/>
        <br/>
    </div>
  )
}

export default Store

// this page is going to handle the ProductCart we are using props
// <Row></Row> is going to set the css for react-bootstrap  <Col></Col> is going to put it into colums
