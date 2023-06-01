import React from 'react'
import { ProdutcsArray } from '../../productStore'
import ProductCard from '../../components/ProductCard'
import { Col, Row } from 'react-bootstrap';


function AllArticles() {
     
    const filteredProducts = ProdutcsArray.filter(product => product.id !== "fake_xxxxxxxxxxx" ); // this will remove a specific product with this id


  return (
    <div>

        
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
        <br/>
        <br/>



    </div>
  )
}

export default AllArticles