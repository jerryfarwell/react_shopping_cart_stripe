import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function NewPasswordForm() {
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [resetToken, setResetToken] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('reset_password_token');
    setResetToken(token);
  }, [location.search]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put('http://localhost:3000/password', {
        reset_password_token: resetToken,
        password: password,
        password_confirmation: passwordConfirmation,
      });
      console.log(response.data); // should print { message: "Password updated successfully" } if successful
      // redirect user to login page or some other page after successful password reset
    } catch (error) {
      console.error(error);
      setErrorMessage(error.response.data.errors.full_messages[0]);
    }
  };

  return (
    <div>
      <h1>Reset Password</h1>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password-confirmation">Confirm New Password:</label>
          <input
            type="password"
            id="password-confirmation"
            name="password-confirmation"
            value={passwordConfirmation}
            onChange={(event) => setPasswordConfirmation(event.target.value)}
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default NewPasswordForm;


