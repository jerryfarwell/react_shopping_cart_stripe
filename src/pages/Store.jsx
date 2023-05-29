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
        <div className='man_standingRow' >
       <Row xs={1} md={2} className='g-4 ' >
        <Col>
        <img src={black_jeune_femme_pc} alt="" />
        </Col>
        <Col>
        <h6 >Networkeed redéfinit l'excellence en proposant des ordinateurs d'une qualité inégalée, au meilleur rapport qualité-prix du marché.</h6>
        <p style={{color: "white"}}>Lorsque vous achetez un ordinateur Networkeed, vous bénéficiez de notre garantie satisfaction. Nous sommes tellement confiants dans la qualité et les performances de nos produits que nous offrons une garantie complète de satisfaction. Si vous n'êtes pas entièrement satisfait de votre achat, nous nous engageons à résoudre tous les problèmes et à vous offrir une expérience d'utilisation optimale. Votre satisfaction est notre priorité absolue, car nous croyons fermement en la qualité de nos ordinateurs et en la satisfaction de nos clients.</p>
        <h6>Découvrez l'innovation sans limite avec les produits révolutionnaires de Networkeed, qui redéfinissent l'expérience informatique avec leur design avant-gardiste et leurs fonctionnalités de pointe.</h6>
        <p style={{color: "white"}}>Plongez dans un monde d'innovation sans limite en explorant la gamme de produits révolutionnaires proposés par Networkeed. Conçus pour repousser les frontières de l'expérience informatique, ces produits révolutionnaires transforment la façon dont nous interagissons avec la technologie. Dotés d'un design avant-gardiste qui marie élégance et fonctionnalité, ils captivent les regards et s'intègrent harmonieusement à n'importe quel environnement. Mais ce qui distingue réellement ces produits, ce sont leurs fonctionnalités de pointe. Grâce à une combinaison d'innovations matérielles et logicielles, ils offrent des performances exceptionnelles, une réactivité inégalée et une puissance de traitement fulgurante. Que ce soit pour le travail, le divertissement ou la créativité, les produits Networkeed repoussent les limites de ce qui est possible, vous permettant ainsi de vivre une expérience informatique sans précédent.</p>
        <p style={{color: "white"}}>Networkeed révolutionne l'expérience informatique avec des produits innovants au design avant-gardiste et aux fonctionnalités de pointe. Redéfinissez vos attentes et vivez une expérience informatique sans précédent.</p>
        </Col>
        <br/>
       </Row>
       </div>
        <br/>
        <br/>
        <div className='man_standingRowtwo' >
       <Row xs={1} md={2} className='g-4 ' >
        <Col>
        <h6 >Ne laissez pas passer cette opportunité ! Saisissez votre chance avec les téléphones de Networkleed.</h6>
        <p >Chez Networkleed, nous vous offrons une sélection exceptionnelle de téléphones haut de gamme, conçus pour répondre à tous vos besoins et vous offrir une expérience technologique sans pareille. Que vous recherchiez les dernières innovations, des performances optimales ou un design élégant, nos téléphones sauront vous combler.</p>
        <h6>Découvrez l'innovation sans limite avec les produits révolutionnaires de Networkeed, qui redéfinissent l'expérience informatique avec leur design avant-gardiste et leurs fonctionnalités de pointe.</h6>
        <p >Ne restez pas en marge de la révolution technologique. Laissez-vous séduire par nos appareils de pointe, qui intègrent les dernières fonctionnalités et vous permettent de rester connecté en toute simplicité. Explorez notre gamme diversifiée et trouvez le téléphone qui correspond parfaitement à votre style de vie et à vos préférences.</p>
        <p >N'attendez plus ! Saisissez cette occasion en or pour vous équiper du téléphone de vos rêves. Faites confiance à Networkleed pour vous offrir la qualité, la fiabilité et l'innovation que vous méritez. Découvrez dès maintenant notre collection de téléphones et plongez dans une expérience technologique exceptionnelle qui vous accompagnera au quotidien.</p>
        </Col>
        <Col>
        <img src={phone_hand} alt="" />
        </Col>
        <br/>
       </Row>
       </div>
       <br/><br/>






    </div>
  )
}

export default Store

// this page is going to handle the ProductCart we are using props
// <Row></Row> is going to set the css for react-bootstrap  <Col></Col> is going to put it into colums
