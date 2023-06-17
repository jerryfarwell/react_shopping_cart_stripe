import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.user_id;

      if (userId) {
        fetch(`https://lionfish-app-i98fg.ondigitalocean.app/user/${userId}`)
          .then((res) => res.json())
          .then((data) => setUser(data.user))
          .catch((err) => console.error(err));
      }
    }
  }, []);

  return (
    <div>
      {user && (
        <h2>Welcome {user.first_name}!</h2>
        //<img src={`http://localhost:3000${user.picture_url}`} alt="User's picture" /> this in case i want to display user picture from active storage
      )}
    </div>
  );
}

export default ProfilePage;
