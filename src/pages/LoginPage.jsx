import { React, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export const LoginPage  = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    const handleSubmitLoginClick = () => {
        {(() => {
            if (email === "test@gmail.com" && pass === "password") {
                navigate("/home");
            }
        })()}
    }

    const handleRegisterButtonClick = () => {
        navigate("/register");
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="johnsmith@gmail.com" name="email"/>
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="***********" id="password" name="password" />
                <button type="submit" onClick={handleSubmitLoginClick}>Login</button>
            </form>
            <button className="link-btn" onClick={handleRegisterButtonClick}>Don't have an account? Register Here!</button>
        </div>
    )
}