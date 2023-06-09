import React, { useState } from "react";
import "../assets/stylesheet/ContactForm.css";
import { Alert } from "react-bootstrap";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create an object with the form data
    const formData = {
      name,
      email,
      subject,
      content,
    };

    // Send the form data to your backend API endpoint
    fetch("http://localhost:3000/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ contact: formData }),
    })
      .then((response) => {
        if (response.ok) {
          setMessage(
            "Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais."
          );
          // Handle success, e.g., show a success message to the user
          console.log("Email sent successfully");
        } else {
          setMessage(
            "Erreur lors de l'envoi du message. Veuillez réessayer ultérieurement. "
          );
          // Handle failure, e.g., display an error message
          console.error("Failed to send email");
        }
      })
      .catch((error) => {
        // Handle any error that occurred during the request
        console.error("An error occurred", error);
      });

    // Clear the form fields after submission
    setName("");
    setEmail("");
    setSubject("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <br />
      <div className="contact_us">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Votre Nom"
          required
          className="inputContact"
        />
        <br />
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="inputContact"
        />
        <br />
        <br />
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Objet"
          required
          className="inputContact"
        />
        <br />
        <br />
      </div>

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Décrivez en détail votre demande..."
        required
        className="inputContactText"
      />
      <br />
      <br />
      <div className="buttonSubmitContact">
        <button type="submit">
          <span>Envoyer</span>{" "}
        </button>
      </div>
      <br />
      <br />
      {message && (
        <div>
          <Alert variant="success">
            <h6>{message}</h6>
          </Alert>
        </div>
      )}
      <br />
    </form>
  );
}

export default ContactForm;
