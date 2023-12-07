import React from "react";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoginButtonClick = (page) => {
    // Navigate to the login page
    navigate("/login");
  };

  const handleRegisterButtonClick = () => {
    // Navigate to the register page
    navigate("register");
  };

  return (
    <div>
      <h1>This is the landing page</h1>
      <h2>Would you like to login or register?</h2>
      <button type="button" onClick={handleLoginButtonClick}>
        Login
      </button>
      <button type="button" onClick={handleRegisterButtonClick}>
        Register
      </button>
    </div>
  );
};
