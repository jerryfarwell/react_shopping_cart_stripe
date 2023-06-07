import React from "react";
import { Col, Row } from "react-bootstrap";
import legal_notice from "../../assets/images/legal_notice.png";
import "../../assets/stylesheet/CarouselAllItems.css";

function LegalNotice() {
  return (
    <div>
      <h2 style={{ textAlign: "center", fontFamily: "cursive", color: "red" }}>
        Mentions Légales{" "}
      </h2>
      <p style={{ textAlign: "center" }}>
        {" "}
        Cette page a pour but de fournir des informations transparentes et
        facilement accessibles aux utilisateurs concernant l'entreprise, ses
        activités, ses obligations légales et les droits des utilisateurs.
      </p>
      <br />
      <div className="legal_notice">
        <img src={legal_notice} alt="" width="30%" />
      </div>
      <br />
      <br />
      <Row xs={1} md={3} className="g-4">
        <Col align="center">
          <h3
            style={{
              textAlign: "center",
              fontFamily: "cursive",
              color: "blue",
            }}
          >
            Identification de l'entreprise
          </h3>
          <br />
          <p>
            Le site networkleed.com est exploité par :
            <br />
            l'administration et la direction effective de l'entreprise KIMUNTU
            <br />
            Siège social : 7 RUE EDOUARD DELANOE, 91270 Vigneux-sur-seine -
            France <br />
            Contact : networkleed@gmail.com
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
            Statut juridique
          </h3>
          <br />
          <p>
            {" "}
            Entreprise immatriculée au Registre du Commerce et des Sociétés sous
            le numéro 948 754 775 R.C.S. Evry
          </p>
          <p>forme juridique : EI (Entreprise individuelle)</p>
        </Col>
        <Col align="center">
          <h3
            style={{
              textAlign: "center",
              fontFamily: "cursive",
              color: "blue",
            }}
          >
            Responsable légal{" "}
          </h3>
          <p>
            Monsieur Jerry MANKOU
            <br /> Contact: networkleed@gmail.com
          </p>
        </Col>
      </Row>
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
            Protection des données personnelles{" "}
          </h3>
          <p>
            Nous comprenons l'importance de protéger les données personnelles
            des utilisateurs, c'est pourquoi chez Networleed, nous mettons en
            place des mesures de sécurité strictes pour assurer la
            confidentialité et la sécurité des informations fournies. Lorsque
            vous créez un compte sur notre site pour acheter des produits tels
            que des téléphones, des PC portables, des enceintes Bluetooth, des
            casques audio et autres, nous tenons à vous rassurer sur la sécurité
            de vos données.
          </p>
          <p>
            Tout d'abord, nous veillons à ce que votre mot de passe soit bien
            sécurisé grâce à un système de cryptage mis en place par nos
            développeurs. Cela garantit que vos informations d'identification
            sont protégées contre tout accès non autorisé.
          </p>
          <p>
            De plus, nous avons choisi Digital Ocean comme notre hébergeur, une
            plateforme réputée pour sa fiabilité et sa sécurité. Ils mettent en
            place des mesures de sécurité avancées pour protéger les serveurs et
            les données hébergées. Ainsi, vous pouvez avoir confiance en la
            protection de vos données lors de l'utilisation de notre site.
          </p>
          <p>
            En ce qui concerne les informations bancaires, nous ne les
            conservons pas directement sur notre site. Nous travaillons en
            collaboration avec Stripe, une plateforme de paiement sécurisée et
            respectée, pour gérer les transactions financières. Stripe utilise
            des protocoles de sécurité avancés pour assurer la confidentialité
            de vos informations bancaires.
          </p>
          <p>
            Nous tenons également à souligner que notre site n'utilise pas de
            cookies pour collecter des informations personnelles vous
            concernant. Nous respectons votre vie privée et ne souhaitons pas
            utiliser des pratiques intrusives. Nous nous engageons à traiter vos
            informations uniquement dans le cadre nécessaire pour assurer une
            expérience d'achat fluide et sécurisée.
          </p>
          <p>
            En ce qui concerne la suppression de votre compte, sachez que
            lorsque vous décidez de supprimer votre compte utilisateur, toutes
            les informations associées à votre compte sont également supprimées
            de notre système. Nous attachons une grande importance à la
            protection de vos données et nous prenons les mesures nécessaires
            pour garantir leur suppression complète.
          </p>
          <p>
            Chez Networleed, nous nous engageons à respecter votre vie privée et
            à assurer la sécurité de vos données personnelles. Si vous avez des
            questions supplémentaires concernant notre politique de protection
            des données ou toute autre préoccupation, n'hésitez pas à nous
            contacter. Votre confiance est primordiale pour nous, et nous
            mettons tout en œuvre pour garantir la sécurité de vos informations.
          </p>
        </Col>
        <Col align="center">
          {" "}
          <h3
            style={{
              textAlign: "center",
              fontFamily: "cursive",
              color: "blue",
            }}
          >
            Propriété intellectuelle{" "}
          </h3>
          <p>
            La propriété intellectuelle est un aspect essentiel que nous prenons
            au sérieux chez Networleed. Nous reconnaissons l'importance de
            respecter les droits de propriété intellectuelle associés au contenu
            présent sur notre site, tels que les textes, les images, les vidéos
            et autres éléments.
          </p>
          <p>
            Tout le contenu original présent sur notre site est protégé par les
            lois relatives à la propriété intellectuelle, notamment les droits
            d'auteur. Cela signifie que le contenu que vous consultez, que ce
            soit des descriptions de produits, des articles de blog, des
            graphiques ou des médias, est notre propriété exclusive ou nous
            avons obtenu les autorisations nécessaires pour les utiliser.
          </p>
          <p>
            Il est important de noter que toute utilisation non autorisée de ce
            contenu constitue une violation de nos droits de propriété
            intellectuelle. Cela comprend la reproduction, la distribution, la
            modification ou toute autre forme d'utilisation sans notre
            consentement préalable.
          </p>
          <p>
            Nous vous encourageons à utiliser notre site et son contenu de
            manière légale et responsable. Cela signifie que vous pouvez
            naviguer sur notre site, partager des liens vers nos pages ou
            utiliser des extraits de contenu à des fins personnelles, éducatives
            ou non commerciales, dans le respect des droits d'auteur et des
            autres lois applicables.
          </p>
          <p>
            Cependant, toute utilisation commerciale, reproduction intégrale ou
            substantielle de notre contenu, création d'œuvres dérivées ou toute
            autre exploitation nécessite notre autorisation écrite préalable. Si
            vous souhaitez utiliser notre contenu d'une manière qui va au-delà
            de l'utilisation autorisée, veuillez nous contacter pour obtenir les
            permissions nécessaires.
          </p>
          <p>
            Nous nous réservons le droit d'agir en cas de violation de nos
            droits de propriété intellectuelle. Cela peut inclure des mesures
            légales pour protéger nos droits et demander des réparations en cas
            de préjudice subi.
          </p>
          <p>
            Chez Networleed, nous valorisons le respect des droits de propriété
            intellectuelle, tant les nôtres que ceux des autres. Nous vous
            encourageons à nous contacter si vous avez des questions, des
            préoccupations ou des demandes spécifiques concernant la propriété
            intellectuelle sur notre site.
          </p>
        </Col>
        <Col align="center">
          {" "}
          <h3
            style={{
              textAlign: "center",
              fontFamily: "cursive",
              color: "blue",
            }}
          >
            Loi applicable et juridiction compétente{" "}
          </h3>
          <p>
            Concernant la loi applicable et la juridiction compétente, veuillez
            noter que notre entreprise, Networleed, est basée en France. Par
            conséquent, la loi française régit les conditions d'utilisation de
            notre site web et tout litige éventuel découlant de son utilisation.
          </p>
          <p>
            En cas de litige ou de différend, les tribunaux français seront
            considérés comme compétents pour résoudre la situation conformément
            à la législation en vigueur.
          </p>
          <p>
            Nous tenons à souligner que cela s'applique spécifiquement si vous
            utilisez notre site web depuis la France. Si vous accédez à notre
            site depuis un autre pays, veuillez prendre en compte les lois et
            les juridictions applicables à votre situation spécifique.
          </p>
          <p>
            Nous nous efforçons de respecter pleinement les lois et les
            réglementations en vigueur en France pour garantir une expérience
            utilisateur sûre et légale. Si vous avez des questions
            supplémentaires concernant la loi applicable ou la juridiction
            compétente, nous vous recommandons de consulter un professionnel du
            droit ou un avocat pour obtenir des conseils juridiques spécifiques
            à votre situation.
          </p>
        </Col>
      </Row>
      <div style={{ marginBottom: "10%" }}></div>
    </div>
  );
}

export default LegalNotice;
