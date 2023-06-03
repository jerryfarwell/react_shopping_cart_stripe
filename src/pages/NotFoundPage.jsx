import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>404 - Page non trouvée</h1>
      <p>La page que vous recherchez n'existe pas.</p>
      <Link to="/">Retournez à la page d'accueil</Link>
    </div>
  );
};

export default NotFoundPage;
