import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import Logout from "./authentification/sessions/Logout";
import "../assets/stylesheet/UserProfilPage.css";
import userprofil_icon from "../assets/images/userprofil_icon.png";

function UserProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.user_id;

      if (userId) {
        fetch(`https://lobster-app-9v8bb.ondigitalocean.app/user/${userId}`)
          .then((res) => res.json())
          .then((data) => setUser(data.user))
          .catch((err) => console.error(err));
      }
    }
  }, []);

  return (
    <div className="user-profil">
      {user && (
        <div>
          <img src={userprofil_icon} alt="" className="userprofil_icon" />
          <h4>{user.first_name}</h4>
          {/* //<img src={`http://localhost:3000${user.picture_url}`} alt="User's picture" /> this in case i want to display user picture from active storage */}
        </div>
      )}
      <br />
      <br />
      <br />
      <br />
      <Logout />
    </div>
  );
}

export default UserProfilePage;
