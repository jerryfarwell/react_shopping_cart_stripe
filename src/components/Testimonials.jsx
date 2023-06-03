import React from 'react'
import '../assets/stylesheet/Testimonials.css'
import testimonial_first from '../assets/images/testimonial_first.webp'
import { Col, Row } from 'react-bootstrap'



function Testimonials() {
  return (
    <div>
        <Row>
  <Col className="col-md-4">
    <img src={testimonial_first} alt="" style={{ maxWidth: '100%' }} />
  </Col>         
  
  <Col className="col-md-8">
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat sit labore, odit id, nostrum animi ducimus libero asperiores, atque quasi illum eos omnis repudiandae vero voluptatum ipsa est pariatur.</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat sit labore, odit id, nostrum animi ducimus libero asperiores, atque quasi illum eos omnis repudiandae vero voluptatum ipsa est pariatur.</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat sit labore, odit id, nostrum animi ducimus libero asperiores, atque quasi illum eos omnis repudiandae vero voluptatum ipsa est pariatur.</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat sit labore, odit id, nostrum animi ducimus libero asperiores, atque quasi illum eos omnis repudiandae vero voluptatum ipsa est pariatur.</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat sit labore, odit id, nostrum animi ducimus libero asperiores, atque quasi illum eos omnis repudiandae vero voluptatum ipsa est pariatur.</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat sit labore, odit id, nostrum animi ducimus libero asperiores, atque quasi illum eos omnis repudiandae vero voluptatum ipsa est pariatur.</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat sit labore, odit id, nostrum animi ducimus libero asperiores, atque quasi illum eos omnis repudiandae vero voluptatum ipsa est pariatur.</p>
         
         </Col>

       </Row>
       
       <br/><br/><br/><br/><br/>
    </div>
  )
}

export default Testimonials