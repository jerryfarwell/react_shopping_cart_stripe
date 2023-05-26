import React, { useState } from 'react';
import '../../../assets/stylesheet/RegistrationNew.css';
import { Alert, Button } from 'react-bootstrap';
import loading_img from '../../../assets/images/loading_img.gif'

function SignupForm() {
  const [formData, setFormData] = useState({
    first_name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const [flashMessage, setFlashMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [disableButton, setDisableButton] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'password') {
      if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.{6,})/.test(value)) {
        setPasswordError('Le mot de passe doit comporter au moins 6 caractères, dont au moins une lettre majuscule, une lettre minuscule et un chiffre.');
        setDisableButton(true);
      } else {
        setPasswordError('');
        setDisableButton(formData.password !== formData.password_confirmation);
      }
    } else if (name === 'password_confirmation') {
      setDisableButton(formData.password !== value || passwordError);
    } else {
      setDisableButton(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    if (formData.password !== formData.password_confirmation) {
      setPasswordError('Veuillez également vous assurer que le mot de passe et sa confirmation sont identiques.');
      setFlashMessage('');
      setDisableButton(true);
    } else if (!/^(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/.test(formData.password)) {
      setPasswordError('Le mot de passe doit comporter au moins 6 caractères, dont au moins une lettre majuscule, une lettre minuscule et un chiffre.');
      setDisableButton(true);
    } else { 
      fetch("http://localhost:3000/signup", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            first_name: formData.first_name,
            email: formData.email,
            password: formData.password,
          },
        }),
      })
        .then((res) => {
          if (res.ok) {
            setFlashMessage('Félicitations ! Un lien de confirmation a été envoyé à votre adresse mail pour finaliser votre inscription.');
            setTimeout(() => {
              window.location.href = 'http://localhost:5173/';
            }, 9000);
            return res.json();
          } else {
            setFlashMessage('Un compte est déjà enregistré avec cette adresse mail.');
            throw new Error(res);
          }
        })
        .then((json) => console.dir(json))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
  };

  return (
    <div className='form'>
      <div>
        <h2 className='wdSignup'>S'inscrire</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <br />
        <br />
        <input
          type='text'
          name='first_name'
          value={formData.first_name}
          onChange={handleChange}
          placeholder='Prénom'
          className='inputF'
          required
        />
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
        {flashMessage && (
          <Alert variant='success' className='flash-message'>
          <div > 
            <h6>{flashMessage}</h6>
          </div>
          </Alert>
        )}

        <br/>
        {loading && <img src={loading_img} alt="" /> }

        
        <div className='diptS'>
          {/*<input type='submit' value='Créer mon compte' className='inputbtn' disabled={loading || disableButton} />*/}
          <Button type='submit' className='btn-signup' disabled={loading || disableButton} >Créer mon compte</Button>
        </div>
        <br />
        <br />

        {/*passwordError && (
          <div className='flash-message'>
          <h5 className='passwordError'>{passwordError}</h5>
          </div>
        )*/} 
        
        {passwordError && (
          <Alert variant='danger'>
          <div className='flash-message'>
            <h6 /*style={{ color: 'red' }}*/>Le mot de passe doit comporter au moins 6 caractères, dont au moins une lettre majuscule, une lettre minuscule et un chiffre. <br/> Veuillez également vous assurer que le mot de passe et sa confirmation sont identiques.</h6>
          </div>
          </Alert>
        )}

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </form>
    </div>
  );
}

export default SignupForm;


