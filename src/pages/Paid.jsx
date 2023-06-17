import React, { useEffect, useState } from "react";
import paid from "../assets/images/paid.png";
import "../assets/stylesheet/Paid.css";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import { Button } from "react-bootstrap";

function Paid() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.user_id;

      if (userId) {
        fetch(
          `https://lionfish-app-i98fg.ondigitalocean.app/payment_succeeded/${userId}`
        )
          .then((res) => res.json())
          .then((data) => setUser(data.user))
          .catch((err) => console.error(err));

        setTimeout(() => {
          window.location.href = "/";
        }, 20000); // user is redirected to home page after 20 second
      }
    }
  }, []);

  return (
    <div className="payment">
      <div className="payment-top">
        <img src={paid} alt="" className="paid-img" />
        <h3>Paiement Réussi !</h3>
        <br />
        <br />
        <br />
      </div>
      <br />
      <br />
      {user && (
        <div>
          <h3>félicitations {user.first_name} !</h3>
          <h6 className="words">
            Votre confiance en notre plateforme et votre soutien sont très
            appréciés.
            <br />
            Un mail confirmation a été envoyé à l'adresse mail{" "}
            <span style={{ color: "green" }}>{user.email}</span>{" "}
          </h6>
        </div>
      )}
      <Button className="btn-payment">Retour aux articles</Button>
    </div>
  );
}

export default Paid;
