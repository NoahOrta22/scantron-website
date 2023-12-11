import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { APIPost } from "../components/API/Post";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);
  const [invalidLogin, setInvalidLogin] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // set failure variables
    setLoginFailed(false);
    setInvalidLogin(false);

    //  Body to be sent for authentication
    const raw = {
      email: email,
      password: pass,
    };

    const URL = "auth/login";

    try {
      const response = await APIPost(raw, URL);

      // Everything worked in the API call
      if (response.ok) {
        const responseData = await response.json();

        // Check if the response contains an access_token.
        // The user login data is valid.
        if (responseData.access_token) {
          // Valid user, navigate to "/home"
          navigate("/home");
        } else {
          // Login Data was invalid
          setInvalidLogin(true);
          console.error("Login failed: Invalid response format");
        }
      } else {
        // API call ran into a problem
        console.error("Login failed: ", response.statusText);
        setLoginFailed(true);
      }
    } catch (error) {
      console.error("Login failed: ", error);
    }
  };

  const handleRegisterButtonClick = () => {
    navigate("/register");
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="johnsmith@gmail.com"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="***********"
          id="password"
          name="password"
        />
        <button type="submit">Login</button>
      </form>
      <button className="link-btn" onClick={handleRegisterButtonClick}>
        Don't have an account? Register Here!
      </button>
      {invalidLogin && (
        <p style={{ color: "red" }}>Invalid username or password. Try again</p>
      )}
      {loginFailed && (
        <p style={{ color: "red" }}>Login Failed! Please try again.</p>
      )}
    </div>
  );
};
