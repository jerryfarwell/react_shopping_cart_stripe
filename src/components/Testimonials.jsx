import React from 'react'
import '../assets/stylesheet/Testimonials.css'
import garçon_casque from '../assets/images/garçon_casque.webp'
import { Col, Row } from 'react-bootstrap'
import ButtonHover from './ButtonHover'



function Testimonials() {
  return (
    <div>
        <Row>
           <Col className="col-md-4">
           <img src={garçon_casque} alt="" style={{ maxWidth: '100%' }} />
          </Col>         
  
          <Col className="col-md-8">
            <div style={{textAlign: "justify"}}>
            <p >Découvrez la puissance de Networleed, la marque qui révolutionne votre expérience en ligne ! Que vous ayez besoin d'un ordinateur performant, d'un téléphone portable dernier cri, d'un casque audio immersif ou d'accessoires de qualité, Networleed a tout ce qu'il vous faut.</p>
           <p >Immergez-vous dans un son de qualité supérieure avec nos casques audio. Que vous soyez un mélomane passionné ou un adepte du gaming, nos casques audio Networleed vous offrent une expérience sonore immersive et captivante. Profitez de basses puissantes, de hautes fréquences claires et d'un confort optimal pour des heures d'écoute agréable.</p>
           <p >Plongez dans un monde de performances et de fiabilité avec nos ordinateurs haut de gamme. Conçus avec des processeurs puissants, des cartes graphiques avancées et une mémoire rapide, nos ordinateurs vous offrent des performances exceptionnelles pour toutes vos tâches. Que vous soyez un professionnel créatif, un joueur passionné ou un utilisateur exigeant, nos ordinateurs répondront à tous vos besoins.</p>
           <p>Ne manquez pas l'opportunité de posséder un téléphone portable de pointe. Avec les téléphones Networleed, vous bénéficiez d'un design élégant, d'un écran de haute qualité et d'une connectivité sans faille. Capturez des photos époustouflantes, profitez de fonctionnalités avancées et restez connecté en toute circonstance. Nos téléphones portables sont conçus pour vous offrir une expérience mobile exceptionnelle.</p>
           <p>Ne manquez pas l'occasion de vivre une expérience technologique exceptionnelle avec les produits Networleed. Rejoignez notre communauté d'utilisateurs satisfaits et découvrez pourquoi Networleed est la référence en matière de technologie de pointe. Achetez dès maintenant et profitez de la qualité et des performances exceptionnelles de nos produits.</p>
            </div>
            <div>
            <a href='/Helmet' style={{textDecoration: "none"}}><ButtonHover/></a>
            </div>
         </Col>
       </Row>
    </div>
  )
}

export default Testimonials