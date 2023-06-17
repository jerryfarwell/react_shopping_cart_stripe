import React, { useEffect, useState } from "react";
//import ResetPassword from "./New";
import Cookies from "js-cookie";
import "../../../assets/stylesheet/SessionNew.css";
import { Button, Alert } from "react-bootstrap";
import loading_img from "../../../assets/images/loading_img.gif";

function ResetPasswordForm() {
  const [email, setEmail] = useState("");
  const [flashMessage, setFlashMessage] = useState("");
  const [secondFlashMessage, setSecondFlashMessage] = useState("");
  const [loading, setLoading] = useState(false); // this is to be able to display loading spinner when data loading

  useEffect(() => {
    // Get the reset password token from the URL parameters
    const searchParams = new URLSearchParams(window.location.search);
    const resetPasswordToken = searchParams.get("reset_password_token");

    // Set the reset_password_token cookie with the received token
    Cookies.set("reset_password_token", resetPasswordToken);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true); // set loading to true when form is submitted

    fetch("https://lionfish-app-i98fg.ondigitalocean.app/password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => {
        if (res.ok) {
          setFlashMessage(
            "Un e-mail contenant les instructions de réinitialisation de votre mot de passe a été envoyé."
          );
          return res.json();
        } else {
          //setFlashMessage("Email address not found");
          throw new Error(res.statusText);
        }
      })
      .then((json) => {
        //Cookies.set("token", json.token, { expires: 7 }); // set the token cookie to expire after 7 days
        //window.location.href = 'http://localhost:5173/'; // redirect to the homepage
      })
      .catch((err) => {
        console.error(err);
        setSecondFlashMessage(
          "Aucun compte n'est associé à cette adresse e-mail."
        );
      })
      .finally(() => setLoading(false)); // set loading to false after the response is received
  };

  return (
    <div>
      <div>
        <h4 className="wdConnexion">Réinitialisation de mot de passe</h4>
      </div>
      <br />
      <br />

      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="wdConnexion">
          Adresse e-mail :
        </label>
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="inputF"
          required
        />
        <br />
        <br />

        {flashMessage && (
          <Alert variant="success">
            <div>{flashMessage}</div>
          </Alert>
        )}

        {secondFlashMessage && (
          <Alert variant="danger">
            <div>{secondFlashMessage}</div>
          </Alert>
        )}

        {loading && <img src={loading_img} alt="" />}

        <Button type="submit">Envoyer le mail</Button>
      </form>

      <br />
      <Alert variant="secondary">
        <p>
          Veuillez saisir l'adresse e-mail que vous avez utilisée lors de votre
          inscription.
        </p>
      </Alert>
    </div>
  );
}

export default ResetPasswordForm;
