import React, { useState } from "react";
import "../../../assets/stylesheet/NewPasswordForm.css";
import { Alert, Button } from "react-bootstrap";
import lock from '../../../assets/images/lock.png'
import loading_img from '../../../assets/images/loading_img.gif'



const ResetPassword = async (
  resetPasswordToken,
  password,
  passwordConfirmation
) => {
  try {
    const response = await fetch(
      `http://localhost:3000/password?reset_password_token=${resetPasswordToken}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
          password_confirmation: passwordConfirmation,
        }),
      }
    );
    const data = await response.json();
    console.log(data); // should print { message: "Password updated successfully" } if successful
    return data;
  } catch (error) {
    console.error(error);
  }
};

function NewPasswordForm() {
  const searchParams = new URLSearchParams(window.location.search);
  const reset_password_token = searchParams.get("reset_password_token");

  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [message, setMessage] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState("");
  const [passwordFormatError, setPasswordFormatError] = useState("");
  const [loading, setLoading] = useState(false);



  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    console.log(reset_password_token);

    if (password !== passwordConfirmation) {
      setPasswordMatchError("Les mots de passe ne correspondent pas.");
      setLoading(false);
      return;
    }

    if (!/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])[a-zA-Z0-9]{6,}$/.test(password)) {
      setPasswordFormatError(
        "Le mot de passe doit comporter au moins 6 caractères, dont au moins une lettre majuscule, une lettre minuscule et un chiffre."
      );
      setLoading(false);
      return; // return here to prevent further execution of the function
    }

    try {
      await ResetPassword(
        reset_password_token,
        password,
        passwordConfirmation
      );
      setMessage("Le mot de passe a été mis à jour avec succès.");
      setLoading(false);
    } catch (error) {
      console.error(error);
      setMessage("La mise à jour du mot de passe a échoué.");
    }
  };

  return (
    <div className="new-password">
      <br />
      <br />
      <h2 style={{color: 'white'}}>Redéfinir votre mot de passe</h2>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Nouveau mot de passe"
          className="inputF"
          required
        />
        <br />
        <br />
        <input
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          placeholder="Confirmation du mot de passe"
          className="inputF"
          required
        />
        <br />
        <br />

        {message && (
          <Alert variant="success">
            <div>{message}</div>
          </Alert>
        )}

        {loading && <img src={loading_img} alt="" /> }
        

        <Button type="submit">Réinitialiser le mot de passe</Button>
        <br />
        <br />
        {passwordMatchError && (
          <Alert variant="danger">{passwordMatchError}</Alert>
        )}
        {passwordFormatError && (
          <Alert variant="danger">{passwordFormatError}</Alert>
        )}
      </form>
      <br/>
      <br/>
      <br/>
      <br/>
      <h5 >Nous prenons votre vie privée et votre sécurité très au sérieux.</h5>
      <img src={lock} alt="" style={{ width: "200px" }} />
      <br/>
      <br/>

      <Alert variant="secondary">
        <p>Veuillez entrer votre nouveau mot de passe dans le champ prévu à cet effet. Assurez-vous qu'il est sécurisé en utilisant au moins 6 caractères spéciaux , dont au moins une lettre majuscule, une lettre minuscule et un chiffre. Entrez à nouveau votre nouveau mot de passe dans le champ de confirmation pour éviter les erreurs de saisie. Cliquez sur "Réinitialiser le mot de passe" pour enregistrer les modifications.</p>
        <p>Attention, ce lien de réinitialisation de mot de passe n'est utilisable qu'une seule fois. Si vous avez déjà changé votre mot de passe à l'aide de ce lien, veuillez demander un nouveau lien pour réinitialiser votre mot de passe.</p>
      </Alert>
    </div>
  );
} 

export default NewPasswordForm;
