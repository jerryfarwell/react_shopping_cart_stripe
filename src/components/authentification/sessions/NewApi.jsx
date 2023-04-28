import React, { useState } from 'react';
import '../../../assets/stylesheet/SessionNew.css';
import Cookies from 'js-cookie';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [flashMessage, setFlashMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the user has a token stored
    const token = localStorage.getItem('token');
    if (!token) {
      setFlashMessage('Token not found. Please sign up first.');
      return;
    }

    // Verify the user's token
    fetch('http://localhost:3000/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
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
          // Store the user's token in a cookie
          Cookies.set('token', token);

          setFlashMessage('Félicitations, connexion réussie 😍!');
          setTimeout(() => {
            window.location.href = 'http://localhost:5173/';
          }, 5000);
    

          return res.json();
        } else {
          throw new Error(res);
        }
      })
      .then((json) => console.dir(json))
      .catch((err) => {
        console.error(err);
        setFlashMessage('Email ou Mot de passe incorrect.');
      });
  };

  return (
    <div>
      <div>
        <h2 className='wdSignup'>Se connecter</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <br />
        <br />

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
        <br />
        <br />
        <div className='diptS'>
          <input type='submit' value='Se connecter' className='iptS' />
        </div>
        <br />
        <br />

        {flashMessage && (
          <div className='flash-message'>
            <h5>{flashMessage}</h5>
          </div>
        )}

        <br />
        <br />
        <br />
        <br />
      </form>
    </div>
  );
}

export default LoginForm;
