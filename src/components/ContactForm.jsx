import React, { useState } from "react";
import "../assets/stylesheet/ContactForm.css";
import { Alert } from "react-bootstrap";
import loading_img from "../assets/images/loading_img.gif";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create an object with the form data
    const formData = {
      name,
      email,
      subject,
      content,
    };

    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ contact: formData }),
      });

      if (response.ok) {
        setMessage(
          "Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais."
        );
        console.log("Email sent successfully");
      } else {
        setMessage(
          "Erreur lors de l'envoi du message. Veuillez réessayer ultérieurement."
        );
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("An error occurred", error);
    } finally {
      setLoading(false);
    }

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
      {loading && <img src={loading_img} alt="" />}

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
