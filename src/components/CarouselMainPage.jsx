import React from 'react'
import { Carousel } from 'react-bootstrap'
import '../assets/stylesheet/CarouselMainPage.css'
import casque from '../assets/images/casque.jpg'
import disquedur from '../assets/images/disquedur.jpg'
import imprimante from '../assets/images/imprimante.jpg'



function CarouselMainPage() {
  return (
    <div>
        <Carousel fade interval={3000} pause="hover">
         <Carousel.Item>
           <img
          className="d-block carousel-img"
          src={imprimante}
               alt="First slide"
        />
       <Carousel.Caption>
            <h3></h3>
              <p></p>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
   <img
          className="d-block carousel-img"
          src={casque}
    alt="Second slide"
  />

  <Carousel.Caption>
    <h3></h3>
    <p></p>
   </Carousel.Caption>
 </Carousel.Item>
 <Carousel.Item>
  <img
          className="d-block carousel-img"
          src={disquedur}
          alt="Third slide"
  />

  <Carousel.Caption>
    <h3></h3>
    <p>
      
    </p>
  </Carousel.Caption>
 </Carousel.Item>
 <Carousel.Item>
   <img
          className="d-block carousel-img"
          src={casque}
    alt="Second slide"
  />

  <Carousel.Caption>
    <h3></h3>
    <p></p>
   </Carousel.Caption>
 </Carousel.Item>

 </Carousel> 

    </div>
  )
}

export default CarouselMainPage
