import React from "react";
import { Col, Row } from "react-bootstrap";
import jerry_nobackground from "../../assets/images/jerry_nobackground.png";
import digitalocean_logo from "../../assets/images/digitalocean_logo.png";
import digitalocean_cofounder from "../../assets/images/digitalocean_cofounder.jpg";
import chronopost_logo from "../../assets/images/chronopost_logo.png";
import deliveryimg_chronopost from "../../assets/images/deliveryimg_chronopost.webp";
import payementimg_stripe from "../../assets/images/payementimg_stripe.webp";
import stripe_allcards from "../../assets/images/stripe_allcards.png";

function AboutUs() {
  return (
    <div>
      <h2 style={{ textAlign: "center", fontFamily: "cursive", color: "red" }}>
        Votre satisfaction est notre priorité{" "}
      </h2>
      <p style={{ textAlign: "center" }}>
        Chez Networkleed, nous sommes passionnés par la technologie et nous nous
        efforçons de fournir à nos clients les meilleurs produits informatiques
        et électroniques. Depuis notre création, nous nous sommes engagés à
        offrir une expérience d'achat exceptionnelle, en mettant l'accent sur la
        qualité, la fiabilité et le service à la clientèle.
      </p>
      <div style={{ marginBottom: "10%" }}></div>
      <Row xs={1} md={3} className="g-4">
        <Col align="center">
          <h3
            style={{
              textAlign: "center",
              fontFamily: "cursive",
              color: "blue",
            }}
          >
            Notre histoire
          </h3>
          <br />
          <p style={{ textAlign: "justify" }}>
            Networkleed a été fondée en février 2023 par Monsieur Jerry Mankou,
            entrepreneur individuel et gérant de la SARL african market
            travaillant en collaboration avec des entreprises aux États-Unis et
            en France. Notre entreprise a été créée en France et est enregistrée
            sous le numéro SIREN 948754775. Vous pouvez consulter les
            informations détaillées concernant notre entreprise sur le site Le
            Figaro :{" "}
            <a
              href="https://entreprise.lefigaro.fr/monsieur-jerry-mankou-91/entreprise-948754775"
              style={{ textDecoration: "none" }}
            >
              En savoir plus
            </a>
            <br />
            Notre objectif est de devenir la référence en matière de vente en
            ligne de matériel informatique. Nous avons rapidement gagné la
            confiance de nos clients grâce à notre sélection minutieuse de
            produits, notre expertise technique et notre engagement à satisfaire
            leurs besoins. Chez Networkleed, nous nous engageons également à
            être une entreprise socialement responsable. Nous cherchons
            constamment des moyens d'adopter des pratiques durables et
            respectueuses de l'environnement.
          </p>
        </Col>
        <Col align="center">
          <h3
            style={{
              textAlign: "center",
              fontFamily: "cursive",
              color: "blue",
            }}
          >
            Nos valeurs
          </h3>
          <span style={{ textAlign: "center", color: "red" }}>Qualité :</span>
          <p style={{ textAlign: "justify" }}>
            Nous ne faisons aucun compromis sur la qualité de nos produits. Nous
            travaillons avec des marques réputées et veillons à ce que chaque
            produit que nous proposons réponde aux normes les plus élevées de
            performance et de durabilité.
          </p>
          <span style={{ textAlign: "center", color: "red" }}>
            Service client :
          </span>
          <p style={{ textAlign: "justify" }}>
            {" "}
            Nous plaçons nos clients au cœur de notre entreprise. Notre équipe
            dévouée est là pour répondre à toutes vos questions, vous fournir
            des conseils avisés et vous assurer une expérience d'achat agréable
            et sans tracas.
          </p>
          <span style={{ textAlign: "center", color: "red" }}>Fiabilité :</span>
          <p style={{ textAlign: "justify" }}>
            Nous nous engageons à honorer nos promesses et à respecter les
            délais de livraison. Vous pouvez compter sur nous pour vous fournir
            des produits de qualité de manière efficace et sécurisée.
          </p>
        </Col>

        <Col align="center">
          <h3
            style={{
              textAlign: "center",
              fontFamily: "cursive",
              color: "blue",
            }}
          >
            Notre mission
          </h3>
          <br />
          <p style={{ textAlign: "justify" }}>
            Notre mission est de simplifier la vie de nos clients en leur
            offrant un accès facile aux dernières technologies. Nous croyons que
            la technologie devrait être accessible à tous, quel que soit le
            niveau d'expertise, et nous nous efforçons de rendre l'achat de
            produits informatiques aussi simple que possible. Nous cherchons
            continuellement à élargir notre gamme de produits pour répondre aux
            besoins changeants du marché. En plus de notre engagement envers la
            qualité des produits, nous accordons une grande importance à la
            satisfaction de nos clients. Nous nous efforçons de rendre votre
            expérience d'achat aussi fluide et agréable que possible, en mettant
            en place des processus efficaces de commande, de livraison et de
            service après-vente. Votre satisfaction est notre priorité absolue,
            et nous sommes là pour répondre à toutes vos questions,
            préoccupations ou demandes d'assistance.
          </p>
        </Col>
      </Row>
      <div style={{ marginBottom: "10%" }}></div>
      <h3
        style={{
          textAlign: "center",
          fontFamily: "cursive",
          color: "blue",
        }}
      >
        Networkleed et partenaires
      </h3>
      <br />
      <Row>
        <Col className="col-md-4">
          <p style={{ textAlign: "center" }}>Chef d'entreprise - founder </p>
          <img src={jerry_nobackground} alt="" style={{ maxWidth: "100%" }} />
        </Col>
        <Col className="col-md-8">
          <p>
            Originaire du Congo, monsieur Jerry MANKOU a parcouru un chemin
            inspirant dans son parcours académique et professionnel. Après avoir
            terminé ses études secondaires, il a choisi de poursuivre ses études
            à l'étranger, notamment au Ghana, où il a obtenu un diplôme de
            "Proficiency en études de langue anglaise". Cette expérience lui a
            permis de développer des compétences linguistiques solides en
            anglais.
          </p>
          <p>
            Soucieux d'élargir ses connaissances, monsieur Jerry MANKOU a
            ensuite entrepris un Master en logistique et gestion des transports,
            ainsi qu'une formation en QHSE (Qualité, Hygiène, Sécurité,
            Environnement) et d'autres domaines connexes. Son parcours l'a
            également conduit en Norvège, où il a acquis une expérience
            précieuse avant de s'installer en France.
          </p>
          <p>
            Avant de fonder Networkleed, monsieur Jerry MANKOU a travaillé dans
            les domaines de la logistique et de l'aéroportuaire en France,
            apportant une expertise approfondie dans la gestion des opérations
            et la coordination efficace des flux de marchandises. Cependant, sa
            passion pour l'entrepreneuriat et son intérêt pour les nouvelles
            technologies l'ont amené à créer sa propre entreprise.
          </p>
          <p>
            Avec Networkleed, monsieur Jerry MANKOU met à profit ses
            compétences, son expérience et sa passion pour offrir une expérience
            d'achat en ligne exceptionnelle dans le domaine des nouvelles
            technologies. Sa vision stratégique et son engagement envers
            l'innovation guident le développement de l'entreprise et son
            engagement à répondre aux besoins de nos clients.
          </p>
          <h5
            style={{
              textAlign: "center",
              fontFamily: "cursive",
              color: "blue",
            }}
          >
            Notre Vision à moyen terme
          </h5>
          <p>
            Chez Networkleed, nous avons une vision ambitieuse pour l'avenir de
            notre entreprise. Dans notre quête pour devenir une grande
            plateforme dans le domaine de la vente en ligne de produits
            informatiques, nous envisageons de recruter de nouveaux talents dans
            un futur proche. Nous souhaitons élargir notre équipe avec des
            développeurs web talentueux qui pourront contribuer à l'amélioration
            continue de notre plateforme, des marketeurs dynamiques qui sauront
            promouvoir nos produits de manière efficace, ainsi que des livreurs
            fiables pour assurer une livraison rapide et sécurisée à nos clients
          </p>
          <p>
            Nous sommes conscients de notre responsabilité collective envers la
            planète, et nous cherchons constamment des moyens de minimiser notre
            empreinte écologique. Que ce soit par le biais de l'emballage
            écologique, de l'optimisation des processus de livraison ou de la
            promotion de produits durables, nous visons à intégrer des pratiques
            respectueuses de l'environnement dans toutes nos activités.
          </p>
        </Col>
      </Row>
      <div style={{ marginBottom: "10%" }}></div>
      <Row>
        <Col className="col-md-4">
          <p style={{ textAlign: "center" }}>Co-founder </p>
          <img
            src={digitalocean_cofounder}
            alt=""
            style={{ maxWidth: "100%" }}
          />
        </Col>
        <Col className="col-md-8">
          <img
            src={digitalocean_logo}
            alt=""
            style={{ maxWidth: "30%", alignItems: "center" }}
          />
          <p>Adresse : 101 6th Ave, New York, NY 10013, États-Unis</p>
          <p>
            Chez Networkleed, nous accordons une grande importance à la sécurité
            et à l'efficacité de notre infrastructure technologique. C'est
            pourquoi nous sommes fiers de travailler en collaboration avec
            DigitalOcean pour le déploiement de notre backend. Nous croyons
            fermement que DigitalOcean est l'une des plateformes de déploiement
            les plus sécurisées du marché, offrant des fonctionnalités avancées
            qui facilitent le travail des développeurs.
          </p>
          <p>
            Avec DigitalOcean, nous bénéficions d'une infrastructure cloud
            robuste qui garantit la fiabilité et la disponibilité de nos
            services. Leurs mesures de sécurité avancées, telles que le
            chiffrement des données et les pare-feux de réseau, nous permettent
            de protéger efficacement les informations sensibles de nos
            utilisateurs.
          </p>
          <p>
            Une des caractéristiques qui nous a particulièrement séduits chez
            DigitalOcean est leur terminal, qui offre aux développeurs une
            interface pratique et rapide pour accéder aux journaux et comprendre
            rapidement les informations essentielles. Cela nous permet de
            diagnostiquer et résoudre les problèmes plus efficacement, tout en
            améliorant notre temps de réponse pour offrir une meilleure
            expérience utilisateur.
          </p>
          <p>
            DigitalOcean propose des outils pour simplifier la gestion de
            l'infrastructure, notamment des solutions de sauvegarde
            automatisées, des équilibrages de charge et une scalabilité aisée.
            Nous sommes convaincus d'avoir trouvé un partenaire solide et fiable
            pour soutenir la croissance continue et offrir à nos utilisateurs
            une expérience exceptionnelle.
          </p>
        </Col>
      </Row>
      <div style={{ marginBottom: "10%" }}></div>
      <Row>
        <Col className="col-md-4">
          <img
            src={deliveryimg_chronopost}
            alt=""
            style={{ maxWidth: "100%" }}
          />
        </Col>
        <Col className="col-md-8">
          <img
            src={chronopost_logo}
            alt=""
            style={{ maxWidth: "30%", alignItems: "center" }}
          />
          <br />
          <p>Adresse : 3 boulevard Romain Rolland 75014 Paris, France</p>
          <p>
            Chez Networkleed, nous attachons une grande importance à la
            satisfaction de nos clients, et cela inclut également la qualité et
            la rapidité de la livraison de nos produits. C'est pourquoi nous
            avons choisi de travailler en partenariat avec Chronopost, un leader
            reconnu dans le domaine de la livraison express.
          </p>
          <p>
            Chronopost se distingue par son engagement à fournir des services de
            livraison rapides et fiables. Leur réseau logistique étendu et leur
            expertise dans le domaine de la livraison express nous permettent
            d'offrir à nos clients une expérience de livraison exceptionnelle.
          </p>
          <p>
            Lorsque vous choisissez la livraison avec Chronopost, vous
            bénéficiez de délais de livraison rapides, vous permettant de
            recevoir votre commande dans les meilleurs délais. Que ce soit pour
            un besoin urgent ou simplement pour profiter de votre achat plus
            rapidement, Chronopost s'engage à respecter les délais convenus et à
            assurer une livraison efficace.
          </p>
          <p>
            En travaillant avec Chronopost, nous visons à offrir à nos clients
            la meilleure expérience de livraison possible. Leur engagement
            envers la rapidité, la fiabilité et la qualité du service correspond
            parfaitement à nos valeurs, et nous sommes convaincus que cela
            contribue à renforcer la satisfaction de nos clients.
          </p>
          <p>
            De plus, la collaboration avec Chronopost nous permet de proposer
            une gamme de services complète pour répondre aux besoins variés de
            nos clients. En plus de la livraison rapide, Chronopost offre
            également des options de suivi en temps réel, ce qui permet à nos
            clients de suivre l'acheminement de leur colis de manière
            transparente. Cette transparence renforce la confiance de nos
            clients et les rassure quant à la sécurité et à la fiabilité de leur
            livraison.
          </p>
        </Col>
      </Row>
      <div style={{ marginBottom: "10%" }}></div>
      <Row>
        <Col className="col-md-4">
          <img src={payementimg_stripe} alt="" style={{ maxWidth: "100%" }} />
        </Col>
        <Col className="col-md-8">
          <img src={stripe_allcards} alt="" style={{ maxWidth: "30%" }} />
          <br />
          <br />
          <h3>Stripe</h3>
          <br />
          <br />
          <p>
            <p>
              Adresse : 354 Oyster Point Blvd, South San Francisco, CA 94080,
              États-Unis
            </p>
            Chez Networkleed, nous comprenons l'importance d'un système de
            paiement en ligne sécurisé et pratique pour nos clients. C'est
            pourquoi nous avons choisi de collaborer avec Stripe, une plateforme
            de paiement en ligne de renommée mondiale.
          </p>
          <p>
            Stripe se distingue par sa sécurité de pointe et sa facilité
            d'utilisation. Leurs mesures de sécurité avancées, telles que le
            cryptage des données et la détection des fraudes, garantissent la
            protection des informations sensibles des utilisateurs lors des
            transactions en ligne. En travaillant avec Stripe, nous nous
            assurons que nos clients peuvent effectuer leurs paiements en toute
            confiance, en sachant que leurs données sont sécurisées.
          </p>
          <p>
            En plus de sa sécurité, Stripe offre également une expérience
            utilisateur fluide. Leur interface intuitive permet aux clients de
            finaliser leurs achats rapidement et facilement, sans avoir à saisir
            à chaque fois leurs informations de paiement. Cela améliore non
            seulement la commodité pour nos clients, mais réduit également les
            frictions lors du processus d'achat.
          </p>
          <p>
            Nous sommes fiers de collaborer avec Stripe pour offrir à nos
            clients une expérience de paiement en ligne sans tracas. Leur
            réputation d'excellence dans le domaine des paiements en ligne,
            combinée à leur engagement envers la sécurité et la simplicité,
            correspond parfaitement à nos valeurs chez Networkleed.
          </p>
        </Col>
      </Row>
      <div style={{ marginBottom: "10%" }}></div>
    </div>
  );
}

export default AboutUs;
