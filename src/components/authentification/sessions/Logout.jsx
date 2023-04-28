import React from 'react';
import Cookies from 'js-cookie';
import logout from '../../../assets/images/logout.png'
import '../../../assets/stylesheet/Logout.css';



function Logout() {
  const handleLogout = () => {
    // Remove the session cookie
    Cookies.remove('token');

    // Redirect the user to the home page
    window.location.href = 'http://localhost:5173/';
  };

  return (
    <div >
      <button onClick={handleLogout} className='logout-button'>{<img className='logout-img' src={logout} alt="" />} {<br/>} <small>Se déconnecter</small></button>
    </div>
  );
}

export default Logout;

