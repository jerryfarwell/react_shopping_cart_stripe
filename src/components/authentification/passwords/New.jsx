import React, { useState } from "react";

const ResetPassword = async (email) => {
  try {
    const response = await fetch(
      "https://lionfish-app-i98fg.ondigitalocean.app/password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );
    const data = await response.json();
    console.log(data); // should print { message: "Password reset instructions sent" } if successful
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default ResetPassword;
