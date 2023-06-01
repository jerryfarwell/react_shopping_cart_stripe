import React from 'react'
import { ProdutcsArray } from '../../productStore'
import ProductCard from '../../components/ProductCard'
import { Col, Row } from 'react-bootstrap';


function BluetoothSpeaker() {

    const filteredPhones = ProdutcsArray.slice(21, 27);

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

export default BluetoothSpeaker