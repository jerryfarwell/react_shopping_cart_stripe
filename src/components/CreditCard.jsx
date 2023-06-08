import React from "react";
import "../assets/stylesheet/CreditCard.css";

function CreditCard() {
  return (
    <div>
      <div className="cardCredit">
        <div className="face front-face">
          <div className="d-flex align-items-center justify-content-between">
            <div className="card-type">Debit Card</div>
            <div className="bank-name">Networkleed</div>
          </div>
          <div className="d-flex align-items-center justify-content-between pt-2">
            <img
              src="https://img.icons8.com/officel/2x/sim-card-chip.png"
              alt="chip"
              className="emv-chip"
            />
            <div className="wifi me-4">
              <span className="fas fa-wifi fs-3"></span>
            </div>
          </div>
          <div className="d-flex justify-content-between flex-column card-details pt-2">
            <div className="card-number">5678 9012 3456</div>
            <div className="d-flex align-items-center expiry py-2">
              <div className="d-flex flex-column text-uppercase">
                {/*<div>Valid</div>
                <div>thru</div>*/}
                <div>EXPIRE</div>
                <div>FIN</div>
              </div>
              <div className="ps-3">
                <span className="month">10</span> /{" "}
                <span className="year">33</span>
              </div>
            </div>
            <div className="card-holder pt-2 text-uppercase">
              MR JERRY MANKOU
            </div>
          </div>
          <div className="master d-flex justify-content-end">
            <img
              src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-marcus-samuelsson-group-2.png"
              alt=""
            />
          </div>
        </div>
        <div className="face back-face">
          <div className="black-bar mt-4"></div>
          <div className="authorize text-uppercase ps-3 pt-3">
            Authorized signature-not valid unless signed
          </div>
          <div className="d-flex position-relative">
            <div className="white-bar ms-3"></div>
            <div className="cvv d-flex justify-content-center">900</div>
          </div>
          <div className="mx-3 mt-3 back-text">
            Sur www.networkleed.com, la sécurité de vos achats en ligne est
            notre priorité absolue. Nous comprenons à quel point il est
            important de vous sentir en confiance lors de vos transactions sur
            notre plateforme. C'est pourquoi Nous avons choisi Stripe
            principalement en raison de sa sécurité de premier ordre en matière
            de données bancaires.
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
