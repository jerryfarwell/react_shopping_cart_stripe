import React from "react";
import "../../assets/stylesheet/CarouselAllItems.css";
import CreditCard from "../../components/CreditCard";
import stripe_allcards from "../../assets/images/stripe_allcards.png";

function SecuredPayment() {
  return (
    <div>
      <h2 style={{ textAlign: "center", fontFamily: "cursive", color: "red" }}>
        Paiement 100% sécurisé{" "}
      </h2>
      <br />
      <br />

      <div className="secure_data">
        <img src={stripe_allcards} alt="" style={{ maxWidth: "100%" }} />
      </div>
      <br />
      <br />
      <p>
        Chez Networleed, nous avons choisi de travailler avec Stripe en raison
        de sa réputation solide en matière de sécurité des paiements en ligne.
        La sécurité est une priorité absolue pour nous, et nous voulons offrir à
        nos clients une expérience d'achat en ligne sûre et sans soucis.
      </p>
      <p>
        Stripe est une plateforme de paiement renommée qui offre un niveau élevé
        de sécurité pour les transactions en ligne. Voici quelques raisons pour
        lesquelles nous avons choisi Stripe :
      </p>
      <ol>
        <li>
          Conformité aux normes de sécurité : Stripe est certifié selon les
          normes de sécurité les plus strictes de l'industrie, y compris la
          norme de sécurité des données du secteur des cartes de paiement (PCI
          DSS). Cela signifie que les données de paiement de nos clients sont
          protégées et traitées conformément aux meilleures pratiques en matière
          de sécurité.
        </li>
        <li>
          Cryptage des données sensibles : Stripe utilise un cryptage de bout en
          bout pour protéger les informations sensibles lors des transactions.
          Les données de paiement sont chiffrées et transmises de manière
          sécurisée, ce qui réduit considérablement les risques de fraude ou
          d'accès non autorisé.
        </li>
        <li>
          Gestion des risques : Stripe dispose de systèmes sophistiqués pour
          détecter et prévenir les activités frauduleuses. Ils utilisent des
          outils avancés d'analyse des risques et d'apprentissage automatique
          pour surveiller les transactions en temps réel, ce qui permet
          d'identifier et de bloquer les transactions suspectes de manière
          proactive.
        </li>
        <li>
          Protection contre les problèmes techniques : Stripe offre une
          infrastructure robuste et redondante pour garantir la disponibilité
          continue du système. Cela signifie que nos clients peuvent effectuer
          leurs paiements en ligne sans être affectés par les pannes ou les
          problèmes techniques.
        </li>
        <li>
          Expérience utilisateur fluide : En travaillant avec Stripe, nous
          offrons à nos clients une expérience de paiement en ligne simple et
          conviviale. Ils peuvent effectuer leurs achats en quelques clics, en
          toute confiance, sans avoir à quitter notre site.
        </li>
      </ol>
      <p>
        La sécurité des paiements en ligne est d'une importance capitale, et
        notre partenariat avec Stripe nous permet de garantir la protection des
        données de nos clients à chaque transaction. Nous nous efforçons de
        créer un environnement de confiance pour nos clients, en mettant en
        place les mesures de sécurité les plus avancées et en travaillant avec
        des partenaires de confiance comme Stripe.
      </p>
      <br />
      <div className="secure_data">
        <CreditCard />
      </div>
      <p style={{ textAlign: "center" }}>Toucher la carte</p>

      <div style={{ marginBottom: "10%" }}></div>
    </div>
  );
}

export default SecuredPayment;
