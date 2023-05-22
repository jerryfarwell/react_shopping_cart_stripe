import React from 'react'
import { Col, Row } from 'react-bootstrap'
import '../assets/stylesheet/Footer.css'
import facebook from '../assets/images/facebook.png'
import instagram from '../assets/images/instagram.png'
import twitter from '../assets/images/twitter.png'
import creditcard from '../assets/images/creditcard.png'


function Footer() {
  return (
    <div>
       <div className='footer'>
            <br/>
            <br/>
            <div className='socialmedia-icon'>
            <img src={facebook} alt="" className='logo-footer'/>
            <img src={instagram} alt="" className='logo-footer'/>
            <img src={twitter} alt="" className='logo-footer'/>
            </div>
          <Row className='row-footer'>
            <Col>
              <h6>À propos </h6>
              <h6>Mentions Légales</h6>
              <h6>protection des données personnelles</h6>
              <h6>CGU</h6>
            </Col>
            <Col>
            <h6>Nous contacter</h6>
              <h6>Catalogue de produits </h6>
              <h6>Politique de retour et d'échange</h6>
              <h6>Livraison et expédition</h6>
            </Col>
            <Col>
            <h6>Assistance et service client</h6>
              <h6>FAQ (Foire aux questions)</h6>
              <h6>Promotions et offres spéciales</h6>
              <h6>Ressources</h6>
            </Col>
          </Row>
          <br/>
          <div className='creditcard-div'>
            <br/>
                <h6>Paiement très sécurisé</h6>
                <img src={creditcard} alt="" className='creditcard'/>
          </div>
       </div>
    </div>
  )
}

export default Footer