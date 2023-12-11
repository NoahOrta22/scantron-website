import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { APIPost } from "../components/API/Post";

export const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  // submitting the register form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // the raw dictionary body to be sent
    const raw = {
      name: name,
      email: email,
      password: pass,
    };

    // location in API
    const URL = "users/teachers";

    try {
      await APIPost(raw, URL).then(() => navigate("/login"));
    } catch (error) {
      console.error("Registration failed: ", error);
    }
  };

  // navigating to login page
  const handleLoginButtonClick = () => {
    navigate("/login");
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          id="name"
          placeholder="John Smith"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="johnsmith@gmail.com"
          name="email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="password"
          id="password"
          name="password"
          required
        />
        <button type="submit">Register</button>
      </form>
      <button className="link-btn" onClick={handleLoginButtonClick}>
        Already have an account? Login Here!
      </button>
    </div>
  );
};
