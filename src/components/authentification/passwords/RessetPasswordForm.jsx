import React, { useState } from "react";
import ResetPassword from "./New";

function ResetPasswordForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await ResetPassword(email);
      setMessage("Password reset instructions sent");
    } catch (error) {
      console.error(error);
      setMessage("Email address not found");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Reset Password</button>
      </form>
      {message && <div>{message}</div>}
    </div>
  );
}

export default ResetPasswordForm;
