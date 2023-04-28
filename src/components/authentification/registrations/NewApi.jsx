import React, { useState } from 'react';
import '../../../assets/stylesheet/RegistrationNew.css';
import Cookies from 'js-cookie';

function SignupForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password_confirmation: '',
  });
  const [flashMessage, setFlashMessage] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password !== formData.password_confirmation) {
      setPasswordError(true);
      setFlashMessage('');
    } else {
      fetch("http://localhost:3000/signup", {
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
            console.log(res.headers.get("Authorization"));
            localStorage.setItem("token", res.headers.get("Authorization"));

            setFlashMessage(
              'Félicitations ! Un lien de confirmation a été envoyé à votre adresse e-mail pour finaliser votre inscription.'
            );
            setTimeout(() => {
              window.location.href = 'http://localhost:5173/';
            }, 9000);
  

            return res.json();
          } else {
            throw new Error(res);
          }
        })
        .then((json) => console.dir(json))
        .catch((err) => console.error(err));
    }
  };

  return (
    <div>
      <div>
        <h2 className='wdSignup'>S'inscrire</h2>
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
        <input
          type='password'
          name='password_confirmation'
          value={formData.password_confirmation}
          onChange={handleChange}
          placeholder='Confirmation Mot de passe'
          className='inputF'
          required
        />
        {passwordError && (
          <div className='flash-message'>
            <h5 style={{ color: 'red' }}>Les mots de passe ne correspondent pas</h5>
          </div>
        )}
        <br />
        <br />
        <div className='diptS'>
          <input type='submit' value='Créer mon compte' className='iptS' />
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

export default SignupForm;
