import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { ProdutcsArray } from '../productStore'
import ProductCard from '../components/ProductCard'



const Store = () => {
  return (
    <div>
        <h1 align="center" className='p-3'>Welcome to the store !</h1>

        <Row xs={1} md={3} className='g-4'>
            {ProdutcsArray.map((product, idx) => (
                    <Col align="center" key={idx}>
                        <ProductCard product={product} />
                    </Col>        
            ))}

        </Row>
    </div>
  )
}

export default Store