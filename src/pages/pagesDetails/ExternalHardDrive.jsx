import React from 'react'
import { ProdutcsArray } from '../../productStore'
import ProductCard from '../../components/ProductCard'
import { Col, Row } from 'react-bootstrap';


function ExternalHardDrive() {

    const filteredPhones = ProdutcsArray.slice(34, 41);  // this will show from id 34 to id 40

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
        

    </div>
  )
}

export default ExternalHardDrive