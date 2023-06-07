import React from "react";
import secure_data from "../../assets/images/secure_data.png";
import "../../assets/stylesheet/CarouselAllItems.css";

function PersonalUserData() {
  return (
    <div>
      <h2 style={{ textAlign: "center", fontFamily: "cursive", color: "red" }}>
        Protection des données personnelles{" "}
      </h2>
      <br />
      <div className="secure_data">
        <img src={secure_data} alt="" width="30%" />
      </div>

      <p style={{ textAlign: "justify" }}>
        Nous comprenons l'importance de protéger les données personnelles des
        utilisateurs, c'est pourquoi chez Networleed, nous mettons en place des
        mesures de sécurité strictes pour assurer la confidentialité et la
        sécurité des informations fournies. Lorsque vous créez un compte sur
        notre site pour acheter des produits tels que des téléphones, des PC
        portables, des enceintes Bluetooth, des casques audio et autres, nous
        tenons à vous rassurer sur la sécurité de vos données.
      </p>
      <p style={{ textAlign: "justify" }}>
        Tout d'abord, nous veillons à ce que votre mot de passe soit bien
        sécurisé grâce à un système de cryptage mis en place par nos
        développeurs. Cela garantit que vos informations d'identification sont
        protégées contre tout accès non autorisé.
      </p>
      <p style={{ textAlign: "justify" }}>
        De plus, nous avons choisi Digital Ocean comme notre hébergeur, une
        plateforme réputée pour sa fiabilité et sa sécurité. Ils mettent en
        place des mesures de sécurité avancées pour protéger les serveurs et les
        données hébergées. Ainsi, vous pouvez avoir confiance en la protection
        de vos données lors de l'utilisation de notre site.
      </p>
      <p style={{ textAlign: "justify" }}>
        En ce qui concerne les informations bancaires, nous ne les conservons
        pas directement sur notre site. Nous travaillons en collaboration avec
        Stripe, une plateforme de paiement sécurisée et respectée, pour gérer
        les transactions financières. Stripe utilise des protocoles de sécurité
        avancés pour assurer la confidentialité de vos informations bancaires.
      </p>
      <p style={{ textAlign: "justify" }}>
        Nous tenons également à souligner que notre site n'utilise pas de
        cookies pour collecter des informations personnelles vous concernant.
        Nous respectons votre vie privée et ne souhaitons pas utiliser des
        pratiques intrusives. Nous nous engageons à traiter vos informations
        uniquement dans le cadre nécessaire pour assurer une expérience d'achat
        fluide et sécurisée.
      </p>
      <p style={{ textAlign: "justify" }}>
        En ce qui concerne la suppression de votre compte, sachez que lorsque
        vous décidez de supprimer votre compte utilisateur, toutes les
        informations associées à votre compte sont également supprimées de notre
        système. Nous attachons une grande importance à la protection de vos
        données et nous prenons les mesures nécessaires pour garantir leur
        suppression complète.
      </p>
      <p style={{ textAlign: "justify" }}>
        Chez Networleed, nous nous engageons à respecter votre vie privée et à
        assurer la sécurité de vos données personnelles. Si vous avez des
        questions supplémentaires concernant notre politique de protection des
        données ou toute autre préoccupation, n'hésitez pas à nous contacter.
        Votre confiance est primordiale pour nous, et nous mettons tout en œuvre
        pour garantir la sécurité de vos informations.
      </p>
      <div style={{ marginBottom: "10%" }}></div>
    </div>
  );
}

export default PersonalUserData;
