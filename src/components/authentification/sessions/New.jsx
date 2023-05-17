import React, { useEffect, useState } from 'react';
import '../../../assets/stylesheet/SessionNew.css';
import { Alert, Button} from 'react-bootstrap';
import Cookies from 'js-cookie';
import loading_img from '../../../assets/images/loading_img.gif'
//import ResetPasswordForm from '../passwords/RessetPasswordForm';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [flashMessage, setFlashMessage] = useState('');
  const [SecondflashMessage, setSecondFlashMessage] = useState('');
  const [loading, setLoading] = useState(false); // this is to be able to display loading spinner when data loading

  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const [token, setToken] = useState('');
  useEffect(() => {
    const tokenFromCookie = Cookies.get('token');
    if (tokenFromCookie) {
      setToken(tokenFromCookie);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true); // set loading to true when form is submitted
    fetch("http://localhost:3000/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email: formData.email,
          password: formData.password,
        },
      }),
    })
      .then((res) => {
        if (res.ok) {
          setFlashMessage('Félicitations, connexion réussie !');
            return res.json();
        } else {
          setFlashMessage("Identifiant ou Mot de passe incorrect ");
          setSecondFlashMessage(' Nouveau compte ? veuillez confirmer votre adresse mail en cliquant sur le lien de confirmation avant de continuer.');
            throw new Error(res);
        }
      })
      .then((json) => {
        Cookies.set("token", json.token, { expires: 7 }); // set the token cookie to expire after 7 days
        setToken(json.token); // set the token state
        //Cookies.set("userFirstName", json.user.first_name); // geting the user first_name from rails api
        setTimeout(() => {
          window.location.href = 'http://localhost:5173/'; // redirect to the homepage
        }, 3000); // close the parentheses for the setTimeout function here
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false)); // set loading to false after the response is received      
  };

  return (
    <div className='form'>
      <div>
        <h2 className='wdConnexion'>Connexion</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <br />
        <br />
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Email'
          className='inputF'
          required
        />
        <br />
        <br />
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          placeholder='Mot de passe'
          className='inputF'
          required
        />

        <br/>
        {loading && <img src={loading_img} alt="" /> }

        <div className='diptS'>
          {/*<input type='submit' value='Se connecter' className='inputbtn' />*/}
          <Button type='submit' className='btn-signin'>Se connecter</Button>
        </div>
        <br />
        <br />
        {flashMessage && (
          <div className='flash-message'>
            <br/>
            <Alert variant="danger">
            <h6>{flashMessage}</h6>
            <br/>
            <p>{SecondflashMessage}</p>
            </Alert>
          </div>
        )}

        <br />
        <br />
      </form>



    </div>
  );
}

export default LoginForm;


