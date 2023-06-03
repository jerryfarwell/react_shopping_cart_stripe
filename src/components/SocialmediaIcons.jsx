import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "../assets/stylesheet/SocialmediaIcons.css";

function SocialmediaIcons() {
  return (
    <div className="icon_body">
      <div className="icons">
        <a href="#" className="icon icon--instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#" className="icon icon--twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className="icon icon--linkedin">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="#" className="icon icon--facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
    </div>
  );
}

export default SocialmediaIcons;
